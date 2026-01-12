from fastapi import APIRouter

from app.models.airy import AiryDiskRequest, AiryDiskResponse
from app.models.fov import FOVRequest, FOVResponse
from app.core.optics import (
    airy_disk_diameter_m,
    field_of_view_rad,
    field_of_view_deg,
    angular_resolution_arcsec_per_pixel,
)

router = APIRouter(prefix="/compute", tags=["compute"])

@router.post("/airy-disk", response_model=AiryDiskResponse)
def compute_airy_disk(req: AiryDiskRequest) -> AiryDiskResponse:
    d_m = airy_disk_diameter_m(req.f_number, req.wavelength_m)
    return AiryDiskResponse(
        diameter_m=d_m,
        diameter_um=d_m * 1e6,
        formula="d = 2.44 * λ * (F#)",
    )

@router.post("/fov", response_model=FOVResponse)
def compute_fov(req: FOVRequest) -> FOVResponse:
    fov_width_rad = field_of_view_rad(req.sensor_width_mm, req.focal_length_mm)
    fov_height_rad = field_of_view_rad(req.sensor_height_mm, req.focal_length_mm)
    fov_width_deg = field_of_view_deg(req.sensor_width_mm, req.focal_length_mm)
    fov_height_deg = field_of_view_deg(req.sensor_height_mm, req.focal_length_mm)
    
    angular_res_width = angular_resolution_arcsec_per_pixel(fov_width_deg, req.pixels_width)
    angular_res_height = angular_resolution_arcsec_per_pixel(fov_height_deg, req.pixels_height)
    
    return FOVResponse(
        fov_width_deg=fov_width_deg,
        fov_height_deg=fov_height_deg,
        fov_width_rad=fov_width_rad,
        fov_height_rad=fov_height_rad,
        angular_resolution_width_arcsec_per_pixel=angular_res_width,
        angular_resolution_height_arcsec_per_pixel=angular_res_height,
        formula=f"FOV = 2 × arctan(sensor_size / (2 × focal_length))",
    )