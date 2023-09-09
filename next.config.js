/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "media-assets.swiggy.com",
      "images.dominos.co.in",
      "png.pngtree.com",
    ],
  },
};

module.exports = nextConfig;
