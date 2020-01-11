import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";

import BlogPost from "../templates/blog";

export default ({ data }) => {
  console.log("Data: ", data);
  const posts = data.allMarkdownRemark.edges;

  return (
    <Container>
      <p>
        A <em>very</em> rudimentary blog by Nicholas Pretorius.
      </p>

      {posts.map(({ node }) => (
        <BlogPost
          key={node.id}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          to={node.fields.slug}
          date={node.frontmatter.date}
        />
      ))}
    </Container>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
