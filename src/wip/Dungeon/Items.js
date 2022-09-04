export default
{
    "pen": {
        look: "A retractable ballpoint pen.",
        take: "You took the pen.",
        use: {
            onSelf: "Click.",
            paper: ""
        }
    },
    "paper": {
        usefulCommands: ["look", "take"]
    },
    "clipboard": {
        usefulCommands: ["look", "take"]
    },
    "whiteboard": {
        usefulCommands: ["look"],
        flagged: 1
    },
    "poster": {
        usefulCommands: ["look"]
    },
    "marker": {
        usefulCommands: ["look", "take", "use"]
    },
    "eraser": {
        usefulCommands: ["look", "take", "use"]
    },
    "switch": {
        "break_unlit": {
            look: "A fuzzy-looking object in the shape of a light switch.",
            use: ["You flip the switch. Suddenly the", {0: 1}]
        },
        "break_lit": {
            look: "An oft-used light switch.",
            use: ["You flip the switch, plunging the break room into darkness.", {0: 0}]
        },
        flagged: 0
    }
}