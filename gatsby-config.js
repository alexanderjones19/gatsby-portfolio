module.exports = {
  siteMetadata: {
    title: `Alexander Jones - Software Developer`,
    siteUrl: `http://www.alexanderjones.io`,
    author: `Alexander Jones`,
    description: `Portfolio website showcasing the work of Alexander Jones`,
    email: `alexanderjones4215@gmail.com`,
    github: `https://github.com/alexanderjones19`,
    linkedin: `https://www.linkedin.com/in/alexander-jones-73a707166`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/website-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`
  ],
}
