/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
      tester: `Booperdy doop I'm a zesty test!`,
      testQuote: `sike`,
      latestBlog: `Dreaming of Worms`,
      thumbnailImage: `images/calendula.jpeg`,
      thumbnailTitle: `Obnixious optimism`,
      thumbnailText: `What a blooming beautiful day to procrastinate!`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
