import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // This machine's sharp/libvips build intermittently fails Next's image
    // optimization pipeline (returns a broken response that then gets cached).
    // These are already-sized static brand assets, so skip optimization entirely.
    unoptimized: true,
  },
};

export default nextConfig;
