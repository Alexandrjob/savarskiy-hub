/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/neobrutalism',
  transpilePackages: ['@mui/material', '@emotion/react', '@emotion/styled', 'framer-motion'],
  compiler: {
    emotion: true,
  },
};

export default nextConfig;