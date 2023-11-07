import { Box, Flex, useStyleConfig } from '@chakra-ui/react';
import type { BoxProps, ThemeTypings } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IHeaderTop extends BoxProps {
  variant?: ThemeTypings['components']['HeaderTop']['variants'];
  size?: ThemeTypings['components']['HeaderTop']['sizes'];
  colorScheme?: ThemeTypings['colorSchemes'];
}

const HeaderTop: FC<IHeaderTop> = props => {
  const { variant, size, colorScheme, ...rest } = props;
  const styles = useStyleConfig('HeaderTop', { variant, size, colorScheme });

  return <Flex __css={styles} {...rest} />;
};

export default HeaderTop;
