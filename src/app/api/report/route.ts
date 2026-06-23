import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const filename = 'ALU-Rwanda-Annual-Report-2025-2026.pdf';

  // Target page to render (use the running Next.js host)
  const target = (process.env.PDF_TARGET_URL || 'http://localhost:3000') + '/annual-report?pdf=true';

  let browser;
  let playwrightModule: any;
  try {
    // Load playwright dynamically so the app can build when Playwright isn't installed.
    // Use string concat to avoid static bundler resolution of the package name.
    playwrightModule = await import('play' + 'wright').then((m) => m.default ?? m);
  } catch (e) {
    console.warn('Playwright is not installed; server-side PDF disabled.', e);
    return NextResponse.json(
      { error: 'Playwright not installed. Install Playwright to enable server-rendered PDFs.' },
      { status: 501 }
    );
  }

  try {
    browser = await playwrightModule.chromium.launch({ args: ['--no-sandbox'] });
    const context = await browser.newContext({ viewport: { width: 1200, height: 1700 } });
    const page = await context.newPage();

    await page.goto(target, { waitUntil: 'networkidle', timeout: 45000 });
    // Ensure images (including lazy-loaded ones) are forced to load and
    // trigger scrolling so any intersection-observer based loaders run.
    try {
      await page.evaluate(() => {
        // Make all images eager and copy common lazy attributes to src
        const imgs = Array.from(document.images || []);
        imgs.forEach((img) => {
          try {
            img.loading = 'eager';
            const dataSrc = img.getAttribute('data-src') || img.getAttribute('data-lazy') || (img as any).dataset?.src || null;
            if (dataSrc) img.src = dataSrc;
          } catch (e) {
            // ignore per-image errors
          }
        });
      });

      // Scroll down the page slowly to trigger lazy loading and intersection observers
      await page.evaluate(async () => {
        const total = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        const viewport = window.innerHeight;
        let pos = 0;
        while (pos < total) {
          pos = Math.min(pos + viewport * 0.7, total);
          window.scrollTo({ top: pos, left: 0, behavior: 'auto' });
          // small delay to let images load
          // eslint-disable-next-line no-await-in-loop
          await new Promise((r) => setTimeout(r, 250));
        }
        // scroll back to top
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    } catch (e) {
      console.warn('image preloading/scrolling failed:', e);
    }

    // Remove any UI controls and ensure visuals are stable. Do this with retries
    // because client-side navigation/rehydration can destroy the execution context.
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await page.evaluate(() => {
          document.querySelectorAll('.no-print').forEach((el) => el.remove());
          document.body.style.background = getComputedStyle(document.body).backgroundColor || '#ffffff';
        });
        break;
      } catch (e: any) {
        console.warn('page.evaluate failed (attempt ' + (attempt + 1) + '), retrying...', e?.message ?? e);
        if (attempt === 2) throw e;
        await page.waitForTimeout(300);
      }
    }

    // Wait for fonts to be ready (guarded) and give images time to load.
    try {
      await page.evaluate(() => {
        // resolve immediately if fonts API is not available
        if (!(document as any).fonts || !(document as any).fonts.ready) return;
        return (document as any).fonts.ready;
      });
    } catch (e) {
      console.warn('fonts.ready wait failed or page navigated:', e);
    }

    try {
      await page.waitForFunction(() => Array.from(document.images || []).every((img) => img.complete), { timeout: 10000 });
    } catch (e) {
      console.warn('waiting for images timed out or failed:', e);
    }

    // Small pause to allow layout stabilisation
    await page.waitForTimeout(500);

    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true, margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' }, preferCSSPageSize: true });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=${filename}`,
      },
    });
  } catch (err: any) {
    if (browser) await browser.close();
    console.error('PDF generation error:', err, err && err.stack);
    return NextResponse.json(
      { error: String(err), name: err?.name ?? null, stack: err?.stack ?? null },
      { status: 500 }
    );
  }
}
