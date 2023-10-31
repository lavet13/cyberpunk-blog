import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(['outer', 'inner']);

const CustomContainer = helpers.defineMultiStyleConfig({
  baseStyle: {
    outer: {},
    inner: {},
  },

  variants: {
    solid: defineStyle(props => ({ outer: {} })),
    ghost: defineStyle(props => ({ outer: {}, inner: {} })),
    gradient: defineStyle(props => ({ outer: {} })),
  },

  sizes: {
    prose: {
      inner: {},
    },
  },

  defaultProps: {
    colorScheme: 'gray',
  },
});

export default CustomContainer;
