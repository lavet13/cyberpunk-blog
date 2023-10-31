import { defineStyleConfig } from '@chakra-ui/react';

const Container = defineStyleConfig({
  baseStyle: {
    w: '100%',
    maxW: '1110px',
    px: [2, 6],
  },

  defaultProps: {
    colorScheme: 'gray',
  },
});

export default Container;
