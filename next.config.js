const path = require('path')
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');



module.exports = withSass({
  /* bydefault config  option Read For More Optios 
   here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/

  cssModules: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})


// module.exports = {
//   /* Add Your Scss File Folder Path Here */
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }

module.exports = {
  basePath: '/docs',
}

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
    NEXT_PUBLIC_SMTP_PASS: process.env.NEXT_PUBLIC_SMTP_PASS
  },
}

module.exports = {
  images:{
    // loader:"cloudinary",
    // path:"https://res.cloudinary.com/geniesys",
    domains: ["blog.alluvium.net"],
  }
}
