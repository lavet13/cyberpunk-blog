import type { GatsbyNode } from 'gatsby';
import readingTime from 'reading-time';
import slugify from 'limax';
import { createFilePath } from 'gatsby-source-filesystem';

import path from 'path';

const blogPostTemplate = path.resolve('src/templates/blog-post.tsx');
const blogListTemplate = path.resolve('src/templates/blog-list.tsx');

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const result = await graphql<Queries.BlogQuery>(`
    query Blog {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }

          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }

          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  const {
    allMdx: { edges: attractions },
  } = result.data as Queries.BlogQuery;

  attractions.forEach(({ node: blog, next, previous }, index) => {
    const { id, fields } = blog;

    createPage({
      path: `attractions${fields?.slug}`,
      component: blogPostTemplate,

      context: {
        id,
        previous,
        next,
      },

      ownerNodeId: id,
    });
  });

  // Creating blog post list pages
  const attractionsPerPage = 2;
  const numPages = Math.ceil(attractions.length / attractionsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `attractions/` : `attractions/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: attractionsPerPage,
        skip: i * attractionsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    console.log({ value });

    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body as string),
    });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
