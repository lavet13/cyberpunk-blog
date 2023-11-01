import { defineStyle } from '@chakra-ui/react';

const colors = defineStyle({
  primary: `hsl(
    0,
    85%,
    calc(50 * 1%)
  )`,
  'shadow-primary': `hsl(180, 90%, 50%)`,
  'shadow-secondary': `hsl(60, 90%, 60%)`,
});

export default colors;
