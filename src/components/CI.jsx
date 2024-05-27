import React from 'react';
import Accordion from './Accordion.jsx';
import bcb from "../static/media/bcb.png";
import yti from "../static/media/yti.png";
import cantusObject from '../static/Writings.js';
import BCP from "./BCP.jsx";

const CI = () => {

    return(
        <div id="cantus-inhabitandi" class="page-container">
            <h1>Cantus Inhabitandi</h1>
            <p>A collection of songs one could live in.</p>
            <p>Perhaps a bit of a nebulous definition, but you'll get the gist after listening to a few.</p>
            <div>
                <h3>Omori OST
                <a href="https://omori.bandcamp.com/album/omori-ost" rel="noopener noreferrer" target="_blank" class="other-button-link">
                <img class="other-button-link" src={bcb} alt="(Bandcamp)"/>
                </a>
                <a href="https://www.youtube.com/playlist?list=PLbANFjAlbtqLkcthrPJ7lqYcVTSwXr2L0" rel="noopener noreferrer" target="_blank" class="other-button-link">
                <img class="other-button-link" src={yti} alt="(YouTube)"/>
                </a>
                </h3>
                <p>Omori's music encompasses a very eclectic mix of genres like ambient, orchestral, electronic, breakcore, and many others.
                The songs chosen here represent more of the ambient / subdued nature of the OST.</p>
                <p><i>Spoilers ahead...</i></p>
                <ul class="clinks">
                    <li>
                        <Accordion name={"Spaces In-between"} 
                        text={<div>
                        <p>
                            Pretty much just a 13 second loop of a distorted melody. 
                            This is one of the first songs you hear in the game, which
                            really sets the dreamlike (and nightmarelike) atmosphere of Headspace well.
                        </p>
                        <div>
                        <iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/ljAyy-dhAz0" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe>
                        </div>
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
                        <div>
                        <iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/QtQubHCy2UI" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe>
                        </div>
                        </div>}>
                        </Accordion>
                    </li>
                    <li>
                        <Accordion name={"Gator Gambol"} 
                        text={<div><p>Goddamnit KEL, you're going to lose all our clams</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/XAUoNdt-0hs" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                        </Accordion>
                    </li>
                    <li>
                        <Accordion name={"Sinking"} 
                        text={<div>
                            <p>
                                The bleak, distorted theme to Deeper Well: This is one of those songs that can hardly be ripped from its in-game context.
                                You've already been losing the memory of BASIL since the casino, but in Deeper Well you completely forget why you're even on this journey in the first place.
                                This area and its theme hold so much significance, so it's relieving that Sinking is perfectly made to accompany the game at this stage.
                            </p>
                            <div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/Q5_r_ld4vyY" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                        </Accordion>
                    </li>
                    <li>
                        <Accordion name={"H20:HCL"} 
                        text={<div><p>HUMPHREY's theme. The first (and last) dungeon where you have no goal of finding BASIL. This song is a heavily-weighted part of an almost 15-way tie (Spaces In-between / By Your Side / The Heart of the Desert / 'X' Marks the Spot! / Those Who Forget History / Pyrefly Forest - Cat's Cradle / World's End Valentine / Gator Gambol / Clams Clams Clams / Jawbreaker / Sinking / H20:HCL / BREADY STEADY GO / OMORI / DUET) for my favorite of the OST.</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/KszmrMQYYNw" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                        </Accordion>
                    </li>

                </ul>
                <h3>Anodyne OST
                <a href="https://htch.bandcamp.com/album/anodyne" rel="noopener noreferrer" target="_blank" class="other-button-link">
                <img class="other-button-link" src={bcb} alt="(Bandcamp)"/>
                </a>
                <a href="https://www.youtube.com/playlist?list=PLk8kGXAr3dTvFYEilfm514LWL1TdyBaSg" rel="noopener noreferrer" target="_blank" class="other-button-link">
                <img class="other-button-link" src={yti} alt="(YouTube)"/>
                </a></h3>
                <p>I feel that the music of Anodyne remains fairly minimal while still being an amazing and full soundtrack to the worlds of the game.
                This is most likely unrelated to the music, but Anodyne has one of my favorite post-game upgrades (Swap) that I've ever seen in a game.</p>
                <ul class="clinks">
                <li>
                    <Accordion name={"Anodyne"} 
                    text={<div><p>The intro theme that plays on the title screen.</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/dORYfd6Cfpw" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                    </Accordion>
                </li> 
               <li>
                    <Accordion name={"Friend"} 
                    text={<div><p>Also known as Mitra's theme, this may be my favorite song in the game, despite its length.</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/ucpPc7J4OSw" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                    </Accordion>
                </li>
                <li>
                    <Accordion name={"Forest"} 
                    text={<div><p>I'm a sucker for a Gymnopédie I motif.</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/_vVMtGuaqSA" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                    </Accordion>
                </li>
                <li>
                    <Accordion name={"Cliff"} 
                    text={<div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/5Z4FPUC-QzE" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div>}>
                    </Accordion>
                </li>
                <li>
                    <Accordion name={"Go"} 
                    text={<div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/gkAofumq_xM" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div>}>
                    </Accordion>
                </li>
                </ul>
                <h3>Environmental Station Alpha OST
                <a href="https://nnoby.bandcamp.com/album/music-for-an-imaginary-soundchip-environmental-station-alpha-soundtrack" rel="noopener noreferrer" target="_blank" class="other-button-link">
                <img class="other-button-link" src={bcb} alt="(Bandcamp)"/>
                </a></h3>
                <p>Some great Metroid-y music for a great, albeit sometimes egregiously cryptic, Metroidvania.</p>
                <ul class="clinks">
                <li>
                    <Accordion name={"Wistful Departure"} 
                    text={<div><p>The title screen music, the melody of which is reprised in the ending theme.</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/kCV1pCG9UoQ" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                    </Accordion>
                </li>
                <li>
                    <Accordion name={"Spinning Dandelion"} 
                    text={<div><p>Lush, vibrant music for a lush, vibrant sector.</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/nJzEnCJrk_E" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                    </Accordion>
                </li>
                <li>
                    <Accordion name={"Requiem"} 
                    text={<div><p>Perhaps one of the most Metroid-y songs in the game. A fittingly mystical-sounding song for an incredibly out-of-the-way and particularly brutal movement-based gauntlet (the Dash Maze).</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/Zp4OWbKGjCE" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                    </Accordion>
                </li>  
                </ul>               

            </div>
            <h3>Hakoniwa Explorer Plus OST
            <a href="https://www.youtube.com/watch?v=poD5mkUF10E" rel="noopener noreferrer" target="_blank" class="other-button-link">
            <img class="other-button-link" src={yti} alt="(YouTube)"/>
            </a></h3>
            <p>There are some surprisingly beautiful songs in this game about monster girls and ass grabbing.</p>
            <ul class="clinks">
            <li>
                <Accordion name={"Stiffchub Sky"} 
                    text={<div><p>The theme of Stiffchub City, which is a snowy and wintry town in the sky. This is actually the song which inspired me to start collecting and writing about all of these songs. The juxtaposition of the name and the music itself still makes me laugh, but the music is so beautiful, and during listening I can imagine living in the place which my mind conjures up.</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/poD5mkUF10E?start=587" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                </Accordion>
            </li>
            </ul>
            <h3>あずまんが大王 OST</h3>
            <p>Despite there being many songs relating to shenanigans, hijinks, goofing around, and all sorts of monkey business, there are also many peaceful, maybe melancholic, songs in this anime.</p>
            <ul class="clinks">
            <li>
                <Accordion name={"また明日"} 
                    text={<div><p>Well, see you tomorrow.</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/TaNYsY739-o" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
                </Accordion>
            </li>
            </ul>
            <h3>OFF OST
            <a href="https://www.youtube.com/playlist?list=PLU4ktq2pWONtSYFFHnFZPFfSXMF5Rw0fn" rel="noopener noreferrer" target="_blank" class="other-button-link">
            <img class="other-button-link" src={yti} alt="(YouTube)"/>
            </a></h3>
            <ul class="clinks">
                <p>I currently feel like there's only one entry that fits here, as some of my favorite songs from this game (Not Safe, Pepper Steak, Clockwork) certainly do not.</p>
            <li>
            <Accordion name={"Desperately Safe"} 
                    text={<div><p>The theme of Zone 2 (Bismark). The music is paradoxically both mollifying and unnerving (which can be said about a lot of this game). The title and music provide a great contrast to the song Not Safe, given the in-game context of the latter.</p><div><iframe width="450" height="110" src="https://www.youtube-nocookie.com/embed/rCywWxg5DoY" title="YouTube video player" frameborder="0" allow="encrypted-media;"></iframe></div></div>}>
            </Accordion>                
            </li>
            </ul>
        </div>
        
    )
}

export default CI;