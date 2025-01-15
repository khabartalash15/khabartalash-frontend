/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // Allow HTTP images (for localhost during development)
        hostname: "localhost",
        port: "5000", // Specify the port for the local server
      },
      {
        protocol: "https", // Only allow HTTPS images
        hostname: "utfs.io", // Add the hostname of the external image provider
      },
      {
        protocol: "https", // Allow images from 3m9tk0am4y.ufs.sh
        hostname: "3m9tk0am4y.ufs.sh",
      },
      {
        protocol: "https", // Allow images from b8rj0050qu.ufs.sh
        hostname: "b8rj0050qu.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
