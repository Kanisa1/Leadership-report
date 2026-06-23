Deployment to Render — quick steps

1) Push your repository to GitHub

- If you haven't already, initialize git, commit changes, and push to GitHub:

```bash
git add .
git commit -m "Prepare app for Render: Dockerfile + render.yaml"
git push origin main
```

2) Connect Render to your GitHub repo

- Go to https://render.com → New → Web Service.
- Choose "Docker" as the environment and select your GitHub repository and branch (e.g. `main`).
- If you prefer, use the `render.yaml` file included in the repo for declarative deploys (Render autodetects it).

3) Environment variables

- Add any required env vars on Render:
  - `PDF_TARGET_URL` — set to your production site URL (e.g. `https://your-site.onrender.com`) so `/api/report` renders the public pages.
  - `NODE_ENV=production`
  - `PORT` (Render injects a port automatically; the Dockerfile exposes 3000)

4) Playwright and Browsers

- The Dockerfile uses the Playwright base image and installs Chromium. Render's Docker build will download browsers during the image build.

5) Verify `/api/report`

- After deployment, open `https://<your-service>.onrender.com/api/report` in the browser to confirm the PDF is generated.

Notes & Troubleshooting

- If the Build fails due to Playwright browser downloads timing out, try using Render build caches or prebuilt Docker images that already include browsers.
- If images loaded via external hosts (Flickr) sometimes don't appear, consider copying key images into `public/images/` so rendering is self-contained.
