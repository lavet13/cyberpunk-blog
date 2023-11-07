import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { variantCyberButton, variantCyberGlitchEffect } from '../utils';

const helpers = createMultiStyleConfigHelpers(['outer', 'glitch', 'tag']);

const Button = helpers.defineMultiStyleConfig({
  baseStyle: defineStyle(props => ({
    outer: variantCyberButton(props),

    glitch: variantCyberGlitchEffect(props),

    tag: {
      position: 'absolute',
      padding: `1px 4px`,
      letterSpacing: `1px`,
      lineHeight: 1,
      bottom: `-5%`,
      right: '5%',
      color: mode('#000', '#fff')(props),
      fontSize: `9px`,
      fontFamily: 'BlenderPro',
      fontWeight: 900,
    },
  })),

  sizes: {
    cyberLg: {
      outer: {
        fontSize: 25,
        fontWeight: 700,
        height: '4rem',
        minW: '14rem',
        lineHeight: '4rem',
      },
      tag: {
        fontSize: '6px',
      },
    },

    cyberSm: {
      outer: {
        fontSize: 20,
        fontWeight: 700,
        height: '3rem',
        minW: '13rem',
        lineHeight: '3rem',
      },

      tag: {
        fontSize: '7px',
        fontFamily: 'Refinery',
      },
    },
  },

  variants: {
    cyber: {
      outer: {},
    },
  },

  defaultProps: {
    size: 'cyberSm',
    colorScheme: 'red',
  },
});

export default Button;
