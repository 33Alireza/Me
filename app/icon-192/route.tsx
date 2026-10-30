import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020205",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "38px",
          border: "8px solid rgba(0, 210, 255, 0.6)",
        }}
      >
        <span
          style={{
            fontSize: "100px",
            fontWeight: 800,
            color: "#00d2ff",
            fontFamily: "monospace",
          }}
        >
          AY
        </span>
      </div>
    ),
    {
      width: 192,
      height: 192,
    }
  );
}
