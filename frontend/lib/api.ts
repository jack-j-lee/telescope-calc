const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000";

export type AiryDiskRequest = {
  f_number: number;
  wavelength_m: number;
};

export type AiryDiskResponse = {
  diameter_m: number;
  diameter_um: number;
  formula: string;
};

export type FOVRequest = {
  sensor_width_mm: number;
  sensor_height_mm: number;
  pixels_width: number;
  pixels_height: number;
  focal_length_mm: number;
};

export type FOVResponse = {
  fov_width_deg: number;
  fov_height_deg: number;
  fov_width_rad: number;
  fov_height_rad: number;
  angular_resolution_width_arcsec_per_pixel: number;
  angular_resolution_height_arcsec_per_pixel: number;
  formula: string;
};

export async function computeAiryDisk(req: AiryDiskRequest): Promise<AiryDiskResponse> {
  const res = await fetch(`${API_BASE}/v1/compute/airy-disk`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  return res.json();
}

export async function computeFOV(req: FOVRequest): Promise<FOVResponse> {
  const res = await fetch(`${API_BASE}/v1/compute/fov`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  return res.json();
}