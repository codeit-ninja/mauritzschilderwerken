FROM node:22-slim AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
RUN apt-get update -y && apt-get install -y openssl

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Build the SvelteKit application
RUN pnpm run build

# Use a lightweight runtime image
FROM node:22-slim AS runner

WORKDIR /app

# Copy built app and dependencies
COPY --from=builder /app /app

# Expose the port SvelteKit runs on
EXPOSE 3000

# Start the application
CMD [ "node", "./build/index.js" ]