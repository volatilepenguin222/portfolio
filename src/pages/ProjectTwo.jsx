import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ProjectOne from "./ProjectOne";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import "./p2/index.css";
import { Component } from "react";

function ProjectTwo() {
  return (
    <div className="two">
      {/* check if works on phone... */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1"> */}
      <link rel="stylesheet" href="index.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;1,200;1,400;1,500;1,600;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <title>Responsive Redesign</title>
      <section className="layout">
        <div>
          <h1>Responsive Redesign: Allepo Sweets</h1>
          <div className="intro">Overview</div>
        </div>
      </section>
      <div className="test">
        <div className="process">
          <section>
            <div className="grid">
              <div>
                <h3>context</h3>
                <div>
                  At first glance, Aleppo Sweets has a fairly aesthetic and
                  minimally-responsive website; however, as an interface for
                  placing takeout orders, I found myself looking for missing
                  affordances that would make the ordering process a bit
                  cleaner.
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="grid">
              <div>
                <h3>research & feedback</h3>
                <div>
                  As mentioned prior, the current aleppo sweets platform is
                  actually pretty responsive and from an informational
                  perspective not too bad. The site is very clean and bright,
                  fluent with the aesthetic of Aleppo Sweets. However, in the
                  context of today's online ordering market, users often have so
                  many store options to choose from that even a slightly tedious
                  ordering platform can result in them purchasing from somewhere
                  else. Ease of use is very important; especially with a larger
                  menu, an ordering site that has an easily filterable menu and
                  readily-accessible, visible cart will deem higher purchase
                  rate.
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="grid">
              <div>
                <h3>insights & takeaways</h3>
                <div>
                  I've procured a ample amount of respect for convenient yet
                  attractive ordering platforms. Maintaining a website that
                  fully considers all aspects of users and stays up-to-date with
                  modern technology requires considerate deliberation and
                  development. And although it's not exactly a tradeoff, better
                  accessibility sometimes requires diminishing from alignment
                  with a business's desired aesthetic.
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="introadiv">
          <a
            className="introa"
            href="https://volatilepenguin222.github.io/cs1300-responsive-assignment-2/"
            target="_blank"
          >
            <img className="picture" src="images/siteredesign.png" />
            Click to view the Design Process
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectTwo;
