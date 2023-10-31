import React, { FC, PropsWithChildren } from 'react';

import { Flex } from '@chakra-ui/react';
import useIsClient from '../hooks/use-is-client';
import ToggleColorMode from './toggle-mode';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isClient, key } = useIsClient();

  return (
    <>
      <Flex gap={2}>{isClient && <ToggleColorMode key={key} />}</Flex>
      {children}
    </>
  );
};

export default Layout;
