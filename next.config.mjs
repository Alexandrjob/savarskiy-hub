/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@mui/material', '@emotion/react', '@emotion/styled', 'framer-motion'],
  compiler: {
    emotion: true,
  },
};

export default nextConfig;