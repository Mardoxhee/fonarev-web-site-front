/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '360.fonasite.app',
        },
      ],
    },
    // ... other Next.js configurations
  };
  
  export default nextConfig;
  