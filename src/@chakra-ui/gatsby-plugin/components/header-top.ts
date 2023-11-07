import { defineStyleConfig } from '@chakra-ui/react';

const HeaderTop = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    px: 4,

    _before: {
      content: `""`,

      display: 'block',
      height: '112px',

      position: 'absolute',
      top: 0,
      left: 0,

      opacity: 1,
      pointerEvents: 'none',
      transition: `opacity .2s`,
      width: 'full',
      willChange: 'opacity',

      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.65), transparent)`,
    },
  },

  variants: {},

  sizes: {},

  defaultProps: {},
});

export default HeaderTop;
