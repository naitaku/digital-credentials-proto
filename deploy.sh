#!/bin/bash

# Azure deployment script for Next.js app

echo "Starting deployment..."

# Install dependencies
echo "Installing dependencies..."
npm ci --production=false

# Build the application
echo "Building application..."
npm run build

echo "Deployment complete!"