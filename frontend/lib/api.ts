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