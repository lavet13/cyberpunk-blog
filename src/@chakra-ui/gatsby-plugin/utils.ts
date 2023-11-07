import {
  mode,
  transparentize,
  getColor,
  SystemStyleFunction,
  cssVar,
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

  let background = 'primary';
  let backgroundHover = 'primary-hover';
  let backgroundActive = 'primary-active';

  if (c === 'blue') {
    background = 'secondary';
    backgroundHover = 'secondary-hover';
    backgroundActive = 'secondary-active';
  }

  if (c === 'purple') {
    background = 'tertiary';
    backgroundHover = 'tertiary-hover';
    backgroundActive = 'tertiary-active';
  }

  const styles = {
    position: 'relative',

    color: `cyber-color`,
    background: 'transparent',
    outline: 'transparent',
    textTransform: 'uppercase',
    border: 'none',
    boxShadow: `inset -3px 0 0 var(--chakra-colors-shadow-primary)`,
    textAlign: 'center',

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

      background,
    },

    _hover: {
      _after: {
        background: backgroundHover,
      },
    },

    _active: {
      _after: {
        background: backgroundActive,
      },
    },
  };

  return styles;
};

export const variantCyberGlitchEffect: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  let background = 'primary';
  let backgroundHover = 'primary-hover';
  let backgroundActive = 'primary-active';

  if (c === 'blue') {
    background = 'secondary';
    backgroundHover = 'secondary-hover';
    backgroundActive = 'secondary-active';
  }

  if (c === 'purple') {
    background = 'tertiary';
    backgroundHover = 'tertiary-hover';
    backgroundActive = 'tertiary-active';
  }

  return {
    display: 'none',

    position: 'absolute',
    top: `calc(var(--border) * -1)`,
    left: `calc(var(--border) * -1)`,
    right: `calc(var(--border) * -1)`,
    bottom: `calc(var(--border) * -1)`,
    background: 'shadow-primary',
    textShadow: `2px 2px var(--chakra-colors-shadow-primary), -2px -2px var(--chakra-colors-shadow-secondary)`,
    clipPath: `var(--clip)`,

    _groupHover: {
      display: 'block',

      _before: {
        background: backgroundHover,
      },
    },

    _groupActive: {
      _before: {
        background: backgroundActive,
      },
    },

    _before: {
      content: `""`,

      position: 'absolute',

      top: `calc(var(--border) * 1)`,
      right: `calc(var(--border) * 1)`,
      left: `calc(var(--border) * 1)`,
      bottom: `calc(var(--border) * 1)`,

      clipPath: `var(--clip)`,
      background,

      zIndex: -1,
    },
  };
};
