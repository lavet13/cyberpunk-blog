import {
  mode,
  transparentize,
  getColor,
  SystemStyleFunction,
} from '@chakra-ui/theme-tools';

export function percentageWidths(
  divisions: number,
  part: string,
  property = 'maxW'
) {
  let result: Record<typeof part, any> = {};

  for (let i = 0; i < divisions; i++) {
    const name = i === divisions ? 'full' : `${i}/${divisions}`;
    const w = Number((i / divisions) * 100).toFixed(4);
    result[name] = {
      [part]: {
        [property]: `${+w}%`,
      },
    };
  }

  return result;
}

type AccessibleColor = {
  bg?: string;
  color?: string;
};

export const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: 'yellow.400',
    color: 'black',
  },

  cyan: {
    bg: 'cyan.400',
    color: 'black',
  },
};

export const variantSolid: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  if (!c) return {};

  if (c === 'gray') {
    return {
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
    };
  }

  const { bg = `${c}.500`, color = `white` } = accessibleColorMap[c] || {};

  return {
    bg: mode(bg, `${c}.200`)(props),
    color: mode(color, `gray.800`)(props),
  };
};

export const variantGhost: SystemStyleFunction = props => {
  const { colorScheme: c, theme } = props;

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
    };
  }

  const transparentBgDark = transparentize(`${c}.200`, 0.12)(theme);
  const transparentBgLight = transparentize(`${c}.50`, 0.8)(theme);

  return {
    color: mode(`${c}.600`, `${c}.100`)(props),
    bg: mode(transparentBgLight, transparentBgDark)(props),
  };
};

export const variantGhostOuter: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      bg: mode(`gray.50`, `whiteAlpha.200`)(props),
    };
  }

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: mode(`${c}.200`, `${c}.900`)(props),
  };
};

export const variantGradient: SystemStyleFunction = props => {
  const { colorScheme: c, colorMode, theme } = props;
  const isDarkMode = colorMode === 'dark';

  if (!c) {
    return {};
  }

  const topColor = isDarkMode
    ? getColor(theme, `${c}.700`)
    : getColor(theme, `${c}.100`);

  const bottomColor = isDarkMode
    ? getColor(theme, `${c}.900`)
    : getColor(theme, `${c}.300`);

  return {
    bg: `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`,
  };
};

export const variantCyberButton: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  let primaryHue = 0;

  if (c === 'red') {
    primaryHue = 0;
  }

  if (c === 'blue') {
    primaryHue = 260;
  }

  const styles = {
    position: 'relative',

    color: `cyber-color`,
    background: 'transparent',
    outline: 'transparent',
    textTransform: 'uppercase',
    border: 'none',
    boxShadow: `inset -3px 0 0 var(--chakra-colors-shadow-primary)`,

    _before: {
      content: `""`,

      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      clipPath: 'var(--clip)',
      zIndex: -1,

      background: 'shadow-primary',
      transform: `translate(var(--border), 0)`,
    },

    _after: {
      content: `""`,

      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      clipPath: 'var(--clip)',
      zIndex: -1,

      background: 'primary',
    },

    _hover: {
      '--chakra-colors-primary': `hsl(0, 85%, calc(50 * 0.8%))`,
    },

    _active: {
      '--chakra-colors-primary': `hsl(0, 85%, calc(50 * 0.6%))`,
    },
  };

  return styles;
};
