import React, { FC } from 'react';

import type { BoxProps, LinkProps, ThemeTypings } from '@chakra-ui/react';
import {
  Box,
  Link,
  createStylesContext,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import type { GatsbyLinkProps } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

import { useLocation } from '@reach/router';

interface INavProps extends BoxProps {
  variant?: ThemeTypings['components']['Nav']['variants'];
  colorScheme?: ThemeTypings['colorSchemes'];
  size?: ThemeTypings['components']['Nav']['sizes'];
}

const [StylesProvider, useStyles] = createStylesContext(`Nav`);

const Nav: FC<INavProps> = props => {
  const { variant, size, colorScheme, children, ...rest } = props;

  const styles = useMultiStyleConfig(`Nav`, { variant, colorScheme, size });
  console.log({ styles });

  return (
    <Box __css={styles.menu}>
      <Box as='nav' __css={styles.nav} {...rest}>
        <StylesProvider value={styles}>{children}</StylesProvider>
      </Box>
    </Box>
  );
};

export const NavSub: FC<BoxProps> = props => {
  const styles = useStyles();

  return <Box as='span' __css={styles.sub} {...props} />;
};

export const NavSubList: FC<BoxProps> = props => {
  const styles = useStyles();

  return <Box as='ul' __css={styles.subList} {...props} />;
};

export const NavSubListCols: FC<BoxProps> = props => {
  const styles = useStyles();

  return <Box as='ul' __css={styles.subListCols} {...props} />;
};

export const NavSubListItem: FC<BoxProps> = props => {
  const styles = useStyles();

  return <Box as='li' __css={styles.subListItem} {...props} />;
};

export const NavSubListLink: FC<BoxProps & GatsbyLinkProps<any>> = props => {
  const styles = useStyles();

  return <Box as={GatsbyLink} __css={styles.subListLink} {...props} />;
};

export const NavItem: FC<BoxProps> = props => {
  const styles = useStyles();

  return <Box as='li' data-group __css={styles.item} {...props} />;
};

export const NavLink: FC<BoxProps & GatsbyLinkProps<any>> = props => {
  const { to } = props;

  const styles = useStyles();

  const location = useLocation();

  const isActive = location.pathname === to;
  console.log({ to, pathname: location.pathname, location });
  console.log({ isActive });

  return (
    <Box
      as='li'
      data-group
      {...(isActive ? { 'data-active': true } : {})}
      __css={styles.item}
    >
      <Box as={GatsbyLink} __css={styles.link} {...props} />
    </Box>
  );
};

export default Nav;
