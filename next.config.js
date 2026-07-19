/** @type {import('next').NextConfig} */
module.exports = {
  // Don't emit server source maps in production builds — they added ~95MB to
  // .next/server, pushing the deploy bundle over Amplify's 220 MiB limit.
  experimental: {
    serverSourceMaps: false,
  },
  images: {
    remotePatterns: [
      { hostname: "blog.alluvium.net" },
      { hostname: "pest.ec2.alluvium.net" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/support/contact",
        destination: "/contact-us",
        permanent: true, // triggers 308
      },
    ];
  },
};
