import React, { useEffect, useState, setState } from 'react';
import { BrowserRouter, HashRouter, Link, Route } from 'react-router-dom';
import "./App.css";

import About from "./components/About.jsx"

function App(props) {
  return (
        <HashRouter basename="/">
          <div id="App">
            <div class="header">
              <span id="about" data-hover="Experientia"><Link to="experience" className="navButton">Experience</Link></span>
              <Link to="projects"><span id="projects" class="navButton" data-hover="Prodita">Projects</span></Link>
              <Link to="/"><span id="about" class="navButton" data-hover="De Me">About</span></Link>
              <span id="writings"><Link to="writings"  className="navButton">Writings</Link></span>
              <span id="dungeon"><Link to="dungeon" className="navButton">Dungeon</Link></span>
            </div>
              <Route exact path="/">
              <About/>
              </Route>    
          </div>
        </HashRouter>
  );
}

export default App;
