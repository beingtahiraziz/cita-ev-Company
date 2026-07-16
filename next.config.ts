/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'citaevcharger.co.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'citaevcharger.com.pk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'citaevcharger.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
