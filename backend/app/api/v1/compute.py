from fastapi import APIRouter

from app.models.airy import AiryDiskRequest, AiryDiskResponse
from app.core.optics import airy_disk_diameter_m

router = APIRouter(prefix="/compute", tags=["compute"])

@router.post("/airy-disk", response_model=AiryDiskResponse)
def compute_airy_disk(req: AiryDiskRequest) -> AiryDiskResponse:
    d_m = airy_disk_diameter_m(req.f_number, req.wavelength_m)
    return AiryDiskResponse(
        diameter_m=d_m,
        diameter_um=d_m * 1e6,
        formula="d = 2.44 * λ * (F#)",
    )