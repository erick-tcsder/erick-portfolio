/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  images:{
    domains: ["images.ctfassets.net"],
    unoptimized: true
  }
}
