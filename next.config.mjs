/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'minio.fona-vps.cloud',
        },
      ],
    },
    // ... other Next.js configurations
  };
  
  export default nextConfig;
  