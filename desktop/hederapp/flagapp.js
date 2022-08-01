import { rightheaderapps } from "../utils/rightHeaderAppConstructor.js";

// language flag
let flag = document.createElement("div")
flag.setAttribute("style", `
    display:flex;
    align-items:center;
    margin-right:10px;
`)
flag.innerHTML = `
    <svg width="30" height="20" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#002B7F" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path><path fill="#FCD116" d="M12 5h12v26H12z"></path><path fill="#CE1126" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></path></svg>
`

rightheaderapps.push({object:flag, elements:[
    [`
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" style="display:inline-block;transform:translateY(2px)" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
            Romanian
        </span>
    `,
    "<span></span>",
    "border-bottom:1px solid white;"],
    [`
        <span>  
            <svg xmlns="http://www.w3.org/2000/svg" width="13" style="display:inline-block;transform:translateY(2px)" fill="currentColor" class="bi bi-window-dock" viewBox="0 0 16 16">
                <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                <path d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12ZM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1ZM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2Z"/>
            </svg>
            Show Emoji & Symbols
        </span>
    `,
    "<span></span>"],
    [`
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" style="display:inline-block;transform:translateY(2px)" fill="currentColor" class="bi bi-window-desktop" viewBox="0 0 16 16">
                <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-9Z"/>
                <path d="M2.375 1A2.366 2.366 0 0 0 0 3.357v9.286A2.366 2.366 0 0 0 2.375 15h11.25A2.366 2.366 0 0 0 16 12.643V3.357A2.366 2.366 0 0 0 13.625 1H2.375ZM1 3.357C1 2.612 1.611 2 2.375 2h11.25C14.389 2 15 2.612 15 3.357V4H1v-.643ZM1 5h14v7.643c0 .745-.611 1.357-1.375 1.357H2.375A1.366 1.366 0 0 1 1 12.643V5Z"/>
            </svg>
            Show Keyboard Viewer
        </span>
    `,
    "<span></span>",
    "border-bottom:1px solid white;"],
    [`
        <span>
            Show Input Source Name
        </span>
    `,
    "<span></span>"],
    [
        `
        <span>
            Open Keyboard Preferences...
        </span>
        `,
        "<span></span>"]
]})

export {flag}