import React, { FC } from 'react';
import { useSiteMetadata } from '../common/hooks/useSiteMetadata';
import { NonNullableFields } from '../common/types/types';

type SeoProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  pathname?: string;
};

const SEO: FC<SeoProps> = ({ title, children, description, pathname }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
  } = useSiteMetadata() as NonNullableFields<
    ReturnType<typeof useSiteMetadata>
  >;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <link rel='shortcut icon' type='image/png' href={seo.image} />
      {children}
    </>
  );
};

export default SEO;
