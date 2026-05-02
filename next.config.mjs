/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ibb.co.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'web.programming-hero.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
