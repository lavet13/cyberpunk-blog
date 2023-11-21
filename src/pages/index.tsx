import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Box, Flex } from '@chakra-ui/react';
import CyberButton from '../components/cyber-button';
import SEO from '../components/seo.component';

const IndexPage: React.FC<PageProps> = props => {
  return (
    <Flex direction='column' align='center' justify='center' minHeight='100vh'>
      <CyberButton to='/' colorScheme='purple'>
        SHIT
      </CyberButton>
    </Flex>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title='Cyberpunk 2077' />;
