/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled static export to allow SSR/logging
  // output: 'export',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
