FROM node:20-bullseye

# Working directory
WORKDIR /usr/src/app

# Install system deps required by Chromium/Playwright
RUN apt-get update && apt-get install -y --no-install-recommends \
		ca-certificates \
		wget \
		gnupg \
		libnss3 \
		libatk1.0-0 \
		libatk-bridge2.0-0 \
		libcups2 \
		libxcomposite1 \
		libxdamage1 \
		libxrandr2 \
		libgbm1 \
		libasound2 \
		libpangocairo-1.0-0 \
		libx11-xcb1 \
		libxss1 \
		libxcb-dri3-0 \
		fonts-liberation \
		libpng16-16 \
		libxshmfence1 \
		libxkbcommon0 \
		libwayland-client0 \
		libwayland-egl1 \
		libdbus-1-3 \
	&& rm -rf /var/lib/apt/lists/*

# Copy package manifests and install dependencies
COPY package*.json ./
RUN npm ci --no-optional --prefer-offline

# Copy the rest of the source
COPY . .

# Install Playwright browsers (chromium) with dependencies
RUN npx playwright install --with-deps chromium

# Build Next.js
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
