import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rohit Borse - Flutter Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
          color: "white",
          fontFamily: "Geist, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, textTransform: "uppercase", letterSpacing: 6, color: "#7dd3fc" }}>
          Portfolio
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 12 }}>Rohit Borse</div>
        <div style={{ fontSize: 36, marginTop: 12, color: "#e2e8f0" }}>Flutter Developer</div>
        <div style={{ fontSize: 24, marginTop: 24, color: "#94a3b8" }}>
          Building modern mobile experiences with Flutter, Firebase, and polished UX.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
