import {desktopWindow} from "./../utils/window.js"
import {loadingScreen} from "./../../index.js"
class HeaderApp{
    app = document.createElement("div")
    constructor (headerContainer, title){
        this.headerContainer = headerContainer
        this.title = title
    }
    containerSelf(elements){
        this.app.innerHTML = this.title
        this.app.setAttribute("style", `
            display:flex;
            flex-flow: wrap;
            align-items:center;
            margin-left:10px;
        `)
        this.headerContainer.append(this.app)
        let appelements = document.createElement("div")
        appelements.setAttribute("style", `
                width:20%;
                position:absolute;
                top:30px;
                background:rgba(0, 49, 95, 0.5);
                padding:10px;
                display:none;
                border-radius:10px;
                font-size:13px;
            `)
        elements.forEach(element => {
            let elementcontainer = document.createElement("a")
            elementcontainer.setAttribute("class", "headerapp")
            elementcontainer.innerHTML = `${element[0]} ${element[1]}`

            elementcontainer.setAttribute("style", `
                padding:5px;
                ${element[2]}
                width:95%;
                display:flex;
                justify-content:space-between;
                align-items:center;
            `)
            appelements.append(elementcontainer)

            elementcontainer.addEventListener("click", () => {
                desktopWindow(loadingScreen)
            })
        })
        this.app.append(appelements)
        this.app.addEventListener("click", () => {
            appelements.style.display = "initial"
            // this function remove listener from document and remove header app window
            function closeapp(){
                appelements.style.display = "none"
                document.removeEventListener("click", closeapp, false)
            }

            setTimeout(() => {
                document.addEventListener("click", closeapp, false)
            }, 10 )
        })
    }
}

export {HeaderApp}