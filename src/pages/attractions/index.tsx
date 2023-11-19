import React, { FC } from 'react';
import type { PageProps, HeadFC } from 'gatsby';
import { graphql, Link as GatsbyLink } from 'gatsby';
import SEO from '../../components/seo.component';
import { Box, Heading, Text } from '@chakra-ui/react';

const AttractionsPage: FC<PageProps<Queries.AttractionsIndexQuery>> = props => {
  const {
    allMdx: { nodes },
  } = props.data;

  return nodes.map(node => (
    <Box key={node.id} as='article'>
      <GatsbyLink to={`/attractions${node.fields?.slug}`}>
        <Heading as='h2' size='2xl'>
          {node.frontmatter?.title}
        </Heading>
      </GatsbyLink>

      <Text fontSize='lg'>{node.frontmatter?.date}</Text>
      <Text fontSize='xl'>{node.excerpt}</Text>
    </Box>
  ));
};

export default AttractionsPage;

export const query = graphql`
  query AttractionsIndex {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt

        fields {
          slug
        }

        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }

        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<Queries.AttractionsIndexQuery> = props => {
  console.log({ headProps: props });

  return <SEO title='Достопримечательности' />;
};
