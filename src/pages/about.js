import React from "react";
import Container from "../components/container";
import { Link } from "gatsby";

export default () => (
  <Container>
    <h3>About.</h3>
    <p>Lifelong learner.</p>
    <p>Professionally: Full stack JavaScript developer. I write code and words.</p>
    <p>
      Personally: I enjoy wakeskating, surfing, snowboarding, skateboarding and mountain biking.
    </p>

    <h4>Currently.</h4>
    <p>
      <a href="https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044">
        Udacity: Full Stack Web Developer Nanodegree
      </a>{" "}
      (Python, Postgres, AWS).
    </p>

    <h4>Next.</h4>
    <p>
      <a href="https://www.udacity.com/course/cloud-developer-nanodegree--nd9990">
        Cloud Developer Nanodegree
      </a>{" "}
      (AWS).
    </p>

    <h4>Previously.</h4>
    <p>
      October 2019: <a href="https://confirm.udacity.com/2A67P92L">React Developer Nanodegree</a>{" "}
      (React, Redux, React Native)
      <br />
      <br />
      2012 - 2019: JavaScript Developer, UX analyst, team lead (BMW Group).
      <Link to="/projects"> (Projects)</Link>
      <br />
      <br />
      2010 - 2012: Freelance web developer and consultant working in South Africa.
      <br />
      2009 - 2010: Contract web developer working in London.
      <br />
      2005 - 2009: Variety of jobs, locations and travel.
      <br />
      2002 - 2005: B.IS Multimedia | University of Pretoria.
      <br />
      1983 - 2001: Childhood, primary school, high school.
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
