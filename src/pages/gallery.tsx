import React, { FC } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading } from '@chakra-ui/react';

const GalleryPage: FC<PageProps> = props => {
  return <Heading>Галерея типа</Heading>;
};

export const Head: HeadFC = () => <title>Gallery Page</title>;

export default GalleryPage;
