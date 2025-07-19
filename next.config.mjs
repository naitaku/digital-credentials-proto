/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  distDir: '.next',
  generateEtags: false,
};

export default nextConfig;
