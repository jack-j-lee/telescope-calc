# Telescope Calc

Telescope optics calculators: Airy disk, FOV, magnification.

## Local development

```bash
./dev.sh
```

- Frontend: http://localhost:3000  
- Backend: http://localhost:8000  

## Cloud deployment

### Single-host (Docker Compose + Nginx)

Runs frontend, backend, and Nginx reverse proxy. One public port (80).

```bash
docker compose -f docker-compose.cloud.yml up -d --build
```

- App: http://localhost (or your server’s hostname)
- API: `/v1`, `/health` (same origin)

Optional: copy `env.example` to `.env` and set `CORS_ORIGINS` / `NEXT_PUBLIC_API_BASE` if you override defaults.

### Split frontend + backend (Render, Railway, Fly, etc.)

1. **Backend**: Use `backend/Dockerfile`. Expose port 8000. Set env `CORS_ORIGINS` to your frontend URL(s), e.g. `https://myapp.onrender.com`.
2. **Frontend**: Use `frontend/Dockerfile`. Build with `NEXT_PUBLIC_API_BASE` set to your backend URL, e.g. `https://myapi.onrender.com`. Expose port 3000.

Example build arg for frontend:

```bash
docker build -f frontend/Dockerfile --build-arg NEXT_PUBLIC_API_BASE=https://myapi.onrender.com ./frontend
```

### HTTPS

For production, put Nginx or your platform behind TLS (e.g. Let’s Encrypt, Cloudflare, or platform-managed SSL). The app is HTTP-only by default.
