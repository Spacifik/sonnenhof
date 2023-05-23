/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "out",
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  }
}

module.exports = nextConfig
