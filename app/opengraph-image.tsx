import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zawwar Sami — Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(ellipse at 80% 50%, #4a0e12 0%, #07070a 60%), #07070a",
          color: "#f5f1ea",
          padding: 80,
          fontFamily: "Inter, ui-sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#dc2626",
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ width: 14, height: 14, background: "#dc2626", borderRadius: 999 }} />
          Zawwar Sami
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontWeight: 300,
            }}
          >
            Building thoughtful
          </div>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#dc2626",
            }}
          >
            digital systems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#7d7a85",
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          <span>Engineer · Builder of ZAI</span>
          <span>Mississauga · Canada</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
