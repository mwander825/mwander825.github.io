import React , {useState} from "react";

// react component accordion list
function Accordion(props) {
    
    const [isDropped, setIsDropped] = useState(false);

    return (
        <div class='accordion'>
            <span class="accordion-title" onClick={() => setIsDropped(!isDropped)}>
                <span style={{"padding-right": "2px", "width": "13px", "display": "inline-block"}}>{isDropped ? '-' : '+'}</span>
                <span><b>{props.name}</b></span>  
            </span>
            {isDropped && props.text}
        </div>
    )
}

export default Accordion;