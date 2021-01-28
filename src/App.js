import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import "./App.css";
import Terminal from './components/Terminal'

function App(props) {
  //const [pageContext, setPageContext] = React.createContext('game')
  //const [roomContext, setroomContext] = React.createContext('break_unlit')
  
  const [pageState, setPageState] = useState("game");
  const PageContext = React.createContext({
    pageState: "game",
    setPageState: () => {}
  });

  const [roomState, setRoomState] = useState("break_unlit")
  const RoomContext = React.createContext({
    roomState: "break_unlit",
    setRoomState: () => {}
  });

  const PageUpdater = () => {
    const {pageState, setPageState} = React.useContext(PageContext)

  }
  const pageValue = {pageState, setPageState};
  const roomValue = {roomState, setRoomState}
  return (
    <pageContext.Provider value={pageContext}>
      <roomContext.Provider value={roomContext}>
        <BrowserRouter basename="/">
          <div id="App">
            <div className="header">
              <span className="navButton"><Link to="about">About</Link></span>
              <span className="navButton"><Link to="projects">Projects</Link></span>
              <span className="navButton"><Link to="/">Game</Link></span>
              <span className="navButton"><Link to="stuff">Stuff</Link></span>
              <span className="navButton"><Link to="writings">Writings</Link></span>
            </div>
            <Route component={Terminal}/>
          </div>
        </BrowserRouter>
      </roomContext.Provider>
    </pageContext.Provider>
  );
}


export default App;
