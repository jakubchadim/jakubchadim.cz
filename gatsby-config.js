require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `React Developer - Jakub Chadim`,
    description: 'Senior React developer.',
    author: 'jakubchadim.cz',
    siteUrl: process.env.SITE_URL
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jakub Chadim`,
        short_name: `jakubchadim`,
        start_url: `/`,
        background_color: `#F46912`,
        theme_color: `#FCB826`,
        display: `minimal-ui`,
        // icon: `src/images/favicon.ico` // This path is relative to the root of the site.
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `roboto:300,400,400i,700`
    //     ],
    //     display: 'swap'
    //   }
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-ts-config`
  ]
}
