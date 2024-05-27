import React from 'react';
import Accordion from './Accordion.jsx';
import writingsObject from '../static/Writings.js';
import CI from './CI.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Writings = () => {

    let match = useRouteMatch();

    const formatAccordion = (key) =>
    {
        let val = writingsObject[key]
        let children;
        
        switch (val["bellowsClass"]) {
            case "bellows-Latin-verse":
            case "bellows-English-verse":
                children = val["content"].map((line, index) => {
                    return (
                        <p>
                        <span key={index}>
                        {line}
                        </span>
                        {(index+1) % 5 == 0 && <span style={{"padding-left": "15%", "user-select": "none"}}>{index+1}</span>}
                        </p>
                    );
                });
                break;
            case "bellows-Latin-prose":
            case "bellows-English-prose":
                children = val["content"].map((line, index) => {
                    return (
                        <div>
                        <p key={index}>
                        <span>[{index+1}] </span>{line}
                        </p>
                        </div>
                        );
                        
                });
                break;
        }
    
        return (
            <Accordion name={key}
            text={children}
            bellowsClass={val["bellowsClass"]}
            />
        )
    }

    return (
        <div id="writings" class="page-container">
            <title>Writings</title>
            <h1>Writings</h1>
            <span>A collection of various scriptures</span>
            <div class="English-links">
                <h2>English</h2>
            <div style={{"display": "inline-block"}}><Link to={`${match.url}/cantus-inhabitandi`}><h3>Cantus Inhabitandi</h3></Link></div>
                <p>Songs to be dwelled in</p>
            </div>
            <div class="Latin-links">
                <h2>Latin</h2>
                <ul style={{"width": "100%", "display": "block"}}>
                <li>{formatAccordion("De Umbris")}</li>
                <li>{formatAccordion("Feli Felici")}</li>
                <li>{formatAccordion("Magistro")}</li>
                <li>{formatAccordion("Meae Radices Robustaeque Altae Sunt")}</li>
                <li>{formatAccordion("Sine Nomine Imperfectum I")}</li>
                </ul>
            </div>
        </div>
    );
}

export default Writings;
