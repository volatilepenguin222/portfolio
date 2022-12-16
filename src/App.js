import "./App.css";
import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";

function App() {
  return (
    <>
      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
          {/* <li>
            <NavLink to="/projectone">Project 1</NavLink>
          </li>
          <li>
            <NavLink to="/projecttwo">Project 2</NavLink>
          </li>
          <li>
            <NavLink to="/projectthree">Project 3</NavLink>
          </li>
          <li>
            <NavLink to="/projectfour">Project 4</NavLink>
          </li> */}
        </div>
      </nav>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="projectone" element={<ProjectOne />} />
          <Route path="projecttwo" element={<ProjectTwo />} />
          <Route path="projectthree" element={<ProjectThree />} />
          <Route path="projectfour" element={<ProjectFour />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
