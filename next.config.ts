import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async rewrites() {
    return [
      // Bar Darts web app lives in public/apps/bar-darts/play as static files.
      {
        source: "/apps/bar-darts/play",
        destination: "/apps/bar-darts/play/index.html",
      },
    ];
  },
};

export default nextConfig;
