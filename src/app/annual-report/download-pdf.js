// Enables PDF download for the annual report using html2pdf.js (A4 portrait, high quality).
//
// html2canvas 1.4.1 crashes on oklch()/lab() gradient color stops from Tailwind CSS v4.
// getComputedStyle() returns lab()/oklch() as-is (browser supports them natively).
//
// Fix: use the Canvas 2D API to convert each lab()/oklch() value to rgb(), then apply
// patched inline backgroundImage styles to the live DOM before html2pdf clones it.

const _colorCache = new Map();

/**
 * Convert any CSS color value to rgb() via Canvas 2D API.
 * @param {string} val
 * @returns {string}
 */
function resolveColorToRgb(val) {
  if (_colorCache.has(val)) return _colorCache.get(val);
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = val;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
    const result = a === 0 ? 'rgba(0,0,0,0)' : `rgb(${r},${g},${b})`;
    _colorCache.set(val, result);
    return result;
  } catch {
    return 'rgb(0,0,0)';
  }
}

/**
 * Patch a computed gradient string so html2canvas can parse it.
 * Replaces oklch()/lab()/color-mix() with rgb() and removes interpolation hints.
 * @param {string} gradient
 * @returns {string}
 */
function patchGradient(gradient) {
  return gradient
    .replace(/\boklch\([^)]*\)/g, (m) => resolveColorToRgb(m))
    .replace(/\boklab\([^)]*\)/g, (m) => resolveColorToRgb(m))
    .replace(/\blab\([^)]*\)/g, (m) => resolveColorToRgb(m))
    .replace(/\bcolor-mix\((?:[^()]*|\([^()]*\))*\)/g, (m) => resolveColorToRgb(m))
    .replace(
      /linear-gradient\(\s*in\s+[\w-]+(?:\s+(?:shorter|longer|increasing|decreasing)\s+hue)?\s*,\s*/gi,
      'linear-gradient('
    );
}

