import React , {useState} from "react";

// react component accordion list
function Accordion(props) {
    
    const [isDropped, setIsDropped] = useState(false);

    return (
        <div class='accordion'>
            <div class="accordion-title" onClick={() => setIsDropped(!isDropped)}>
                {isDropped ? '- ' : '+ '}<b>{props.name}</b>         
            </div>
            <div class={props.bellowsClass}> 
                {isDropped && props.text}
            </div>
        </div>
    )
}

export default Accordion;