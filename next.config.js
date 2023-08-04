/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    serverActions: true,
  },
  i18n,
};

module.exports = nextConfig;
