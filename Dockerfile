# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only dependency files first
COPY package.json package-lock.json ./

# Install all deps
RUN npm ci

# Copy source code
COPY . .

# Build the Next.js application (Since output: export, it creates the 'out' directory)
RUN npm run build

# Stage 2: Production Runtime
FROM node:20-alpine

WORKDIR /app

# Install 'serve' package to serve the static files simply and quietly
RUN npm install -g serve

# Switch to non-root user
USER node

# Copy the static export directory from the builder
COPY --chown=node:node --from=builder /app/out ./out

# Expose app port
EXPOSE 3000

# Start app using serve (very simple, minimal logs)
CMD ["serve", "out", "-p", "3000"]
