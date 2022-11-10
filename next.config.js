const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "musicbook.local.betaman.xyz",
      "static-cdn.jtvnw.net",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
