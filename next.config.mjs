/**
 * @typedef {import('next').NextConfig} NextConfig
 * @type {NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://nextjs-vercel-timeout.vercel.app/:path*`,
        },
      ],
      beforeFiles: [],
      afterFiles: [],
    };
  },
};

export default nextConfig;
