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
  experimental: {
    turbo: false
  }
};

module.exports = nextConfig;