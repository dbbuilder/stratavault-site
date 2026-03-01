import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow app.localhost:3000 to be treated as the app subdomain in local dev
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
