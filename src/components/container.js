import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const NCPLink = styled(props => <Link {...props} />)`
  box-shadow: 0 0 0 0;
  &:hover {
    box-shadow: 0 1px 0 0 currentColor;
  }
  &.active {
    box-shadow: 0 1px 0 0 currentColor;
  }
`;

export default ({ children }) => (
  <div style={{ margin: "0 auto", padding: "1rem", maxWidth: 650 }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Post/Code</title>
    </Helmet>
    <h2 style={{ display: "inline-block" }}>Post/Code</h2>

    <div style={{ margin: "3.5rem 0", float: "right" }}>
      <NCPLink to="/" activeClassName="active" style={{ marginRight: "1rem" }}>
        Home
      </NCPLink>
      <NCPLink to="/about" activeClassName="active" style={{ marginRight: "1rem" }}>
        About
      </NCPLink>
      <NCPLink to="/uses" activeClassName="active" style={{ marginRight: "1rem" }}>
        Uses
      </NCPLink>
      <NCPLink to="/now" activeClassName="active">
        Now
      </NCPLink>
    </div>
    {children}
  </div>
);
