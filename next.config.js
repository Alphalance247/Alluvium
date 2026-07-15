/** @type {import('next').NextConfig} */
module.exports = {
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
