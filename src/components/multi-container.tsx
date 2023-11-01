import React, { FC, PropsWithChildren } from 'react';
import {
  useMultiStyleConfig,
  Box,
  Container,
  BoxProps,
  createStylesContext,
  ContainerProps,
} from '@chakra-ui/react';

import { ThemeTypings } from '@chakra-ui/styled-system';

interface IMultiContainerProps extends BoxProps {
  variant?: ThemeTypings['components']['CustomContainer']['variants'];
  colorScheme?: ThemeTypings['colorSchemes'];
  size?: ThemeTypings['components']['CustomContainer']['sizes'];
}

const MultiContainer: FC<IMultiContainerProps> = ({
  variant = undefined,
  colorScheme = undefined,
  size = undefined,
  children,
  ...rest
}) => {
  const styles = useMultiStyleConfig(`CustomContainer`, {
    variant,
    colorScheme,
    size,
  });

  return (
    <Box __css={{ ...styles.outer }} {...rest}>
      <Container sx={{ ...styles.inner }}>{children}</Container>
    </Box>
  );
};

export default MultiContainer;
