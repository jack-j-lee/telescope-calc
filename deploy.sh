#!/usr/bin/env bash
set -e

PROJECT_ID=instant-audio-484417-g6
REGION=us-central1
REPO=myapp-repo

echo "🚀 Deploying backend..."
cd backend
gcloud builds submit . \
  --tag us-central1-docker.pkg.dev/$PROJECT_ID/$REPO/backend:latest

gcloud run deploy myapp-backend \
  --image us-central1-docker.pkg.dev/$PROJECT_ID/$REPO/backend:latest \
  --port 8000 \
  --allow-unauthenticated \
  --region $REGION
cd ..

echo "🚀 Deploying frontend..."
cd frontend
gcloud builds submit . \
  --tag us-central1-docker.pkg.dev/$PROJECT_ID/$REPO/frontend:latest

gcloud run deploy myapp-frontend \
  --image us-central1-docker.pkg.dev/$PROJECT_ID/$REPO/frontend:latest \
  --port 3000 \
  --allow-unauthenticated \
  --region $REGION
cd ..

echo "✅ Deployment complete!"
