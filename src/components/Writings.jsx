import React from 'react';
import Accordion from './Accordion.jsx';
//import 'react-dropdown/style.css';

const Writings = () => {
    return (
        <div id="writings" class="page-container">
            <title>Writings</title>
            <span>A collection of various scriptures</span>
            <div class="Latin-links">
                <h1>Latin</h1>
                <ul>
                <li><Accordion name="Nihil!" text="manfuk"/></li>
                </ul>
            </div>
        </div>   
         
    );
}

export default Writings;
