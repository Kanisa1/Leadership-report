FROM mcr.microsoft.com/playwright:v1.39.0-focal

# Use a stable working directory
WORKDIR /usr/src/app

# Install app dependencies (use package-lock for reproducible builds)
COPY package*.json ./
RUN npm ci --no-optional --prefer-offline

# Copy source
COPY . .

# Ensure Playwright browsers are installed (image often includes them, but run to be safe)
RUN npx playwright install --with-deps chromium

# Build the Next.js app
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "start"]
