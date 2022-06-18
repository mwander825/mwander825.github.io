import React, { useEffect, useState, setState } from 'react';
import Rooms from "../Rooms.js";
import Items from "../Items.js";
import {PageContext, RoomContext, FlagsContext} from "../App.js";

function CommandParser(props) {
    const {room, setRoom} = React.useContext(RoomContext)
    const {flags, setFlags} = React.useContext(FlagsContext)
    const wordRegex = /\w+/g
    const primString = String(props.commandString)
    const tokens = primString.match(wordRegex)
    
    var messageReturn;
    var commandResult;
    console.log(primString)
    console.log(tokens)
    
    mutableRooms = Rooms;
    mutableItems = Items;
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
                if (tokens.length  > 2) {
                }
                /*else {
                    if(mutableRooms[room].items.includes(tokens[1])){
                        commandResult = mutableItems[tokens[1]]
                        if (commandResult[]) {

                        }
                        messageReturn = commandResult.tokens[0]
                    }
                    else {
                        messageReturn = "There is no" + tokens[1] + "here."
                    }
                }*/
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
                messageReturn = Rooms[room].look
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