/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["www.one.sg"],
    minimumCacheTTL: 60,
  },
  trailingSlash: true,
};
