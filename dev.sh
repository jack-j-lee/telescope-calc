#!/usr/bin/env bash
set -e

echo "Starting Telescope Calc local environment..."

# Start backend
echo "Starting backend (FastAPI)..."
cd backend
uv sync
uv run uvicorn app.main:app --reload --port 8000 &
BACKEND_PID=$!
cd ..

# Start frontend
echo "Starting frontend (Next.js)..."
cd frontend
npm install
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "Backend running on  http://localhost:8000"
echo "Frontend running on http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop everything."

# Graceful shutdown
trap "echo 'Shutting down...'; kill $BACKEND_PID $FRONTEND_PID" SIGINT SIGTERM

wait