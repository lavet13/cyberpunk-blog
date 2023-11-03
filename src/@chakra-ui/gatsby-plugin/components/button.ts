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
      fontSize: `var(--label-size)`,
      fontFamily: 'BlenderPro',
      fontWeight: 900,
    },
  })),

  sizes: {
    cyberLg: {
      outer: {
        fontSize: '26px',
        fontWeight: 700,
        height: '75px',
        minW: '300px',
        lineHeight: '75px',
      },
    },
  },

  variants: {
    cyber: {
      outer: {},
    },
  },

  defaultProps: {
    size: 'cyberLg',
    colorScheme: 'red',
  },
});

export default Button;
