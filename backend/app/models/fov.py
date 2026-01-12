from pydantic import BaseModel, Field

class FOVRequest(BaseModel):
    sensor_width_mm: float = Field(..., gt=0, description="Sensor width in millimeters")
    sensor_height_mm: float = Field(..., gt=0, description="Sensor height in millimeters")
    pixels_width: int = Field(..., gt=0, description="Number of pixels in width direction")
    pixels_height: int = Field(..., gt=0, description="Number of pixels in height direction")
    focal_length_mm: float = Field(..., gt=0, description="Telescope focal length in millimeters")

class FOVResponse(BaseModel):
    fov_width_deg: float
    fov_height_deg: float
    fov_width_rad: float
    fov_height_rad: float
    angular_resolution_width_arcsec_per_pixel: float
    angular_resolution_height_arcsec_per_pixel: float
    formula: str
