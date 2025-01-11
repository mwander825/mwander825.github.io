import React from 'react';
import Accordion from './Accordion.jsx';
import cantusObject from '../static/Writings.js';
import BCP from "./BCP.jsx";

const CI = () => {

    return(
        <div id="cantus-inhabitandi" class="page-container">
            <h1>Cantus Inhabitandi</h1>
            <p>A collection of songs one could live in.</p>
            <div>
                <h3>Omori OST</h3>
                <p>Spoilers ahead...</p>
                <ul class="clinks">
                    <li>
                        <Accordion name={"Spaces In-between"} 
                        text={<div>
                        <p>
                            Pretty much just a 13 second loop of a distorted melody. 
                            This is one of the first songs you hear in the game, which
                            really sets the dreamlike (and nightmarelike) atmosphere of Headspace well.
                        </p>
                        <iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/ljAyy-dhAz0" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe>
                        </div>}>
                        </Accordion>
                    </li>
                    
                    <li>
                        <Accordion name={"Pyrefly Forest - Cat's Cradle"} 
                        text={<div>
                        <p>
                            I like the way this song slowly creeps in, 
                            as if you can feel the enveloping mist dissipating
                            while you advance.
                        </p>
                        <iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/QtQubHCy2UI" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe>
                        </div>}>
                        </Accordion>
                    </li>
                    <li>
                        <Accordion name={"Gator Gambol"} 
                        text={<iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/XAUoNdt-0hs" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe>}>
                        </Accordion>
                    </li>
                    <li>
                        <Accordion name={"Sinking"} 
                        text={<iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/Q5_r_ld4vyY" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe>}>
                        </Accordion>
                    </li>
                    <li>
                        <Accordion name={"H20:HCL"} 
                        text={<iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/KszmrMQYYNw" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe>}>
                        </Accordion>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default CI;