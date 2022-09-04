export default
{
    "0": {
        "break": {
            items: ["switch"],
            north: [],
            south: [],
            east: [],
            west: [],
            look: "Through the darkness you can barely make out what appears to be a light switch on the wall."
        },
        "break_hallway": {
            items: ["poster", "whiteboard", "marker", "eraser"],
            north: [],
            south: ["break_lit"],
            east: [],
            west: [],
            look: ""
        }
    },
    "1": {
        "break": {
            items: ["pen", "paper", "clipboard", "switch"],
            north: ["break_hallway"],
            south: [],
            east: [],
            west: [],
            look: "You are standing in a break room."
        },
        "break_hallway": {
            items: ["poster", "whiteboard", "marker", "eraser"],
            north: [],
            south: ["break_lit"],
            east: [],
            west: [],
            look: ""
        }
    }
}