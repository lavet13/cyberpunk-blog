import React from 'react';
import type { GatsbySSR } from 'gatsby';

import theme from './src/@chakra-ui/gatsby-plugin/theme';
import { ChakraWrapper } from './src/@chakra-ui/gatsby-plugin/chakra-root-wrapper';
import { ColorModeScript } from '@chakra-ui/react';

import Layout from './src/components/layout';

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setPreBodyComponents([
    <ColorModeScript
      initialColorMode={theme.config.initialColorMode}
      key='chakra-ui-no-flash'
    />,
  ]);

  setHeadComponents([
    <link
      rel='preload'
      href='/fonts/Refinery-25Regular.ttf'
      as='font'
      type='font/ttf'
      crossOrigin='anonymous'
      key='refinery25Regular'
    />,
  ]);
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = (
  { element },
  pluginOptions
) => <ChakraWrapper {...pluginOptions}>{element}</ChakraWrapper>;

// wrapPageElement: Layout
export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => (
  <Layout>{element}</Layout>
);
