import React from "react";
import Container from "../components/container";

export default () => (
  <Container>
    <h3>Notable Projects.</h3>
    <p>
      During my 7 years as a contract developer to the BMW Group South Africa I worked: Firstly as a
      front-end developer working across a variety of applications, primarily for the marketing
      department. Then as the team-lead for the local Java development team and ultimately moving to
      the Java/Digital Hub Team where I was the lead developer for the “Service Online” project. As
      of my departure, “Service Online” was operating in South Africa, Australia, New Zealand,
      Malaysia, Singapore, Thailand and numerous markets in the Middle East. During my time on that
      project, I worked remotely from Barcelona for a year.{" "}
    </p>
    <h4>Service Online.</h4>
    <p>
      This was an AngularJs single-page application built on top of the CDK “Service Online” API. It
      supported the booking and management of service bookings for BMW and MINI owners. The
      application was fully responsive, fully translatable, with all copy able to be customised to
      local market requirements. We supported 3 languages including right-to-left (RTL) layouts in
      Arabic. The application appeared in 2 different corporate identities for BMW and MINI with a
      customised look and feel for both brands. The app further supported numerous other feature
      flags and options dependent on local market requirements. After our initial pilot, I moved the
      application from a SUSE Linux environment to Microsoft Azure. I was responsible for all Azure
      related activities for the application. After 2.5 years, a new developer joined the team and
      along with him I oversaw the migration of the app to the LTS version of AngularJs (1.7), the
      integration of unit tests, the addition of an automated build/release pipeline via Azure
      DevOps as well as the concept proposal for the creation of a new admin area for markets to
      manage their content directly.{" "}
    </p>
    <p>
      Throughout the course of the project I was involved in all aspects of development, design,
      documentation, presentations, sprint planning and numerous other activities including research
      and exploration of project expansion opportunities which included presenting our project at
      the annual BMW IT Fair in Munich. This presentation resulted in project interest from BMW
      regions covering markets in Europe and North Africa. During this time I also provided support,
      technical diagrams and a fully documented Postman collection for a US based development team
      which was integrating the CDK API into the BMW Connected App.
    </p>
    <p>
      <strong>Project Elements:</strong> AngularJs, Node.js (with Express, Nodemailer and Handlebars
      templates), HTML/Less, Google Maps, Azure DevOps, Azure App Service, Let’s Encrypt SSL,
      mockups in Balsamiq, design in Photoshop and presentations in InVision. Workflow diagrams.
      Postman collections/API documentation.
    </p>
    <h4>Online Sales.</h4>
    <p>
      I was a senior developer on the team responsible for building out an AngularJs component
      library to be used in the parent Online Sales project which was a priority project for BMW
      Germany with markets in the UK, Germany and China. The component library covered all UI
      elements to be used in the application and to be available in 3 corporate identities for BMW,
      BMW-Motorrad and MINI. All components needed to support translation. The components were built
      from scratch using HTML/SCSS and AngularJs and published as a private NPM package. I was
      responsible for development of components, code review and mentoring the junior developers on
      the team. All source code was hosted in BitBucket with all work items being tracked in Jira.
    </p>
    <p>
      I was also involved in a separate branch of the same project where we conducted a pilot
      project for UX testing and analysis. This involved travelling to Munich, Germany and running
      workshops and UX testing with stakeholders in Germany. We conducted a variety of tests
      including card sorts, interviews and observation tests.{" "}
    </p>
    <p>
      <strong>Project Elements:</strong> AngularJs/Typescript, HTML/SCSS, code review (BitBucket),
      UX testing.
    </p>
    <h4>BMW Digital Showroom.</h4>
    <p>
      I created wireframes and worked closely with the designer to get the application from concept
      through to approval. While I did not do the AngularJs development on this project, I worked
      closely with our Java/AngularJs developer and coded numerous portions of the front-end HTML
      and CSS and oversaw many of the UI aspects of the project. Prior to launch, I was also
      responsible for conceiving of and setting up the Google Analytics tracking and reporting. Post
      launch I was responsible for the pilot implementation of a “use my location” feature,
      inherited some design responsibilities as well as shared AngularJs development
      responsibilities for several enhancements.
    </p>
    <p>
      <strong>Project Elements:</strong> Wireframes, HTML/Less, AngularJs (created front-end
      components for JS developer to integrate), Google Analytics development, Google Analytics
      reporting.
    </p>
    <h4>BMW Blog.</h4>
    <p>
      I created the wireframes, working closely with the designer to get all designs approved. From
      there I handled all back-end WordPress/PHP development work (custom plugin and
      login/registration integration) as well as front-end HTML/CSS and JavaScript development
      (custom theme and forum theme). The BMW Blog integrated custom APIs to bring in user data and
      manage registration and login.{" "}
    </p>
    <p>
      <strong>Project Elements:</strong> Wireframes, PHP/WordPress development, custom theme and
      plugin development.
    </p>

    <h4>B1 (Internal Team Blog).</h4>
    <p>
      On my arrival to the team, I was frustrated by the use of folders containing Word documents to
      document team information and processes. As a result, I setup a WordPress site to which all
      team members could post in order to record and store the shared knowledge of the team. During
      this time I wrote over 100 posts detailing all kinds of development and process related
      information for our team.{" "}
    </p>

    <h4>Other.</h4>
    <p>
      During my time at the BMW Group, I was involved in numerous high-level projects for all BMW
      Group brands both locally and internationally. Other notable projects included work for the
      BMW Plant App in San Luis-Potosi in Mexico, the expansion of the Digital Showroom project to
      include BMW-Motorrad in Russia as well as support and handover for the teams rolling out the
      expansion of the the Digital Showroom to MINI and BMW-Motorrad locally. I designed and
      developed the Admin UI for our in-house dealer website CMS. I was deeply involved in the
      development of the front-ends for the BMW and MINI front-ends to all dealer websites as well
      as the migrations of corporate identities for both brands. I also developed the front-end UI
      and validation for all lead generation forms across several generations of corporate identity
      for multiple brands as well as custom one off UIs. I was also heavily involved in the creation
      and development of several iterations of dealer locators, multiple generations of the BMW,
      MINI and Alphera finance websites as well as playing a overseeing role during the re-alignment
      process for the group customer portals.
    </p>
  </Container>
);
