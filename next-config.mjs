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
          // destination: `${process.env.LEARN_APP_FALLBACK_URI}/:path*`,
          destination: `http://localhost:3000`,
        },
      ],
      beforeFiles: [],
      afterFiles: [],
    };
  },
};

export default nextConfig;
