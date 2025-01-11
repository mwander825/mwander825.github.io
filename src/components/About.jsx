import React from 'react';
import pp from "../static/media/pp.png";

const About = () => {
    return (
       <div id="aboutpage">
          <header class="title">
          <h1>About Me</h1>
          </header>
          <img id="pp" src={pp} class="pp" alt="FACE" width="300px" height="300px"></img>
          <p>
            
            Salve! My name is Michael Wander, and I'm a data scientist currently residing in Philadelphia. 
          </p>
          <p>
            I graduated from The City College of New York with an M.S. in data science and engineering, and currently work as 
            a remote data scientist and analyst.
          </p>
          <p>
            In my free time I like to play the drums, study Latin and other languages, read/write, listen to music, and play various video games.
          </p>
        <p>
          Nescio quae alia hic scribere.
          最低だ。
        </p>
       </div>
    );
}
export default About;