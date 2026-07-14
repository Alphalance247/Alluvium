// module.exports = {
//   /* Add Your Scss File Folder Path Here */
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
// };

// module.exports = withImages({
//   exclude: path.resolve(__dirname, 'public/assets'),
//   webpack(config, options) {

//     // config.module.rules.push({
//     //   test: /\.svg$/,
//     //   issuer: {
//     //     test: /\.(js|ts)x?$/,
//     //   },
//     //   use: ["@svgr/webpack"],
//     // });

//     return config
//   }
// })

module.exports = {
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SMTP_USERNAME: process.env.NEXT_PUBLIC_SMTP_USERNAME,
    NEXT_PUBLIC_SMTP_PASS: process.env.NEXT_PUBLIC_SMTP_PASS,
    AMPLIFY_NEXTJS_EXPERIMENTAL_TRACE:
      process.env.AMPLIFY_NEXTJS_EXPERIMENTAL_TRACE,
  },
};

module.exports = {
  images: {
    // loader:"cloudinary",
    // path:"https://res.cloudinary.com/geniesys",
    domains: ["blog.alluvium.net", "pest.ec2.alluvium.net"],
  },
};

module.exports = {
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
