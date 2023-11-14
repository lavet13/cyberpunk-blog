import React, { FC } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading } from '@chakra-ui/react';
import SEO from '../components/seo.component';

const GalleryPage: FC<PageProps> = props => {
  return <Heading>Галерея типа</Heading>;
};

export const Head: HeadFC = () => <SEO title='Галерея' />;

export default GalleryPage;
