import { extendTheme, ThemeConfig, theme as base } from '@chakra-ui/react';

import breakpoints from './breakpoints';
import styles from './styles';
import colors from './colors';

import Container from './components/container';
import CustomContainer from './components/custom-container';
import Button from './components/button';
import Nav from './components/nav';
import HeaderTop from './components/header-top';
import Logo from './components/logo';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  breakpoints,
  styles,
  components: { Container, CustomContainer, Button, Nav, HeaderTop, Logo },
  colors,
  fonts: {
    body: `"Refinery", "BlenderPro", ${base.fonts?.body}`,
    heading: `"Refinery", "BlenderPro", ${base.fonts?.heading}`,
    mono: `"Refinery", "BlenderPro", ${base.fonts?.mono}`,
  },
  semanticTokens: {
    colors: {
      'scrollbar-bg': {
        _light: '#f9f002',
        _dark: '#001F3F',
      },

      'scrollbar-thumb-bg': {
        _light: '#ff003c',
        _dark: '#800080',
      },

      'scrollbar-thumb-hover-bg': {
        _light: '#ff9800',
        _dark: '#cc00cc',
      },

      'scrollbar-border-color': {
        _light: '#8ae66e',
        _dark: '#FFD700',
      },

      'chakra-body-text': {
        _light: 'black',
        _dark: 'white',
      },

      'chakra-body-bg': {
        _light: `linear-gradient(90deg, #f5ed00 70%, #e6de00 70%)`,
        _dark: `linear-gradient(90deg, #192a56 70%, #14244b 70%)`,
      },
    },
  },
});

export default theme;
