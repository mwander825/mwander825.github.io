import React, { useEffect, useState, setState } from 'react';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from "@material-ui/core/styles";
import CommandParser from "./UserLog.jsx";
import App from "../App.js"
import Typography from '@material-ui/core/Typography';
import Rooms from "../Rooms.js"
import "../App.css";

const useStyles = makeStyles(theme =>({
    root: {
        color: "white",
        fontFamily: 'Courier New'
    }
}))

function Terminal(props) {
    const TextFieldRef = React.useRef(null);
    const termstyle = {
        margin: "0 auto",
        top: "70px",
        width: "33%",
        height: "700px",
        color: "white",
        fontFamily: 'Courier New',
        display: "block",
        position: "relative",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "black"
    };

    // Array destructuring
    const [userCommand, setUserCommand] = useState("")
    const [userLog, setUserLog] = useState([])
    const [commandCount, setCommandCount] = useState(0)
    
    // contexts
    const RoomContext = App.RoomContext
    console.log(App.fuck)
    console.log(RoomContext)
    // Monitor value of the command input Textfield
    const changeHandler = (value) => {
        setUserCommand(value)
        TextFieldRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
    }
    
    const enterHandler = (e) => {
        // '===' : things compared must be of the same type
        if (e.key === 'Enter'){
            console.log("Enter key pressed")

            // Update the amount of commands input
            setCommandCount(commandCount + 1)

            // .push() mutates original array, don't use to update state
            // instead use ... (spread operator)
            setUserLog([...userLog, {ind: commandCount, command: userCommand}])
            
            // Clear userCommand value
            setUserCommand("")

            // Scroll to the TextField on command input?
            TextFieldRef.current.scrollIntoView(false)
        }
    }

    // for loop?
    // .map works like map in python kind of
    let children = userLog.map((val) => {
        return (
            <div>
                <span 
                className="log"
                key={"clog" + val.ind}
                >
                    {">" + (val.command)}
                </span>
                <span>
                <RoomContext.Provider value={val}>
                    <CommandParser ind={val.ind} commandString={val.command}/>
                </RoomContext.Provider>
                </span>
            </div>
        )  
    });

    const classes = useStyles();
    return(
        <div style={termstyle}>
            <div className="log-wrapper">
                <span className="log-narrans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                {children}
            </div>
            <TextField
            value={userCommand}
            ref={TextFieldRef}
            onKeyPress={(event) => enterHandler(event)}
            onChange={(event) => changeHandler(event.target.value)}
            fullWidth
            InputProps={{
                classes: { root: classes.root },
                disableUnderline: true,
                startAdornment:
                <InputAdornment
                classes = {{root: classes.root}}
                position = "start"
                >
                {'>'}</InputAdornment>
            }}
            />
        </div> 
    )
}

export default Terminal;