import type { NextConfig } from "next";

const raw = process.env.BASE_PATH?.trim() ?? "";
const basePath =
  raw === "" ? "" : raw.startsWith("/") ? raw : `/${raw}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
