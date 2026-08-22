import { Radio, ShieldCheck, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { publicConfig } from "./data/publicConfig";
import { fetchNowPlaying, fetchPublicAds, fetchSchedule } from "./lib/api";
import type { NowPlayingResponse, PublicAd, ScheduleSlot } from "./types";
import "./styles.css";

export default function App() {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingResponse | null>(null);
  const [schedule, setSchedule] = useState<ScheduleSlot[]>([]);
  const [ads, setAds] = useState<PublicAd[]>([]);

  useEffect(() => {
    fetchNowPlaying().then(setNowPlaying).catch(() => setNowPlaying(null));
    fetchSchedule().then((payload) => setSchedule(payload.slots)).catch(() => setSchedule([]));
    fetchPublicAds().then((payload) => setAds(payload.ads)).catch(() => setAds([]));
  }, []);

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Public engineering skeleton</p>
          <h1>{publicConfig.stationName}</h1>
          <p>
            React/Vite site surface with safe mock APIs, placeholder stream config,
            and privacy-aware public documentation.
          </p>
        </div>
        <div className="status-strip" aria-label="Public architecture highlights">
          <span><Radio size={18} /> Live media shell</span>
          <span><Volume2 size={18} /> Player-ready UI</span>
          <span><ShieldCheck size={18} /> No production secrets</span>
        </div>
      </section>

      <section className="grid">
        <article>
          <h2>Now playing</h2>
          <p className="metric">{nowPlaying?.track.title || "Programacao ao vivo"}</p>
          <p>{nowPlaying?.track.artist || publicConfig.stationName}</p>
        </article>

        <article>
          <h2>Schedule model</h2>
          {schedule.map((slot) => (
            <p key={slot.id}>
              <strong>{slot.day}</strong> {slot.time} - {slot.program}
            </p>
          ))}
        </article>

        <article>
          <h2>Ads model</h2>
          {ads.map((ad) => (
            <p key={ad.id}>
              <strong>{ad.title}</strong> {ad.description}
            </p>
          ))}
        </article>
      </section>
    </main>
  );
}
