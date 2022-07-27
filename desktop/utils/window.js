import {screenHeight} from "../../index.js"
import {screenWidth} from "../../index.js"

let minimise = 1
    function desktopWindow(parrent){
        // window
        let win = document.createElement("div")
        win.setAttribute("style", `
            width:${(screenWidth / 100) * 50}px;
            height:${(screenHeight / 100) * 50}px;
            background:#00315f;
            position:absolute;
            left:50%;
            transform:translateX(-50%);
            border:1px solid gray;
            border-radius:20px;
            transition:all 0.5s;
        `)
        parrent.append(win)

        // header
        let windowHeight = (screenHeight / 100) * 50 // window height
        let header = document.createElement("div")
        header.setAttribute("style" , `
            width:100%;
            height:${(windowHeight / 100) * 10}px;
            border-bottom:1px solid white;
            display:flex;
            align-items:center;
        `)
        win.append(header)

        let body = document.createElement("div")
        body.setAttribute("style", `
            width:100%;
            height:calc(100%- ${(windowHeight / 100) * 10}px);
            display:flex;
            text-align:center;
            justify-content:center;
            color:white;
        `)
        win.append(body)

        let desktop = document.createElement("div")
        desktop.setAttribute("style", `
            position:absolute;
            z-index:7;
            display:flex;
            justify-content:center;
            align-items:center;
        `)
        body.append(desktop)
        
        let gearContainer = document.createElement("div")
        gearContainer.setAttribute("style",`
            text-align:center;
        `)
        desktop.append(gearContainer)

        let gear = document.createElement("img")
        gear.setAttribute("id", "gear")
        gear.setAttribute("src", "icons/gear.svg")
        gear.setAttribute("style", `
            width:${(screenWidth / 100) * 10}px;
            height:${(screenHeight / 100) * 10}px;
        `)
        gearContainer.append(gear)

        let gear2 = document.createElement("img")
        gear2.setAttribute("id", "gear2")
        gear2.setAttribute("src", "icons/gear.svg")
        gear2.setAttribute("style", `
            width:${(screenWidth / 100) * 10}px;
            height:${(screenHeight / 100) * 10}px;
        `)
        gearContainer.append(gear2)

        let message = document.createElement("div")
        message.innerHTML = "Under Construction..."
        message.setAttribute("style", `
            position:relative;
            top:50px;
            align-self:center;
            `)

        gearContainer.append(message)

        // actions buttons
        let actionsButtons = document.createElement("div")
        header.append(actionsButtons)

        let leftSideHeaderButtons = [{
            name:"close",
            color:"#e23535"
        },
        {
            name:"minimise",
            color:"orange"
        },
        {
            name:"restoration",
            color:"gray"
        }]

        leftSideHeaderButtons.forEach(element => {
            let button = document.createElement("button")
            button.setAttribute("style", `
                width:15px;
                height:15px;
                background:${element.color};
                border-radius:10px;
                margin-left:10px;
                border:none;
            `)
            actionsButtons.append(button)
            
            if (element.name == "close"){
                button.addEventListener("click", () => {
                    win.innerHTML = ""
                    win.style.display = "none"
                })
            } else if (element.name == "minimise"){
                button.addEventListener("click", () => {
                    win.style.transition = "all 0.5s"
                    win.style.bottom = "0"
                    win.style.height = "0"
                    setTimeout(() => {win.style.display = "none"}, 500)
                })
            } else if (element.name == "restoration"){
                button.addEventListener("click", () => {
                    if (minimise == 1){
                        win.setAttribute("style", `
                            width:100%;
                            height:calc(100% - 30px);
                            transform:translateX(0);
                            top:30px;
                            background:#00315f;
                            position:absolute;
                            transition:all 0.5s;
                        `)
                        minimise = 0
                    } else {
                        win.setAttribute("style", `
                            width:${(screenWidth / 100) * 50}px;
                            height:${(screenHeight / 100) * 50}px;
                            background:#00315f;
                            position:absolute;
                            left:50%;
                            transform:translateX(-50%);
                            border:1px solid gray;
                            border-radius:20px;
                        `)
                        minimise = 1
                    }
                    
                })
            }
        });
    }

    export {desktopWindow}