export async function downloadReportPDF() {
  if (typeof window === 'undefined') return;
  // First, attempt server-side PDF generation for higher fidelity.
  try {
    const res = await fetch('/api/report');
    if (res.ok && res.headers.get('Content-Type')?.includes('application/pdf')) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ALU-Rwanda-Annual-Report-2025-2026.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      return;
    }
  } catch (e) {
    // If server-side PDF isn't available, fall back to client-side generation below.
    console.warn('Server PDF unavailable, falling back to client-side generation.', e);
  }

  const element = document.getElementById('report-container');
  if (!element) {
    alert('Report container not found. Please try again after the page has fully loaded.');
    return;
  }

  // Hide no-print elements
  const noPrintEls = Array.from(document.querySelectorAll('.no-print'));
  noPrintEls.forEach((el) => (el.style.display = 'none'));

  // Wait for fonts and images to load to avoid blank canvases
  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch (e) {
    // ignore
  }

  // Wait for images inside the element to load (with timeout)
  const imgs = Array.from(element.querySelectorAll('img'));
  await Promise.race([
    Promise.all(
      imgs.map((img) =>
        new Promise((res) => {
          if (img.complete && img.naturalWidth !== 0) return res();
          const onok = () => {
            cleanup();
            res();
          };
          const onerr = () => {
            cleanup();
            res();
          };
          const cleanup = () => {
            img.removeEventListener('load', onok);
            img.removeEventListener('error', onerr);
          };
          img.addEventListener('load', onok);
          img.addEventListener('error', onerr);
        })
      )
    ),
    new Promise((res) => setTimeout(res, 3000)),
  ]);

  // Small paint delay
  await new Promise((r) => setTimeout(r, 200));

  // Pre-patch: replace lab()/oklch() gradient stops with rgb() on the live DOM
  // BEFORE html2pdf clones it. html2canvas will then parse safe rgb() values.
  const patched = [];
  const styleBlocks = [];
  const allEls = [element, ...Array.from(element.querySelectorAll('*'))];

  // Helper to set inline style and remember previous value for restore
  const setInline = (el, prop, value) => {
    const prev = el.style.getPropertyValue(prop) || '';
    el.style.setProperty(prop, value, 'important');
    patched.push({ type: 'inline', el, prop, prev });
  };

  // Helper to add a <style> block to override pseudo-elements and remember it
  const addStyleBlock = (selector, prop, value) => {
    const id = `html2pdf-patch-${Math.random().toString(36).slice(2, 9)}`;
    const rule = `${selector} { ${prop}: ${value} !important; }`;
    const style = document.createElement('style');
    style.setAttribute('data-html2pdf-patch', id);
    style.appendChild(document.createTextNode(rule));
    document.head.appendChild(style);
    styleBlocks.push(style);
    return id;
  };

  // Iterate elements and their ::before/::after pseudo-elements
  allEls.forEach((el) => {
    try {
      const pseudos = [null, '::before', '::after'];
      pseudos.forEach((pseudo) => {
        const comp = getComputedStyle(el, pseudo);
        for (let i = 0; i < comp.length; i++) {
          const prop = comp[i];
          const val = comp.getPropertyValue(prop);
          if (!val) continue;
          if (/\b(?:lab|oklch|oklab|color-mix)\(/i.test(val)) {
            const patchedVal = patchGradient(val);
            if (!pseudo) {
              // set inline on element
              setInline(el, prop, patchedVal);
            } else {
              // create style override for pseudo-element
              const selector = `[data-html2pdf-patch-id]`;
              // tag the element so the style targets only it
              if (!el.hasAttribute('data-html2pdf-patch-id')) {
                el.setAttribute('data-html2pdf-patch-id', Math.random().toString(36).slice(2, 9));
              }
              const idVal = el.getAttribute('data-html2pdf-patch-id');
              const sel = `[data-html2pdf-patch-id="${idVal}"]${pseudo}`;
              addStyleBlock(sel, prop, patchedVal);
            }
          }
        }
      });
    } catch (e) {
      // ignore computed style errors for some elements
    }
  });

  const restore = () => {
    noPrintEls.forEach((el) => (el.style.display = ''));
    // restore inline styles
    patched.forEach((p) => {
      if (p.type === 'inline') {
        if (p.prev) p.el.style.setProperty(p.prop, p.prev);
        else p.el.style.removeProperty(p.prop);
      }
    });
    // remove style blocks
    styleBlocks.forEach((s) => s.parentNode && s.parentNode.removeChild(s));
    // remove data attributes used for targeting pseudos
    allEls.forEach((el) => el.hasAttribute && el.removeAttribute && el.removeAttribute('data-html2pdf-patch-id'));
  };

  // Print-based fallback that opens a new window and triggers browser print (user can Save as PDF).
  const printReport = async () => {
    try {
      const printWin = window.open('', '_blank');
      if (!printWin) throw new Error('Unable to open print window (popup blocked)');

      // Collect stylesheets and style tags
      const headHtml = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
        .map((n) => n.outerHTML)
        .join('\n');

      const html = `<!doctype html><html><head><meta charset="utf-8">${headHtml}<style>html,body{height:100%;margin:0;} .no-print{display:none !important;}</style></head><body></body></html>`;
      printWin.document.open();
      printWin.document.write(html);
      printWin.document.close();

      // Wait for new window to be ready
      await new Promise((res) => (printWin.document.readyState === 'complete' ? res() : printWin.addEventListener('load', res)));

      // Clone the report element into print window
      const cloned = element.cloneNode(true);
      // Remove interactive/no-print elements
      cloned.querySelectorAll && cloned.querySelectorAll('.no-print').forEach((n) => n.remove());
      printWin.document.body.appendChild(cloned);

      // Wait for fonts and images to load in the print window
      try {
        if (printWin.document.fonts && printWin.document.fonts.ready) await printWin.document.fonts.ready;
      } catch (e) {}

      const imgs = Array.from(printWin.document.images || []);
      await Promise.all(imgs.map((img) => (img.complete ? Promise.resolve() : new Promise((res) => { img.addEventListener('load', res); img.addEventListener('error', res); }))));

      // Trigger print
      printWin.focus();
      printWin.print();
      return true;
    } catch (err) {
      console.error('Print fallback failed:', err);
      return false;
    }
  };

  // Try print-based fallback before loading html2pdf (avoids html2canvas issues).
  try {
    const printed = await printReport();
    if (printed) {
      restore();
      return;
    }
  } catch (e) {
    console.warn('Print fallback threw, continuing to html2pdf...', e);
  }

  import('html2pdf.js')
    .then((html2pdfModule) => {
      // Handle both ESM default export and direct CJS module.exports
      const html2pdf = html2pdfModule.default ?? html2pdfModule;

      if (typeof html2pdf !== 'function') {
        restore();
        alert('PDF library failed to load. Please refresh the page and try again.');
        return;
      }

      const opt = {
        margin: [10, 10, 10, 10],
        filename: 'ALU-Rwanda-Annual-Report-2025-2026.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2.5,
          useCORS: true,
          allowTaint: true,
          logging: false,
          letterRendering: true,
          // Use foreignObjectRendering for complex CSS support
          foreignObjectRendering: true,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
          after: '.page-break-after',
          avoid: '.page-break-avoid',
        },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(restore)
        .catch((err) => {
          console.error('PDF generation failed:', err);
          restore();
          alert('PDF generation failed. Check the browser console for details.');
        });
    })
    .catch((err) => {
      console.error('Failed to load html2pdf.js:', err);
      restore();
      alert('Failed to load the PDF library. Please check your internet connection and try again.');
    });
}
