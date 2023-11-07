import React, { FC } from 'react';

import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import type { GatsbyLinkProps } from 'gatsby';

import { useLocation } from '@reach/router';

import {
  Image,
  ImageProps,
  ThemeTypings,
  useColorModeValue,
  useStyleConfig,
} from '@chakra-ui/react';

interface ICyberpunkLogo extends ImageProps {
  variant?: ThemeTypings['components']['Logo']['variants'];
  size?: ThemeTypings['components']['Logo']['sizes'];
  colorScheme?: ThemeTypings['colorSchemes'];
}

const CyberpunkLogo: FC<ICyberpunkLogo & GatsbyLinkProps<any>> = props => {
  const { variant, size, colorScheme, to, ...rest } = props;

  const location = useLocation();
  const active = useColorModeValue(
    '/images/logo/cyberpunk-logo-active.svg',
    '/images/logo/cyberpunk-logo-dark-active.svg'
  );

  const isHome = location.pathname === to;
  console.log({ isHome });

  const styles = useStyleConfig(`Logo`, { variant, size, colorScheme });

  return (
    <GatsbyLink {...(isHome ? {} : { 'data-group': true })} to={to}>
      {
        <Image
          loading='lazy'
          __css={styles}
          src={isHome ? '/images/logo/cyberpunk-logo.svg' : active}
          alt=''
        />
      }
    </GatsbyLink>
  );
};

export default CyberpunkLogo;
