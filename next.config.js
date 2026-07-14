const path = require("path");

module.exports = {
  // basePath: "/docs",
  swcMinify: true,

  env: {
    NEXT_PUBLIC_SMTP_USERNAME: process.env.NEXT_PUBLIC_SMTP_USERNAME,
    NEXT_PUBLIC_SMTP_PASS: process.env.NEXT_PUBLIC_SMTP_PASS,
    AMPLIFY_NEXTJS_EXPERIMENTAL_TRACE:
      process.env.AMPLIFY_NEXTJS_EXPERIMENTAL_TRACE,
  },

  images: {
    domains: ["blog.alluvium.net", "pest.ec2.alluvium.net"],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  async redirects() {
    return [
      {
        source: "/support/contact",
        destination: "/contact-us",
        permanent: true,
      },
    ];
  },
};
