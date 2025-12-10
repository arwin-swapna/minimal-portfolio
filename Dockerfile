# Stage 1: Install dependencies and build the Next.js app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package definition files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy rest of the application (excluding node_modules/.next via .dockerignore)
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Create a lean production image
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only necessary artifacts from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]