from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.compute import router as compute_router

app = FastAPI(
    title="Telescope Calc API",
    version="0.1.0",
)

# Dev-friendly CORS (lock down in prod)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(compute_router, prefix="/v1")

@app.get("/health")
def health():
    return {"ok": True}