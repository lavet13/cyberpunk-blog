import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

import InnerContainerStyles from './container';

import {
  percentageWidths,
  variantGhost,
  variantSolid,
  variantGhostOuter,
  variantGradient,
} from '../utils';

const helpers = createMultiStyleConfigHelpers(['outer', 'inner']);

const CustomContainer = helpers.defineMultiStyleConfig({
  baseStyle: {
    outer: {
      maxW: '100%',
      margin: 0,
    },
    inner: {
      ...InnerContainerStyles.baseStyle,
    },
  },

  variants: {
    solid: defineStyle(props => ({ outer: variantSolid(props) })),

    ghost: defineStyle(props => ({
      outer: {
        ...variantGhostOuter(props),
        py: [8, 10],
      },
      inner: variantGhost(props),
    })),

    gradient: defineStyle(props => ({ outer: variantGradient(props) })),
  },

  sizes: {
    prose: {
      inner: {
        maxW: '65ch',
      },
    },
    ...percentageWidths(4, 'inner'),
  },

  defaultProps: {
    colorScheme: 'gray',
  },
});

export default CustomContainer;
