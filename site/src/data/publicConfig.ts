export const publicConfig = {
  stationName: import.meta.env.VITE_PUBLIC_SITE_NAME || "Web Radio Conexao Jamaica",
  siteUrl: import.meta.env.VITE_PUBLIC_SITE_URL || "https://example.com",
  streamUrl: import.meta.env.VITE_PUBLIC_STREAM_URL || "https://example.com/stream"
} as const;
