import React, { FC } from 'react';
import { type PageProps, type HeadFC, graphql } from 'gatsby';
import SEO from '../components/seo.component';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

const BlogListTemplate: FC<
  PageProps<Queries.AttractionsIndexQuery>
> = props => {
  const { data } = props;

  const attractions = data.allMdx.nodes;
  const { currentPage, numPages } = props.pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? `/attractions` : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  console.log({ props });

  return (
    <>
      {attractions.map(node => (
        <Box key={node.id} as='article'>
          <GatsbyLink to={`/attractions${node.fields?.slug}`}>
            <Heading as='h2' size='2xl'>
              {node.frontmatter?.title}
            </Heading>
          </GatsbyLink>

          <Text fontSize='lg'>{node.frontmatter?.date}</Text>
          <Text
            fontSize='xl'
            dangerouslySetInnerHTML={{ __html: node.excerpt as string }}
          />
        </Box>
      ))}

      <Flex align='center' justify='space-between'>
        {!isFirst && (
          <GatsbyLink to={prevPage} rel='prev'>
            ← Previous Page
          </GatsbyLink>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <GatsbyLink
            key={`pagination-number-${i + 1}`}
            to={`/attractions/${i === 0 ? '' : i + 1}`}
            style={{
              color: i + 1 === currentPage ? '#ffffff' : '',
              background: i + 1 === currentPage ? '#007acc' : '',
            }}
          >
            {i + 1}
          </GatsbyLink>
        ))}

        {!isLast && (
          <GatsbyLink to={nextPage} rel='next'>
            Next Page →
          </GatsbyLink>
        )}
      </Flex>
    </>
  );
};

export const Head: HeadFC = ({ data }) => <SEO />;

export const query = graphql`
  query AttractionsIndex($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
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

export default BlogListTemplate;
