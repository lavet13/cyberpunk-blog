import { extendTheme, ThemeConfig, theme as base } from '@chakra-ui/react';

import breakpoints from './breakpoints';
import styles from './styles';
import colors from './colors';

import Container from './components/container';
import CustomContainer from './components/custom-container';
import Button from './components/button';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  breakpoints,
  styles,
  components: { Container, CustomContainer, Button },
  colors,
  fonts: {
    body: `"Refinery", ${base.fonts?.body}`,
    heading: `"Refinery", ${base.fonts?.heading}`,
  },
  semanticTokens: {
    colors: {
      'chakra-body-text': {
        _light: 'black',
        _dark: 'white',
      },

      'chakra-body-bg': {
        _light: `linear-gradient(90deg, #f5ed00 70%, #e6de00 70%), #fff700`,
        _dark: `linear-gradient(90deg, #192a56 70%, #14244b 70%), #111111`,
      },
    },
  },
});

export default theme;
