import { rightheaderapps } from "../utils/rightHeaderAppConstructor.js";

// battery
let battery = document.createElement("div")
battery.setAttribute("id","battery")
battery.setAttribute("style", `
    height:15px;
    margin-right:10px;
`)
let batterycell = document.createElement("div")
batterycell.setAttribute("id", "battery-cell")
battery.append(batterycell)

let batteryplus = document.createElement("div")
batteryplus.setAttribute("id", "battery-plus")
battery.append(batteryplus)

rightheaderapps.push({object:battery, elements:[
    [`
        <span>
            Battery
        </span>
    `,
    `
        <span>
            100%
        </span>
    `],
    [`
        <span  style="font-size:10px;">
            Power Source: Battery
        </span>
    `,
    ` <span></span>`,
    "border-bottom:1px solid white;"],
    [`
        <span  style="font-size:10px;">
            Using Significant Energy
        </span>
    `,
    ` <span></span>`],
    [`
        <span style="display:flex;align-items:center;">
            <img src="./icons/safari.svg" width="20" height="20" style="margin-right:10px;">
            Safari
        </span>
    `,
    ` <span></span>`,
    "border-bottom:1px solid white;"],
    [`
        <span>
            Battery Preferences...
        </span>
    `,
    ` <span></span>`]
]})

export {battery}