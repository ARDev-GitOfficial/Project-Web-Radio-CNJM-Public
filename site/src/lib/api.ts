import type { NowPlayingResponse, PublicAd, ScheduleSlot } from "../types";

async function readJson<T>(path: string): Promise<T> {
  const response = await fetch(path, {
    headers: { Accept: "application/json" }
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${path}`);
  }

  return response.json() as Promise<T>;
}

export function fetchNowPlaying() {
  return readJson<NowPlayingResponse>("/api/now-playing");
}

export function fetchSchedule() {
  return readJson<{ slots: ScheduleSlot[]; fetchedAt: string }>("/api/schedule");
}

export function fetchPublicAds() {
  return readJson<{ ads: PublicAd[]; fetchedAt: string }>("/api/ads");
}
