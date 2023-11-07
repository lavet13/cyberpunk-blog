import React, { FC } from 'react';

import {
  Box,
  createStylesContext,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import type { BoxProps, ThemeTypings } from '@chakra-ui/react';
import type { GatsbyLinkProps } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

interface INavProps extends BoxProps {
  variant?: ThemeTypings['components']['Nav']['variants'];
  colorScheme?: ThemeTypings['colorSchemes'];
  size?: ThemeTypings['components']['Nav']['sizes'];
}

const [StylesProvider, useStyles] = createStylesContext(`Nav`);

const Nav: FC<INavProps> = props => {
  const { variant, size, colorScheme, children, ...rest } = props;

  const styles = useMultiStyleConfig(`Nav`, { variant, colorScheme, size });

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
  const styles = useStyles();

  return <Box as={GatsbyLink} __css={styles.link} {...props} />;
};

export default Nav;
