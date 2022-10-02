import React, { useEffect, useState, setState } from 'react';
import { BrowserRouter, HashRouter, Switch, Link, Route } from 'react-router-dom';
import "./App.css";

import About from "./components/About.jsx"
import Dungeon from "./components/Dungeon.jsx"

function App(props) {
  return (
    <BrowserRouter>
          <div id="App">
            <div class="header">
              <span id="about" data-hover="Experientia"><Link to="experience" className="navButton">Experience</Link></span>
              <Link to="projects"><span id="projects" class="navButton" data-hover="Prodita">Projects</span></Link>
              <Link to="/"><span id="about" class="navButton" data-hover="De Me">About</span></Link>
              <span id="writings"><Link to="writings"  className="navButton">Writings</Link></span>
              <span id="dungeon"><Link to="dungeon" className="navButton">Dungeon</Link></span>
            </div>
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/dungeon">
                <Dungeon />
              </Route>
            </Switch>
          </div>
    </BrowserRouter>
  );
}

export default App;
