/**
 * @typedef {import('next').NextConfig} NextConfig
 * @type {NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/fallback-to-slow",
          destination: `/slow-page`,
        },
      ],
      beforeFiles: [],
      afterFiles: [],
    };
  },
};

export default nextConfig;
