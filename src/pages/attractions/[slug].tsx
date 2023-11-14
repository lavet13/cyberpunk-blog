import React, { FC } from 'react';
import type { PageProps, HeadFC } from 'gatsby';
import { Heading } from '@chakra-ui/react';
import SEO from '../../components/seo.component';

const NotExistingAttractionPost: FC<PageProps> = ({ params, pageContext }) => {
  console.log({ params, pageContext });

  return (
    <>
      <Heading>Doesn't exist</Heading>
    </>
  );
};

export const Head: HeadFC = () => <SEO />;

export default NotExistingAttractionPost;
