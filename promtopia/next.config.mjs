/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enable experimental features if needed
    serverComponentsExternalPackages: ["mongoose"], // Allow mongoose to be used with server components
  },
  images: {
    domains: ["1h3.googleusercontent.com"], // Allow images from this domain
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true, // Enable top-level await support
    };
    return config;
  },
};

export default nextConfig;
