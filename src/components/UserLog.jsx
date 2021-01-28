import Rooms from "../Rooms.js";

function CommandParser(props) {
    const wordRegex = /\w+/g
    const primString = String(props.commandString)
    const tokens = primString.match(wordRegex)
    var messageReturn;
    var inRoom;
    console.log(primString)
    console.log(tokens)

    if (tokens === null) {
        messageReturn = "Type something next time."
    }
    else if (tokens.length > 1) {
        tokens.forEach(sentenceParser)
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
                messageReturn = "Your infinitely deep breast pocket contains";
                break;
            default:
                messageReturn = "Sorry, I don't understand."
                break;
        }
    }

    function sentenceParser(word) {
        if (word) {
            switch(String(word)) {
                case "help":
                    break;
                case "look":
                    break;
                case "inventory":
                    break;
                default:
                    break;
            }
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