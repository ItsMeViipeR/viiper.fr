import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "preview.redd.it",
      },
      {
        hostname: "t4.ftcdn.net",
      },
      {
        hostname: "imgs.search.brave.com",
      },
    ],
  },
};

export default nextConfig;
