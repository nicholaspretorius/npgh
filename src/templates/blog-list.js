import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";

import BlogPost from "./blog";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <Container>
        {posts.map(({ node, pageContext }) => {
          return (
            <BlogPost
              key={node.id}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              to={node.fields.slug}
              date={node.frontmatter.date}
            />
          );
        })}
      </Container>
    );
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
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
