export default
{
    "break_unlit": {
        items: ["break_light_switch"],
        north: [],
        south: [],
        east: [],
        west: [],
        look: "Through the darkness you can barely make out what appears to be a light switch on the wall."
    },
    "break_lit": {
        items: ["pen", "paper", "clipboard", "break_light_switch"],
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