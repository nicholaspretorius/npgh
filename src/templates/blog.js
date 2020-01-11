import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const BlogWrapper = styled.div`
  margin: 0.5rem 0;
  &:last-child {
    border-bottom: 1px solid black;
    margin-bottom: 0;
    padding-bottom: 3rem;
  }
`;

const Title = styled.h3`
    padding:0;
    margin
`;

const Date = styled.span``;

const Excerpt = styled.div`
  margin: 0.5rem 0;
`;

const BlogPost = props => (
  <BlogWrapper>
    <Link to={props.to}>
      <Title>{props.title}</Title>
    </Link>
    <Date>{props.date}</Date>
    <Excerpt>{props.excerpt}</Excerpt>
  </BlogWrapper>
);

export default BlogPost;
