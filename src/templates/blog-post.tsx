import React, { FC } from 'react';
import type { PageProps, HeadFC } from 'gatsby';
import { graphql, Link as GatsbyLink } from 'gatsby';
import SEO from '../components/seo.component';
import { Heading, Text } from '@chakra-ui/react';
import { ImageDataLike, getImage, GatsbyImage } from 'gatsby-plugin-image';

const AttractionsTemplate: FC<
  PageProps<Queries.AttractionPostQuery>
> = props => {
  const {
    data: { mdx },
    children,
    pageContext,
  } = props;

  const { previous, next } = pageContext;

  const heroImage = getImage(mdx!.frontmatter!.hero_image as ImageDataLike);

  return (
    <>
      <Heading as='h1' fontSize={'4xl'}>
        {mdx?.frontmatter?.title}
      </Heading>

      {heroImage && (
        <GatsbyImage
          image={heroImage}
          alt={mdx?.frontmatter?.hero_image_alt as string}
        />
      )}

      <Text fontSize='2xl'>{mdx?.frontmatter?.date}</Text>

      {children}

      {previous && (
        <GatsbyLink to={`/attractions${previous.fields.slug}`} rel='prev'>
          ← {previous.frontmatter.title}
        </GatsbyLink>
      )}

      {next && (
        <GatsbyLink to={`/attractions${next.fields.slug}`} rel='prev'>
          {next.frontmatter.title} →
        </GatsbyLink>
      )}
    </>
  );
};

export default AttractionsTemplate;

export const query = graphql`
  query AttractionPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<Queries.AttractionPostQuery> = ({ data }) => (
  <SEO title={data.mdx?.frontmatter?.title as string} />
);
