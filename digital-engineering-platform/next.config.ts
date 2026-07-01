import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly define the project root as the absolute path of this directory
    root: path.resolve("."),
  },
};

export default nextConfig;
