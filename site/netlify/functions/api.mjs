const headers = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "access-control-allow-origin": "*"
};

function json(statusCode, payload) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(payload)
  };
}

function apiPath(event) {
  return (event.path || "")
    .replace(/^\/api\/?/, "/")
    .replace(/^\/\.netlify\/functions\/api\/?/, "/")
    .replace(/\/$/, "") || "/";
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "GET") {
    return json(405, { ok: false, message: "Method not allowed." });
  }

  const path = apiPath(event);
  const fetchedAt = new Date().toISOString();

  if (path === "/now-playing") {
    return json(200, {
      ok: true,
      track: {
        artist: "Web Radio Conexao Jamaica",
        title: "Programacao ao vivo",
        album: null,
        coverUrl: null
      },
      stats: {
        listeners: 0,
        isOnline: true,
        bitrate: "128"
      },
      fetchedAt
    });
  }

  if (path === "/schedule") {
    return json(200, {
      slots: [
        {
          id: "sample-monday",
          day: "Segunda",
          time: "08:00 - 12:00",
          program: "Faixa publica de exemplo",
          host: "Web Radio Conexao Jamaica"
        }
      ],
      fetchedAt
    });
  }

  if (path === "/ads") {
    return json(200, {
      ads: [
        {
          id: "sample-ad",
          title: "Espaco publicitario demonstrativo",
          description: "Modelo sem campanha real.",
          placement: "home"
        }
      ],
      fetchedAt
    });
  }

  return json(404, { ok: false, message: "Endpoint not found." });
}
