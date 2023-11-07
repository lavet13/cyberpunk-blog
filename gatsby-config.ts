import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      // https://chakra-ui.com/getting-started/gatsby-guide
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        portalZIndex: undefined,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `static-images`,
        path: `${__dirname}/src/assets/images/logo/`,
      },
    },
  ],
};

export default config;
