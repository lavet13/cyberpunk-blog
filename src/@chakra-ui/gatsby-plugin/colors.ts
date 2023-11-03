import { defineStyle } from '@chakra-ui/react';

const colors = defineStyle({
  primary: `hsl(
    0,
    85%,
    calc(50 * 1%)
  )`,

  'primary-hover': `hsl(0, 85%, calc(50 * 0.8%))`,
  'primary-active': `hsl(0, 85%, calc(50 * 0.6%))`,

  secondary: `hsl(260, 85%, calc(50 * 1%))`,

  'secondary-hover': `hsl(260, 85%, calc(50 * 0.8%))`,
  'secondary-active': `hsl(260, 85%, calc(50 * 0.6%))`,

  tertiary: `hsl(320, 100%, calc(50 * 1%))`,

  'tertiary-hover': `hsl(320, 100%, calc(50 * 0.8%))`,
  'tertiary-active': `hsl(320, 100%, calc(50 * 0.6%))`,

  'shadow-primary': `hsl(180, 90%, 50%)`,
  'shadow-secondary': `hsl(60, 90%, 60%)`,

  'cyber-color': `hsl(0, 0%, 100%)`,
});

export default colors;
