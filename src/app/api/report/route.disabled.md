Playwright PDF route disabled

This route was temporarily disabled because the development environment does not have Playwright installed,
which caused the Next/Turbopack build to fail. To re-enable server-side PDF generation:

1. Install Playwright and Chromium:

   npm install playwright
   npx playwright install --with-deps chromium

2. Restore or recreate `route.ts` using the original Playwright-based implementation.

Alternatively, keep client-side PDF generation (html2pdf.js) which is available by default via the Download button.
