import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // REQUIRED FOR CLOUDFLARE PAGES

  images: {
    unoptimized: true, // REQUIRED
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
};

export default nextConfig;
