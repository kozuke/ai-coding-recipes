/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    DEBUG_MODE: 'true',
  }
};

module.exports = nextConfig;