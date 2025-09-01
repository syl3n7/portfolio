#!/bin/bash

echo "Building Next.js app for Cloudflare Pages..."
npm run build

echo "Build complete! Upload the 'out' directory to Cloudflare Pages"
echo "or connect your GitHub repository to Cloudflare Pages for automatic deployments."
