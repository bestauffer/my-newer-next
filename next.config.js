/**
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
    output: 'export',
    images: {
        dangerouslyAllowSVG: true,
        domains: ["img.shields.io"],
      },
}

module.exports = nextConfig
