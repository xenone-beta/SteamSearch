/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['shared.akamai.steamstatic.com', 'steamcdn-a.akamaihd.net'],
  },
}

module.exports = nextConfig
