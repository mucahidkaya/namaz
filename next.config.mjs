/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export in Next.js 13+ and 15
  trailingSlash: true, // Helps GitHub Pages routing
  basePath: '/namaz', // <== set this to your GitHub repo name
  assetPrefix: '/namaz' // <== also set this for media/scripts/css
};

export default nextConfig;
