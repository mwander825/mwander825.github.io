import React from 'react';
import pp from "../static/media/pp.png";

const About = () => {
    return (
       <div id="aboutpage">
          <header class="title">
          <h1>About Me</h1>
          </header>
          <p>
            <img id="pp" src={pp} alt="FACE" width="300px" height="300px"></img>
            Salve! My name is Michael Wander, and I'm a data scientist currently residing in Philadelphia. 
            I graduated from The City College of New York with an M.S. in data science and engineering, and currently work as 
            a remote data engineer.
             
          </p>
          <p>
            In my free time I like to play the drums, study Latin and other languages, listen to music, and play various video games.
          </p>
       </div>
    );
}
export default About;