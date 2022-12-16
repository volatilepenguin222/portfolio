import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectOne from "./ProjectOne";
import "./p4/index.css";

function ProjectFour() {
  return (
    <>
      {/* <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;1,200;1,400;1,500;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </head>
      <h1>THIS IS PROJECT 4 PROBABLY ITERATIVE DESIGN</h1>
      <a
        className="introa"
        href="https://sleepypanda212.github.io/iterative_redesign/"
        target="_blank"
      >
        {" "}
        OOF THIS ONE
      </a>
      <div>[review the project and welcome people to view the link]</div> */}
      <div className="four">
        {/* check if works on phone... */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1"> */}
        <link rel="stylesheet" href="index.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;1,200;1,400;1,500;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <section className="layout">
          <div>
            <h1>Iterative Design: Rever</h1>
            <div className="intro">Overview</div>
          </div>
        </section>
        <div className="test">
          <div className="process">
            <section>
              <div className="grid">
                <div>
                  <h3>context</h3>
                  In this group assignment, we selected an emerging startup to
                  design an interactive interface for. This assignment was split
                  into four parts to exemplify an iterative design process flow:
                  (1) sketching ideas of the interface, (2) creating an
                  interactive, high-fidelity prototype, (3) conducting user
                  testing on a final, revised prototype, and (4) contacting the
                  start up. This was a group project meant to simulate the
                  iterative design pipeline of development, which was
                  decontructed into the following stages:
                  <ol>
                    <li>sketching and idea amalgamation</li>
                    <li>hi-fi prototyping, critique, and revision</li>
                    <li>objective user testing</li>
                    <li>consulting with the startup</li>
                  </ol>
                  We chose to design a mobile app platform in order to align
                  with Rever's accentuation on ease and readiness.
                </div>
              </div>
            </section>
            <section>
              <div className="grid">
                <div>
                  <h3>research & feedback</h3>
                  Rever is a startup consecrated from the notion that eCommerce
                  returns should be as quick and simple as the instantaneous
                  purchasing processes that are common today. On the customer
                  side, this is transcribed through a 2-click, 24-hr return
                  process with readily-accessible return statuses. On the
                  business operations side, they emphasize that frictionless
                  returns drive higher sales and customer return.
                </div>
              </div>
            </section>
            <section>
              <div className="grid">
                <div>
                  <h3>insights & takeaways</h3>I felt that the collaborative
                  nature of this project thoroughly imitated the initial design
                  process and allowed us to garner new approaches to
                  accessibility. I really enjoyed how simple and efficient it
                  was to develop interactive mockup using Figma.
                </div>
              </div>
            </section>
          </div>
          <div id="introadiv">
            <a
              className="introa"
              href="https://sleepypanda212.github.io/iterative_redesign/"
              target="_blank"
            >
              <img className="picture" src="images/siteidesign.png" />
              Click to view the Design Process
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectFour;
