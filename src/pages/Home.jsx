import React from "react";
import { HashRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";

function Home() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;1,200;1,400;1,500;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </head>

      <body>
        <section className="layout">
          <div>
            <h1>volatilepenguin222</h1>
            <h2>hello!</h2>
            {/* <a href="mailto:cheyenne_chau@brown.edu">cheyenne_chau@brown.edu</a> */}
            <div>
              I am a UX researcher enabling creativity and spontainety through
              simplicity of design choices. I like to work on projects that
              streamline the common processess so that a user can focus on
              having more creative thought and freedom, or which actively
              enhance a user's experience and enable them to open their minds to
              a new idea or consider something they previously hadn't before.
              Below are some of my past projects. Enjoy!
            </div>
          </div>
          <img height="650" src="images/penguin.png" />
        </section>
        <section>
          <h2>Projects</h2>
          <div className="grid">
            <NavLink to="/projectone">
              <div>
                <h2>Personas & Storyboarding: Automatic Gas Stove</h2>
                <img className="center" src="images/sitepersonaintro.png" />
                <div className="caption">
                  a UX task to guage the usability of a common, everyday
                  appliance: the stovetop.
                </div>
                <div className="deets">
                  • UX research • empathy mapping • storyboarding •
                </div>
              </div>
            </NavLink>
            <NavLink to="/projecttwo">
              <div>
                <h2>Responsive Redesign: Aleppo Sweets</h2>
                <img className="center" src="images/siteallepointro.png" />
                <div className="caption">
                  the process of website redesign for keeping up with modern-day
                  affordances and technology
                </div>
                <div className="deets">
                  • usability & accessability assessment • low-fidelity
                  wireframing • high-fidelity prototyping • responsive redesign
                  •
                </div>
              </div>
            </NavLink>
            <NavLink to="/projectthree">
              <div>
                <h2>Development: Bread Ranker</h2>
                <img className="center" src="images/sitebreadintro.png" />
                <div className="caption">
                  a dynamic React-based web application with interactive
                  components and internal data sources
                  <div className="deets">
                    • interactive data manipulation • React •
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="/projectfour">
              <div>
                <h2>Iterative Design: Rever</h2>
                <img className="center" src="images/sitedesignintro.png" />
                <div className="caption">
                  an interactive app interface design and mockup based on Rever,
                  a startup for streamlining the eCommerce return process
                  through 2-click, instantaneous returns
                  <div className="deets">
                    • low-fidelity wireframing • interactive Figma high-fidelity
                    prototyping • user testing •
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </section>
      </body>
    </>
  );
}

export default Home;
