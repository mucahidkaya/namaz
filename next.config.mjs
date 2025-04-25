/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export in Next.js 13+ and 15
  trailingSlash: true,
  env: {
    DEVMODE: process.env.DEVMODE,
  }, // Helps GitHub Pages routing
};

export default nextConfig;
