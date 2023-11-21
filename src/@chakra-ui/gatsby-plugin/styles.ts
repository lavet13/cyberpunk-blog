import {
  defineStyle,
  SystemStyleFunction,
  StyleFunctionProps,
  SystemStyleObject,
} from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

const styles = {
  // same as using defineStyle
  global: (props: StyleFunctionProps): SystemStyleObject => ({
    '*::-webkit-scrollbar': {
      bg: 'scrollbar-bg',
    },

    '::-webkit-scrollbar-button': {
      display: 'none',
    },

    '::-webkit-scrollbar-track': {
      display: 'none',
    },

    '::-webkit-scrollbar-track-piece': {
      display: 'none',
    },

    '::-webkit-scrollbar-thumb': {
      bg: 'scrollbar-thumb-bg',
      borderBottom: `0.01em solid var(--chakra-colors-scrollbar-border-color)`,
      borderRight: `0.01em solid var(--chakra-colors-scrollbar-border-color)`,
      transition: `background 0.9s`,
    },

    '::-webkit-scrollbar-thumb:hover': {
      bg: 'scrollbar-thumb-hover-bg',
    },

    '::-webkit-scrollbar-corner': {
      display: 'none',
    },

    '::-webkit-resizer': {
      display: 'none',
    },
  }),
};

export default styles;
