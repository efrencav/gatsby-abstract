/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `A react next landing page`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@efrencav`,
  },
  plugins: [{
    resolve: `gatsby-plugin-styled-components`,
    options: {
      minify: false, // Breaks styles if not set to false
    },
  },
    `gatsby-plugin-sass`,
  ],

}
