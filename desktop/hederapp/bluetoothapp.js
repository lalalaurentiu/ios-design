import { rightheaderapps } from "../utils/rightHeaderAppConstructor.js";

// bluetooth icon
let bluetooth = document.createElement("div")
bluetooth.setAttribute("style", `
    display:flex;
    align-items:center;
    margin-right:10px;
`)
bluetooth.innerHTML = `
<svg height="15" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
    <path d="M45.994,16.917L26.834,0v21.758l-8.586-8.586l-4.242,4.242L26.092,29.5L14.006,41.586l4.242,4.242l8.586-8.586V60
    l19.16-19.083l-11.52-11.52L45.994,16.917z M32.834,46.327V36.242l4.84,4.841L32.834,46.327z M37.675,17.083l-4.84,5.244V12.242
    L37.675,17.083z"/>
</svg>
`

rightheaderapps.push({object:bluetooth, elements:[
    [`
    <span>
        Bluetooth
    </span>
    `,
    `
        <div style="width:30px;height:15px;border:1px solid white;border-radius:10px;">
            <div style="width:15px;height:100%;background:white;border-radius:50%;">
            </div>
        </div>
    `,
    "border-bottom:1px solid white;"],
    [`<span style="font-size:10px;">
        Devices
    </span>`,
    "<span></span>"],
    [`
        <span style="display:flex;align-items:center;">
            <div style="width:30px;height:30px;background:#0376ff;display:inline-flex;align-items:center;justify-content:center;border-radius:15px;margin-right:10px;">
                <svg height="15" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
                    <path d="M45.994,16.917L26.834,0v21.758l-8.586-8.586l-4.242,4.242L26.092,29.5L14.006,41.586l4.242,4.242l8.586-8.586V60
                    l19.16-19.083l-11.52-11.52L45.994,16.917z M32.834,46.327V36.242l4.84,4.841L32.834,46.327z M37.675,17.083l-4.84,5.244V12.242
                    L37.675,17.083z"/>
                </svg>
            </div>
            Apple Bluetooth Mouse
        </span>
    `,
    "<span></span>"],
    [`
        <span style="display:flex;align-items:center;">
            <div style="width:30px;height:30px;background:gray;display:inline-flex;align-items:center;justify-content:center;border-radius:15px;margin-right:10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor" viewBox="0 0 24 24">
                    <path fill="white" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" 
                        d="M5 .5C3.138.5 1.495 1.343.5 2.631V8.37C1.495 9.657 3.138 10.5 5 10.5c.901 0 1.749-.201 
                        2.5-.55V21.5h3v-16c0-2.761-2.462-5-5.5-5zM6 8.5A1.5 1.5 0 017.5 10M9.5 23.5h-1a1 1 0 01-1-1v-1h3v1a1 
                        1 0 01-1 1z"/>
                    <path d="M3.25 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/>
                    <path fill="white" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" 
                        d="M6.498 2.812c.779.343 1.4.945 1.733 1.687M19 .5c1.862 0 3.505.843 4.5 2.131V8.37c-.995 1.287-2.638 
                        2.13-4.5 2.13a5.922 5.922 0 01-2.5-.55V21.5h-3v-16c0-2.761 2.462-5 5.5-5zM18 8.5a1.5 1.5 0 00-1.5 1.5M14.5 
                        23.5h1a1 1 0 001-1v-1h-3v1a1 1 0 001 1zM17.502 2.812c-.779.343-1.4.945-1.733 1.687"/>
                    <path d="M20.75 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/><path fill="none" d="M0 0h24v24H0z"/>
                </svg>
            </div>
            Apple AirPods
        </span>
    `,
    "<span></span>",
    "border-bottom:1px solid white;"],
    [
        `
        <span>
            Bluetooth Preferences...
        </span>
        `,
        "<span></span>"]
]})
// create function for activate bluetooth button
// ..................

export {bluetooth}