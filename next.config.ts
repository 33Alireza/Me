import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "Me"; // Exact match with GitHub repository name case

const nextConfig: NextConfig = {
    output: "export",
    basePath: isProd ? `/${repoName}` : "",
    assetPrefix: isProd ? `/${repoName}/` : "",
    images: {
        unoptimized: true,
    },
    devIndicators: false,
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;
