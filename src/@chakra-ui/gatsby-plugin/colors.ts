import { defineStyle } from '@chakra-ui/react';

const colors = defineStyle({
  primary: `hsl(
    0,
    85%,
    calc(var(--primary-lightness, 50) * 1%)
  )`,

  'shadow-primary': `hsl(var(--shadow-primary-hue), 90%, 50%)`,
  'shadow-secondary': `hsl(var(--shadow-secondary-hue), 90%, 60%)`,
  'cyber-color': `hsl(0, 0%, 100%)`,
});

export default colors;
