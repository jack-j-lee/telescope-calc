from pydantic import BaseModel, Field

class MagnificationRequest(BaseModel):
    telescope_focal_length_mm: float = Field(..., gt=0, description="Telescope focal length in millimeters")
    eyepiece_focal_length_mm: float = Field(..., gt=0, description="Eyepiece focal length in millimeters")

class MagnificationResponse(BaseModel):
    magnification: float
    formula: str
