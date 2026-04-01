# Production Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci || npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production Runtime Stage
FROM node:18-alpine AS production

WORKDIR /app

# Install a simple HTTP server to serve the built app
RUN npm install -g serve

# Copy built app from builder stage
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 5173

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5173', (res) => { if (res.statusCode !== 200) throw new Error(); })"

# Start the server
CMD ["serve", "-s", "dist", "-l", "5173"]

# Development Stage
FROM node:18-alpine AS development

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci || npm install

# Expose port
EXPOSE 5173

# Expose Vite HMR port
EXPOSE 24678

# Start development server with hot reload
CMD ["npm", "run", "dev"]
