import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'escape-the-odds.web.app',
      },
      {
        protocol: 'https',
        hostname: 'escapetheodds.com',
      },
      {
        protocol: 'https',
        hostname: 'www.escapetheodds.com',
      },
    ],
  },
};

export default withPayload(nextConfig);
