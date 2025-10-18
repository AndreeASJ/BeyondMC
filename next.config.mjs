/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false,
  },
}

export default nextConfig


