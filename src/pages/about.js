import React from "react";
import Container from "../components/container";
import { Link } from "gatsby";

export default () => (
  <Container>
    <h3>About.</h3>
    <p>Lifelong learner. JavaScript developer. I write code and (sometimes) words.</p>

    <h4>Currently.</h4>
    <p>On a self-funded sabbatical.</p>

    <h4>Previously.</h4>

    <p>
      2012 - 2019: Developer, UX analyst, team lead at BMW Group.
      <Link to="/projects"> (Projects)</Link>
      <br />
      2010 - 2012: Freelance web developer working in South Africa.
      <br />
      2009 - 2010: Contract web developer working in London.
      <br />
      2005 - 2009: Variety of jobs, locations and travel.
      <br />
      2002 - 2005: B.IS Multimedia | University of Pretoria.
      <br />
      1983 - 2001: Born, childhood, primary school, high school.
    </p>

    <h5>Find me here</h5>

    <p>
      <a href="https://github.com/nicholaspretorius" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      ,{" "}
      <a href="https://sourcerer.io/nicholaspretorius" target="_blank" rel="noopener noreferrer">
        Sourceror
      </a>
      ,{" "}
      <a
        href="https://stackoverflow.com/users/4847180/nicholas-pretorius"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stack Exchange
      </a>
    </p>
  </Container>
);
