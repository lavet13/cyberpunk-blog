import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { variantCyberButton } from '../utils';

const helpers = createMultiStyleConfigHelpers(['outer', 'glitch', 'tag']);

const Button = helpers.defineMultiStyleConfig({
  baseStyle: defineStyle(props => ({
    outer: variantCyberButton(props),

    glitch: {
      display: 'none',

      position: 'absolute',
      top: `calc(var(--border) * -1)`,
      left: `calc(var(--border) * -1)`,
      right: `calc(var(--border) * -1)`,
      bottom: `calc(var(--border) * -1)`,
      background: 'shadow-primary',
      textShadow: `2px 2px var(--chakra-colors-shadow-primary), -2px -2px var(--chakra-colors-shadow-secondary)`,
      clipPath: `var(--clip)`,

      _groupHover: {
        display: 'block',
      },

      _before: {
        content: `""`,

        position: 'absolute',

        top: `calc(var(--border) * 1)`,
        right: `calc(var(--border) * 1)`,
        left: `calc(var(--border) * 1)`,
        bottom: `calc(var(--border) * 1)`,

        clipPath: `var(--clip)`,
        background: 'primary',

        zIndex: -1,
      },
    },

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
    colorScheme: 'blue',
  },
});

export default Button;
