import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

export default ({ children }) => (
  <div style={{ margin: "0 auto", padding: "1rem", maxWidth: 650 }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Post/Code</title>
    </Helmet>
    <h2 style={{ display: "inline-block" }}>Post/Code</h2>

    <div style={{ margin: "3.5rem 0", float: "right" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>
        About
      </Link>
      <Link to="/uses" style={{ marginRight: "1rem" }}>
        Uses
      </Link>
      <Link to="/now">Now</Link>
    </div>
    {children}
  </div>
);
