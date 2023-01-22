import React , {useState} from "react";

// react component accordion list
function Accordion(props) {
    
    const [isDropped, setIsDropped] = useState(false);

    return (
        <div class='accordion'>
            <div class="accordion-title" onClick={() => setIsDropped(!isDropped)}>
                <div>{isDropped ? '- ' : '+ '}{props.name}</div>
                <div class="bellows"> 
                
                </div>
            </div>
        </div>
    )
}

export default Accordion;