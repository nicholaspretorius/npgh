import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

export default ({ children }) => (
    <div style={{ margin:"0 auto", padding:"1rem", maxWidth: 650}}>
        <h2 style={{display:"inline-block"}}>PostCode</h2>

        <div style={{ margin: "3.5rem 0", float:"right"}}>
            <Link to="/" style={{marginRight:"1rem"}}>Home</Link>
            <Link to="/about/">About</Link>
        </div>
        { children }
    </div>
);