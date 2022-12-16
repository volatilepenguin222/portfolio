import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import "./p1/index.css";

function ProjectOne() {
  return (
    <div className="one">
      {/* check if works on phone... */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1"> */}
      <link rel="stylesheet" href="index.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;1,200;1,400;1,500;1,600;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <title>Personas & Storyboarding</title>
      <section className="layout">
        <div>
          <h1>Personas & Storyboarding</h1>
          <div className="intro">Overview</div>
          {/* <div className="intro">explain tiers</div>  */}
        </div>
      </section>
      <div className="test">
        <div className="process">
          <section>
            <div className="grid">
              <div>
                <h3>context</h3>
                <div>
                  The automatic gas stove interface is meant to enable users to
                  cook food in a more controlled way, as opposed to the more
                  historic form of an open fire. An automatic gas stovetop, as
                  opposed to a manual gas stovetop, allows for a simpler start
                  by making the lighting feature of the gas emitted inherent to
                  the stove itself (for manual, a person would need to set the
                  gas aflame with another external device, such as a match, or
                  lighter). This enables modern-day cooking to be both safer and
                  more efficient. Through conducting user observations and
                  interviews, I composed realistic personas and a storyboard
                  that exemplifies a feasible use case and stovetop scenario.
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="grid">
              <div>
                <h3>research & feedback</h3>
                <div>
                  Although this task was more rudimentary in that it was more
                  for practice of the UX research process, this is definitely
                  applicable research for both stovetop producers, who are
                  constantly looking for research on how to make their
                  appliances simpler, more accessible, and more appealing to
                  their users, and for those in the market for a new stovetop,
                  who must research for a durable appliance that complies with
                  their needs and or has a notable feature that catches their
                  eye.
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="grid">
              <div>
                <h3>insights & takeaways</h3>
                UX research feels rewarding in that it requires you to
                exhaustively break down every aspect of of a user's
                deliberation, especially to recreate an applicable storyboard
                scenario. This requires the challenge of garnering user
                information through objective questions and ensuring that you
                withhold your own bias. In this project I created more general
                personas, but perhaps it would be better if they oriented more
                specifically towards the interface being regarded? It's
                challenging in terms of the fact that the consideration of most
                interfaces, especially a stove, are not at the forefront of
                someone's mind all the times.
              </div>
            </div>
          </section>
        </div>
        <div id="introadiv">
          <a
            className="introa"
            href="https://volatilepenguin222.github.io/cs1300-personas-assignment-1/"
            target="_blank"
          >
            <img className="picture" src="images/sitepersona.png" />
            Click to view the Design Process
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectOne;
