import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Box, Flex } from '@chakra-ui/react';
import MultiContainer from '../components/multi-container';
import CyberButton from '../components/cyber-button';

const IndexPage: React.FC<PageProps> = () => {
  return (
    // <Flex direction='column' align='center' justify='center' minHeight='100vh'>
    //   <Box>TEST</Box>
    //   <CyberButton colorScheme='purple'>SHIT</CyberButton>
    //   <CyberButton colorScheme='red'>SHIT</CyberButton>
    //   <CyberButton colorScheme='blue'>SHIT</CyberButton>
    // </Flex>
    null
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
