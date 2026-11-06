import type { MetadataRoute } from "next";
import { getAssetPath } from "@/lib/asset";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alireza Yousefzadeh — Software Engineer",
    short_name: "Alireza",
    description:
      "Software Engineer & Geek - Building high-quality web & mobile applications and contributing to open-source projects.",
    start_url: getAssetPath("/"),
    display: "standalone",
    background_color: "#020205",
    theme_color: "#0049FF",
    icons: [
      {
        src: getAssetPath("/icon-192"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: getAssetPath("/icon-512"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
