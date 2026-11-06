import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Alireza Yousefzadeh — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#020205",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
        color: "#F0F4FF",
        border: "4px solid rgba(0, 73, 255, 0.4)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            background: "#0049FF",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          AY
        </div>
        <span
          style={{
            fontSize: "24px",
            color: "#00d2ff",
            fontFamily: "monospace",
          }}
        >
          alireza@portfolio:~
        </span>
      </div>
      <div
        style={{
          fontSize: "64px",
          fontWeight: 800,
          textTransform: "uppercase",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        Alireza Yousefzadeh
      </div>
      <div
        style={{
          fontSize: "32px",
          color: "#00d2ff",
          fontWeight: 700,
          marginBottom: "32px",
        }}
      >
        Software Engineer & Mobile Specialist
      </div>
      <div
        style={{
          fontSize: "20px",
          color: "rgba(240, 244, 255, 0.7)",
          maxWidth: "800px",
          lineHeight: 1.4,
        }}
      >
        Building high-quality mobile applications and contributing to
        open-source projects.
      </div>
    </div>,
    {
      ...size,
    },
  );
}
