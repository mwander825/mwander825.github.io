import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import "./App.css";
import Terminal from './components/Terminal'

function App(props) {
  const [pageContext, setPageContext] = React.createContext('game')
  const [roomContext, setroomContext] = React.createContext('break_unlit')
  return (
    <BrowserRouter basename="/">
      <div id="App">
        <div className="header">
          <span className="navButton"><Link to="about">About</Link></span>
          <span className="navButton"><Link to="projects">Projects</Link></span>
          <span className="navButton"><Link to="/">Game</Link></span>
          <span className="navButton"><Link to="stuff">Stuff</Link></span>
          <span className="navButton"><Link to="Writings">Writings</Link></span>
        </div>
        <Route component={Terminal}/>
      </div>
    </BrowserRouter>
  );
}


export default App;
