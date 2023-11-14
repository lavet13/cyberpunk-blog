import type { GatsbyNode } from 'gatsby';
import readingTime from 'reading-time';
// import path from 'path';

// export const createPages: GatsbyNode['createPages'] = async ({
//   actions,
//   graphql,
// }) => {
//   const { createPage } = actions;
// };

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body as string),
    });
  }
};
