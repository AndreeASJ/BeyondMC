/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/BeyondMC' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/BeyondMC' : '',
}

export default nextConfig


