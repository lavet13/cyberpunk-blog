import { extendTheme, ThemeConfig, theme as base } from '@chakra-ui/react';

import breakpoints from './breakpoints';
import styles from './styles';

import Container from './components/container';
import CustomContainer from './components/custom-container';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  breakpoints,
  styles,
  components: { Container, CustomContainer },
  fonts: {
    body: `"Refinery", ${base.fonts?.body}`,
    heading: `"Refinery", ${base.fonts?.heading}`,
  },
});

export default theme;
