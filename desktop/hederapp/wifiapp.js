import { rightheaderapps } from "../utils/rightHeaderAppConstructor.js";

// wifi
let wifi = document.createElement("div")
wifi.setAttribute("id", "wifi")
wifi.setAttribute("style", `
    width:30px;
    height:20px;
    margin-right:10px;
`)
for (let i = 0;i<3;i++){
    let wifiline = document.createElement("div")
    wifiline.setAttribute("class", "wifi-line")
    wifi.append(wifiline)
}

rightheaderapps.push({object:wifi, elements:[
    [`
    <span>
        Wi-Fi
    </span>
    `,
    `
        <div style="width:30px;height:15px;border:1px solid white;border-radius:10px;">
            <div style="width:15px;height:100%;background:white;border-radius:50%;">
            </div>
        </div>
    `,
    "border-bottom:1px solid white;"],
    [
    `
        <span style="display:flex;align-items:center;">
            <div style="width:30px;height:30px;background:#0376ff;display:inline-flex;align-items:center;justify-content:center;border-radius:15px;margin-right:10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wifi-2" viewBox="0 0 16 16">
                    <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z"/>
                </svg>
            </div>
            Network 5G
        </span>
    `,
    `
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        </svg>
    </span>
    `,
    "border-bottom:1px solid white;"],
    [`
    <span>
        Other Networks
    </span>
    `,
    `
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
    </span>
    `,
    "border-bottom:1px solid white;"],
    [`
    <span>
        Network Preferences...
    </span>
    `,
    `<span></span>`]
]})

export {wifi}