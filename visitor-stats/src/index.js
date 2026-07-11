const ALLOWED_ORIGIN = "https://yqwang96.github.io";

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}

function response(body, init, origin) {
  const headers = new Headers(init && init.headers);
  Object.entries(corsHeaders(origin)).forEach(([key, value]) => headers.set(key, value));
  headers.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(body), { ...init, headers });
}

function isAllowed(origin) {
  return origin === ALLOWED_ORIGIN || origin === "http://localhost:4000" || origin === "http://127.0.0.1:4000";
}

function coarseCoordinate(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.round(number / 10) * 10 : 0;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders(origin) });
    if (!isAllowed(origin) && request.method === "POST") return response({ error: "Origin not allowed" }, { status: 403 }, origin);

    if (url.pathname === "/v1/visit" && request.method === "POST") {
      const cf = request.cf || {};
      const country = typeof cf.country === "string" && cf.country.length === 2 ? cf.country : "Unknown";
      const latitude = coarseCoordinate(cf.latitude);
      const longitude = coarseCoordinate(cf.longitude);

      await env.DB.prepare(
        "INSERT INTO visitor_map_points (country, latitude, longitude, views) VALUES (?, ?, ?, 1) " +
        "ON CONFLICT(country, latitude, longitude) DO UPDATE SET views = views + 1"
      ).bind(country, latitude, longitude).run();

      return response({ ok: true }, { status: 201 }, origin);
    }

    if (url.pathname === "/v1/stats" && request.method === "GET") {
      const result = await env.DB.prepare(
        "SELECT country, latitude, longitude, views FROM visitor_map_points ORDER BY views DESC LIMIT 300"
      ).all();
      const total = await env.DB.prepare("SELECT COALESCE(SUM(views), 0) AS total_views FROM visitor_map_points").first();
      return response({ total_views: total.total_views, points: result.results }, { headers: { "Cache-Control": "no-store" } }, origin);
    }

    return response({ error: "Not found" }, { status: 404 }, origin);
  }
};
