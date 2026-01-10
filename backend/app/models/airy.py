from pydantic import BaseModel, Field

class AiryDiskRequest(BaseModel):
    f_number: float = Field(..., gt=0, description="Telescope f/# (dimensionless)")
    wavelength_m: float = Field(..., gt=0, description="Wavelength in meters")

class AiryDiskResponse(BaseModel):
    diameter_m: float
    diameter_um: float
    formula: str