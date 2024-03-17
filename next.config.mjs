/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.piton.com.tr",
        port: "",
        pathname: "/assignment/**",
      },
    ],
  },
};

export default nextConfig;
