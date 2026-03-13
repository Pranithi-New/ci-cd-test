import type { NextConfig } from "next";
import { optimizeImage } from "next/dist/server/image-optimizer";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/ci-cd-test",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
