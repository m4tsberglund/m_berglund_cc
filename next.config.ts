import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.attorneys.co.za",
        pathname: "/ImageUploads/**",
      },
    ],
  },
};

export default nextConfig;
