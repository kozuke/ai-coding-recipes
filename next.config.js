/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    DEBUG_MODE: 'true',
  },
};

module.exports = nextConfig;
