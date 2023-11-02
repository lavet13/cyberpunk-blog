import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Box, Flex } from '@chakra-ui/react';
import MultiContainer from '../components/multi-container';
import CyberButton from '../components/cyber-button';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Flex direction='column' align='center' justify='center' minHeight='100vh'>
      <Box>TEST</Box>
      <CyberButton>SHIT</CyberButton>
    </Flex>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
