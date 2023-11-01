import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const CyberButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CyberButton;
