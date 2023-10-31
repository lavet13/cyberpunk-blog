import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Box, Button } from '@chakra-ui/react';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Box>TEST</Box>
      <Button>SHIT</Button>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
