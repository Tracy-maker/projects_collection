/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [cdn.sanity.io],
  },
};
