/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['source.unsplash.com' , 'picsum.photos']
  }
}

module.exports = nextConfig
