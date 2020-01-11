const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const PostTemplate = path.resolve(`./src/templates/post.js`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      //console.log(JSON.stringify(result, null, 4))
      const posts = result.data.allMarkdownRemark.edges;
      posts.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: PostTemplate,
          context: {
            slug: node.fields.slug
          }
        });
      });

      // Create blog-list pages
      const postsPerPage = 10;

      const numPages = Math.ceil(posts.length / postsPerPage);
      Array.from({ length: numPages }).forEach((_, index) => {
        const currentPage = index + 1;
        const isFirstPage = index === 0;
        const isLastPage = currentPage === numPages;
        createPage({
          path: index === 0 ? `/blog` : `/blog/${index + 1}`,
          component: path.resolve("./src/templates/blog-list.js"),
          context: {
            limit: postsPerPage,
            skip: index * postsPerPage,
            numPages,
            currentPage: currentPage,
            isFirstPage,
            isLastPage
          }
        });
      });
      resolve();
    });
  });
};
