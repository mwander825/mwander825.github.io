import React, { useEffect, useState, setState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./App.css";

import About from "./components/About.jsx"
import Dungeon from "./components/Dungeon.jsx"
import Writings from "./components/Writings.jsx"
import Projects from "./components/Projects.jsx"
import CI from "./components/CI.jsx"

function App(props) {
  return (
          <div id="App">
            <div class="header">
              <Link to="/experience" class="navLink"><span id="experience" class="navButton" data-hover="Peritia">Experience</span></Link>
              <Link to="/projects" class="navLink"><span id="projects" class="navButton" data-hover="Prodita">Projects</span></Link>
              <Link to="/" class="navLink"><span id="about" class="navButton" data-hover="De Me">About</span></Link>
              <Link to="/writings" class="navLink"><span id="writings" class="navButton" data-hover="Scripta">Writings</span></Link>
              <Link to="/dungeon" class="navLink"><span id="dungeon" class="navButton" data-hover="Robur?">Dungeon</span></Link>
            </div>
            <Switch>
            <Route exact path="/experience"> 
              </Route>
              <Route exact path="/projects"> 
                <Projects />
              </Route>
              <Route exact path="/">
                <About />
              </Route>
              <Route exact path="/writings">
                <Writings />
              </Route>
              <Route exact path="/writings/cantus-inhabitandi">
                <CI />
              </Route>
              <Route exact path="/dungeon">
                <Dungeon />
              </Route>
            </Switch>
          </div>
  );
}

export default App;
