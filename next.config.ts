import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // IMPORTANT for Hostinger static hosting

  images: {
    unoptimized: true, // REQUIRED for static export
  },

  trailingSlash: true, // helps avoid routing issues in static hosting
};

export default nextConfig;