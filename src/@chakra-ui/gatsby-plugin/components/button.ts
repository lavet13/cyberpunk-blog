import {
  defineStyleConfig,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(['outer', 'glitch', 'tag']);

const Button = defineStyleConfig({
  baseStyle: {
    outer: {},
  },

  sizes: {
    cyberLg: {
      outer: {
        fontSize: '1.625rem',
        height: '4.6875rem',
      },
    },
  },

  variants: {
    cyber: {
      outer: {
        position: 'relative',

        fontFamily: 'Refinery',
        color: 'white',
        background: 'transparent',
        outline: 'transparent',
        textTransform: 'uppercase',
        minW: '18.75rem',
        lineHeight: '4.6875rem',
        border: 'none',

        transition: 'background 0.2s',

        _after: {
          content: `""`,

          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          clipPath: 'var(--clip)',
          zIndex: -1,

          background: 'primary',
        },

        _before: {
          content: `""`,

          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          clipPath: 'var(--clip)',
          zIndex: -1,

          background: 'shadow-primary',
          transform: `translate(4px, 0)`,
        },

        _hover: {
          '--chakra-colors-primary': `hsl(0, 85%, calc(50 * 0.8%))`,
        },

        _active: {
          '--chakra-colors-primary': `hsl(0, 85%, calc(50 * 0.6%))`,
        },
      },
    },
  },

  defaultProps: {},
});

export default Button;
