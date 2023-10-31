import React, { FC } from 'react';

import SunIcon from './sun-icon';
import MoonIcon from './moon-icon';

import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import type { IconButtonProps } from '@chakra-ui/react';

const ToggleColorMode: FC<Partial<IconButtonProps>> = () => {
  const { toggleColorMode } = useColorMode();

  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label='toggle color mode'
      icon={<ToggleIcon />}
    />
  );
};

export default ToggleColorMode;
