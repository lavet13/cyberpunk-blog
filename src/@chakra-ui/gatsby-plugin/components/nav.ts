import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

const helpers = createMultiStyleConfigHelpers([
  'menu',
  'nav',
  'item',
  'sub',
  'subList',
  'subListCols',
  'subListItem',
  'subListLink',
  'link',
]);

const Nav = helpers.defineMultiStyleConfig({
  baseStyle: defineStyle(props => ({
    menu: {
      position: 'relative',
      clipPath: `polygon(16px 0,100% 0,100% 30px,calc(100% - 18px) 48px,calc(100% - 18px) 2000%,0 2000%,0 16px)`,
      userSelect: 'none',

      _before: {
        content: `""`,

        position: 'absolute',
        height: 'full',
        width: 'full',
        backdropFilter: `blur(8px)`,
        zIndex: -1,
      },
    },

    nav: {
      position: 'relative',

      display: 'flex',
      alignItems: 'center',

      margin: 0,
      border: mode(
        `1px solid var(--chakra-colors-yellow)`,
        `1px solid transparent`
      )(props),
      height: '48px',
      listStyle: 'none',
      bg: `rgba(0, 0, 0, .6)`,
      padding: `0 0 0 24px`,
      fontFamily: 'BlenderPro',
      fontWeight: 300,
      userSelect: 'none',

      _before: {
        content: `""`,
        position: 'absolute',
        top: 0,
        left: 0,

        borderRight: `16px solid transparent`,
        borderTop: mode(
          `16px solid var(--chakra-colors-yellow)`,
          `16px solid transparent`
        )(props),
      },

      _after: {
        content: `""`,

        position: 'absolute',
        bottom: 0,
        right: 0,

        borderRight: `18px solid transparent`,
        borderTop: mode(
          `18px solid var(--chakra-colors-yellow)`,
          `18px solid transparent`
        )(props),
        transform: `rotate(180deg)`,
      },
    },

    item: {
      display: 'flex',
      alignItems: 'stretch',

      fontSize: '22px',
      textTransform: 'uppercase',
      lineHeight: '110%',
      position: 'relative',
      height: '100%',
      color: 'white',

      _hover: {
        background: mode('yellow', 'lightBlue')(props),
        color: 'black',
      },

      '&[data-active]': {
        bg: mode('yellow', 'lightBlue')(props),
        color: 'black',

        _active: {
          bg: mode('yellow', 'lightBlue')(props),
        },
      },
    },

    sub: {
      position: 'relative',

      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',

      padding: `0 25px`,

      _after: {
        content: `""`,
        position: 'relative',

        display: 'block',

        borderTop: `6px solid #fff`,
        borderRight: `4px solid transparent`,
        borderLeft: `4px solid transparent`,
        marginLeft: '4px',
      },

      _groupHover: {
        _after: {
          borderTop: `5px solid black`,
        },
      },
    },

    subList: {
      display: 'none',
      flexDirection: 'column',

      position: 'absolute',
      top: `calc(100% - 4px)`,
      left: 'auto',
      right: 0,

      padding: `10px 0`,

      listStyle: 'none',
      margin: 0,
      minWidth: 'full',

      backdropFilter: `blur(8px)`,
      background: `rgba(0, 0, 0, .6)`,
      border: mode(
        `1px solid var(--chakra-colors-yellow)`,
        `1px solid var(--chakra-colors-lightBlue)`
      )(props),
      borderTop: mode(
        `8px solid var(--chakra-colors-yellow)`,
        `8px solid var(--chakra-colors-lightBlue)`
      )(props),
      boxShadow: `0 1px 3px rgba(0, 0, 0, .25), 0 2px 16px rgba(0, 0, 0, .25)`,
      clipPath: `inset(0 -16px -16px -16px)`,

      _groupHover: {
        display: 'flex',
      },
    },

    subListCols: {
      display: 'none',

      position: 'absolute',
      top: `calc(100% - 4px)`,
      left: 'auto',
      right: 0,

      columns: 2,
      columnCount: 2,

      padding: `10px 0`,

      listStyle: 'none',
      margin: 0,
      minWidth: 'full',

      backdropFilter: `blur(8px)`,
      background: `rgba(0, 0, 0, .6)`,
      border: mode(
        `1px solid var(--chakra-colors-yellow)`,
        `1px solid var(--chakra-colors-lightBlue)`
      )(props),
      borderTop: mode(
        `8px solid var(--chakra-colors-yellow)`,
        `8px solid var(--chakra-colors-lightBlue)`
      )(props),
      boxShadow: `0 1px 3px rgba(0, 0, 0, .25), 0 2px 16px rgba(0, 0, 0, .25)`,
      clipPath: `inset(0 -16px -16px -16px)`,

      _groupHover: {
        display: 'block',
      },
    },

    subListItem: {
      display: 'flex',
      alignItems: 'center',
      background: 'transparent',
      height: '44px',
      color: 'white',

      _before: {
        content: `""`,
        background: mode('yellow', 'lightBlue')(props),

        height: '1px',
        width: '10px',
        marginRight: '10px',
      },

      _hover: {
        color: mode('yellow', 'lightBlue')(props),
      },
    },

    subListLink: {
      display: 'flex',
      alignItems: 'center',
      width: 'full',
      whiteSpace: 'nowrap',

      paddingRight: '24px',
    },

    link: {
      display: 'flex',
      alignItems: 'center',

      width: 'full',
      padding: `0 25px`,
      whiteSpace: 'nowrap',
    },
  })),

  sizes: {},

  variants: {},

  defaultProps: {},
});

export default Nav;
