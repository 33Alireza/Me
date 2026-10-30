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
          borderRadius: "100px",
          border: "16px solid rgba(0, 210, 255, 0.6)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="320"
          height="320"
        >
          <path d="M 160 150 L 70 256 L 160 362" fill="none" stroke="#00d2ff" strokeWidth="52" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 352 150 L 442 256 L 352 362" fill="none" stroke="#00d2ff" strokeWidth="52" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 296 116 L 216 396" fill="none" stroke="#0049FF" strokeWidth="44" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  );
}
