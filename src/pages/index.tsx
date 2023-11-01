import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Box } from '@chakra-ui/react';
import MultiContainer from '../components/multi-container';
import CyberButton from '../components/cyber-button';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MultiContainer>
      <Box>TEST</Box>
      <CyberButton variant='cyber' size='cyberLg'>
        SHIT
      </CyberButton>
    </MultiContainer>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
