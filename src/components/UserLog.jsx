import React, { useEffect, useState, setState } from 'react';
import Rooms from "../Rooms.js";
import Items from "../Items.js";
import {PageContext, RoomContext} from "../App.js";

function CommandParser(props) {
    const {roomState, setRoomState} = React.useContext(RoomContext)
    const wordRegex = /\w+/g
    const primString = String(props.commandString)
    const tokens = primString.match(wordRegex)
    var messageReturn;
    var inRoom;
    console.log(primString)
    console.log(tokens)
    
    const [inventory, setInventory] = useState([])

    if (tokens === null) {
        messageReturn = "Type something next time."
    }
    else if (tokens.length > 1) {
        switch(tokens[0]) {
            case "look":
                break;
            case "go":
                break;
            case "use":
                break;
            case "take":
                break;
            default:
                break; 
        }
    }
    
    else if (tokens.length <= 1) {
        switch(String(tokens[0])) {
            case "help":
                messageReturn = "HELP"
                break;
            case "look":
                messageReturn = Rooms[inRoom].look
                break;
            case "inventory":
                messageReturn = "Your infinitely deep breast pocket contains...";
                break;
            default:
                messageReturn = "Sorry, I don't understand."
                break;
        }
    }

    return(
        <span 
        className="log-narrans"
        key={"nlog" + props.ind}
        >
            {messageReturn}
        </span>
    );
}

export default CommandParser;