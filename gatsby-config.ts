import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    title: `My Gatsby App`,
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "static/images/icon.png"
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '0pfuqecqrcgz',
        accessToken: '-KZR_4iY72iazE7g8T16q9-QZEHEIVS_3B-V2G_a8wY',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/static/images/`,
      },
    },
    'gatsby-plugin-sharp',
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
  ],
  jsxRuntime: `automatic`,
};

export default config;
