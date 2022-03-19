/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    loader: 'imgix',
    path: '/',
  },
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
}
