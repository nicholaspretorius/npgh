module.exports = {
  siteMetadata: {
    title: `Nicholas Pretorius`,
    description: `Rudimentary 'Today I Learned' log.`,
    siteUrl: `https://nicholaspretorius.github.io`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-feed`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PostCode`,
        short_name: `PC`,
        start_url: `/`,
        background_color: `#007acc`,
        theme_color: `#007acc`,
        display: `standalone`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
};
