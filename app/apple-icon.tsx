import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "36px",
          border: "4px solid rgba(0, 210, 255, 0.6)",
        }}
      >
        <span
          style={{
            fontSize: "96px",
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
      ...size,
    }
  );
}