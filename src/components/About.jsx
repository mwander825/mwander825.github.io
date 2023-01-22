import React from 'react';
import pp from "../static/media/pp.png"

const About = () => {
    return (
       <div id="aboutpage">
          <header class="title">
          <h1>About Me</h1>
          </header>
          <p>
            <img id="pp" src={pp} alt="FACE" width="300px" height="300px"></img>
            Salve! My name is Michael Wander, and I'm a data scientist currently residing in Queens, New York. 
            I recently graduated from The City College of New York with an M.S. in data science and engineering.
            After finishing my internship at Cigna's Evernorth branch as a data scientist, I am pursuing an 
            entry-level opportunity in the data analysis and data science fields. 
          </p>
          <p>
            In my free time, I BIGMAN.
          </p>
       </div>
    );
}
export default About;