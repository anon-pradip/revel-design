/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "revel-dev.s3.ap-south-1.amazonaws.com",
      "revel-dev.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
