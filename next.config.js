/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    DEBUG_MODE: 'true',
  },
  output: 'export',  // 静的出力を有効化
  images: {
    unoptimized: true,  // 静的出力時に画像最適化を無効化
  },
  trailingSlash: true,  // URLの末尾にスラッシュを追加（静的ホスティング用）
};

module.exports = nextConfig;
