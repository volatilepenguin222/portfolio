import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectFour from "./ProjectFour";
import "./p3/index.css";
import { Component } from "react";

function ProjectThree() {
  return (
    <div className="three">
      {/* check if works on phone... */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1"> */}
      <link rel="stylesheet" href="index.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;1,200;1,400;1,500;1,600;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <title>Development</title>
      <section className="layout">
        <div>
          <h1>Development: Bread Ranker</h1>
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
                This project was intended to excercise using React to create a
                web application with functional components for data handling.
              </div>
            </div>
          </section>
          <section>
            <div className="grid">
              <div>
                <h3>research & feedback</h3>
                For this project, I was inspired by thought bubbles and forums
                for creative discussion. The site's goal is to share my musings
                on notable bread or bread-remisicient things. The value is in
                terms of sparking rumination and seeking new experiences (of
                bread articles), meant to inspire users to try various breads or
                think more about them! Tiers range from S-A-B-C-D-E-F. Ratings
                are more sporadic and based on smaller details, but they allow a
                user to aggregate something while they add or remove breads from
                their would-eat-right-now list. Further development of this
                application would involve persisting user data and extension and
                external hosting of the bread data.
              </div>
            </div>
          </section>
          <section>
            <div className="grid">
              <div>
                <h3>design</h3>
                <h2> Usability Principles Considered</h2>
                <div>
                  A user can sort items by their deemed tier, rating, or
                  alphabetically. Additionally, they can filter by flavor
                  profile (sweet, savory, or versatile) and dietary restrictions
                  (egg-free, gluten-free, nut-free, and dairy-free). Taste
                  filtering uses radio buttons, since items fall into only one
                  of the three categories, and dietary restriction filtering
                  uses checkboxes, as an item can fall into multiple categories.
                </div>
                <h2>Organization of Components</h2>
                <ul>
                  <li>
                    radio button component + checkbox component: These
                    components and the functions involved with them utilize
                    props to pass item information amongst the functions before
                    the final state for the overall filtered and sorted list is
                    set.
                  </li>
                  <li>
                    reset filter button: On click, this button sets filter
                    states to their initial state, which are stored as consts.
                  </li>
                  <li>
                    add-to-favorites toggle button component + agreggator
                    component: These are maintained by a state array of
                    booleans, one per item, and an empty state array for
                    favorited items. If an 'add' button is clicked, then the
                    relevant state array item will be updated to True, the itme
                    will be added to the state favorites list, and the rating of
                    that item will be added to the total state. In the other
                    case (the item was previously added, now the button has been
                    toggled to its 'remove' option), then the same toggling
                    steps will occur, with subtraction rather than addition.
                  </li>
                  <li>
                    bread item component: This component allows me to utilize an
                    identical layout for each item of data.
                  </li>
                </ul>
                <h2>How Data is Passed Down Through Components</h2>
                <div>
                  Bread data is an object stored in a JSON format in
                  bread-data.json. This data is passed through various sort and
                  filter functions until it is passed through a BreadItem.js
                  component and rendered on the platform. Upon any sorting or
                  filtering button click, Data will be filtered by the
                  user-determined taste, then dietary restrictions, then sort.
                  If the Favorites option is toggled, then the favorites list is
                  used as the initial object to filter on rather than the full
                  bread list. Finally, each data is mapped as its own item with
                  its own add-to-favorites toggle button. Pressing the favorites
                  toggle button of an item uses the rating of that item to
                  either be added or subtracted (depending if the user favorites
                  or unfavorites) to the total rating.
                </div>
                <h2>How the User Triggers State Changes</h2>
                <div>
                  Using various forms of buttons (default, radio, checkboxes)
                  that are marked with onChange/onClick operations leading to
                  update-state-functions, a user will trigger State changes.
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="grid">
              <div>
                <h3>insights & takeaways</h3>
                Overall, a web application as a means of a creative outlet was
                an entertaining way to start consolidating effective React
                fundamentals.
              </div>
            </div>
          </section>
        </div>
        <div id="introadiv">
          <a
            className="introa"
            href="https://volatilepenguin222.github.io/development/"
            target="_blank"
          >
            <img className="picture" src="images/sitebread.png" />
            Click to view the Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectThree;
