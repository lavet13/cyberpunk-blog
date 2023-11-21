import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

const Logo = defineStyleConfig({
  baseStyle: defineStyle(props => ({
    width: 96,
    height: 'auto',

    transition: `filter 0.1s ease-in-out`,

    position: 'relative',
    top: '0.5rem',
    zIndex: 1,

    _groupHover: {
      // filter: `drop-shadow(0px 15px 6px #e6de00)`,
    },
  })),
});

export default Logo;
