import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

const Logo = defineStyleConfig({
  baseStyle: defineStyle(props => ({
    width: `20rem`,
    height: `auto`,

    transition: `filter 0.1s ease-in-out`,

    position: 'relative',
    top: '0.5rem',
    zIndex: 1,

    _groupHover: {
      filter: mode(
        `drop-shadow(0 0 0.75rem #fcee0a)`,
        `drop-shadow(0 0 0.75rem #52bedc)`
      )(props),
    },
  })),
});

export default Logo;
