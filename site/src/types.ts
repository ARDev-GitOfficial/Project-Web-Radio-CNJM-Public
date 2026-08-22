export type NowPlayingResponse = {
  ok: boolean;
  track: {
    artist: string;
    title: string;
    album: string | null;
    coverUrl: string | null;
  };
  stats: {
    listeners: number;
    isOnline: boolean;
    bitrate: string;
  };
  fetchedAt: string;
};

export type ScheduleSlot = {
  id: string;
  day: string;
  time: string;
  program: string;
  host: string;
};

export type PublicAd = {
  id: string;
  title: string;
  description: string;
  placement: "home" | "program";
};
