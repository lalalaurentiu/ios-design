import countries from "../../countries.js"
import { hour } from "../utils/hour.js"

function clockApp(parent){
    parent.style.fontFamily = "san-serif"
    // window for all sectiion
    let externalwindow = document.createElement("div")
    externalwindow.setAttribute("style", `
        width:100%;
        height:95%;
        position:absolute;
        bottom:0;
        background-color:#6d6d6d;
        z-index:2;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        transform:translateY(100%);
        transition: all 0.5s;
        display:none;
    `)
    parent.append(externalwindow)

    // objects for sections
    let objectsSections = []
    let countriesObjects = []
    countriesObjects.push = function () {
        Array.prototype.push.apply(this, arguments);
        countriesObjects.forEach(element => {
            let windowWidth = window.innerWidth
            console.log(element.firstChild)
            element.firstChild.addEventListener("touchmove", pos => {
                let position = pos.touches[0].clientX
                element.firstChild.style.transition = `all 0.5s`
                if ((windowWidth / position) > 3){
                    element.firstChild.style.transform = ("translateX(-30%)")
                }else if ((windowWidth / position) < 2){
                    element.firstChild.style.transform = ("translateX(0)")
                }
            })
        })
    }

    // section 1 World Clock
    let header = document.createElement("div")

    header.setAttribute("style", `
        position:relative;
        display:flex;
        justify-content:space-between;
        top:60px;
        width:100%;
        font-size:20px;
        margin-bottom:10px;
    `)
    let editButton = document.createElement("a")
    editButton.innerHTML = "Edit"
    editButton.setAttribute("style",`
        margin-left:10px;
        color:#ffac00;
        
    `)
    header.append(editButton)

    let addButton = document.createElement("a")
    addButton.innerHTML = "+"
    addButton.setAttribute("style", `
        margin-right:10px;
        color:#ffac00;
    `)
    header.append(addButton)

    let body = document.createElement("div")
    body.setAttribute("style", `
        position:relative;
        top:60px;
        height:calc(100% - 100px);
        overflow-y:auto;
    `)
    let title = document.createElement("div")
    title.innerHTML = "World Clock"
    title.setAttribute("style",`
        font-size:40px;
        margin:0 0 10px 10px;
        border-bottom: 1px solid #6d6d6d;
        padding-bottom:10px;
    `)

    let container = document.createElement("div")
    container.setAttribute("style", `
        margin:0 0 10px 10px;
        border-bottom: 1px solid #6d6d6d;
        padding-bottom:10px;
        display:flex;
        justify-content:end;
        align-items:center;
        height:50px;
        
    `)

    body.append(title)
    body.append(container)

    let footer = document.createElement("div")
    footer.setAttribute("style", `
        width:100%;
        height:10%;
        display:flex;
        position:absolute;
        bottom:0;
        color:#d9d9d9;
        background: rgba(0 ,0, 0, 0.7);
    `)
    // demo countrie time zone
    let ContainersElements = document.createElement("div")
    ContainersElements.setAttribute("style", `
        position:absolute;
        width:100%;
        height:70px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:black;
    `)
    let sectionleft = document.createElement("div")
    sectionleft.setAttribute("style", `
        padding-left:20px;
    `)
    let today = document.createElement("div")
    today.innerHTML = "Today"
    today.setAttribute("style", `
        color:#6d6d6d;
    `)
    sectionleft.append(today)

    let countrie = document.createElement("div")
    countrie.innerHTML = `${countries.countries[179].name}`
    countrie.setAttribute("style", `
        font-size:20px;
    `)
    sectionleft.append(countrie)

    let timezone = document.createElement("div")
    timezone.innerHTML = hour()
    timezone.setAttribute("style", `
        font-size:40px;
        margin-right:10px;
    `)
    setTimeout(() => {timezone.innerHTML = hour()}, 60*1000)

    let deleteButton = document.createElement("a")
    deleteButton.innerHTML = "Delete"
    deleteButton.setAttribute("style",`
        display:flex;
        padding:0 20px;
        align-items:center;
        background:red;
        height:70px;
    `)

    deleteButton.addEventListener("click",() =>{
        container.remove()
    })

    ContainersElements.append(sectionleft)
    ContainersElements.append(timezone)
    container.append(ContainersElements)
    container.append(deleteButton)
    countriesObjects.push(container)

    // adding new countrie 
    addButton.addEventListener("click",() => {
        externalwindow.innerHTML = ""
        externalwindow.style.display = "initial"
        setTimeout(() => {
            externalwindow.style.transform = ("translateY(0)")
        }, 10); 

        let windowtitle = document.createElement("div")
        windowtitle.innerHTML = "Choose a Country"
        windowtitle.setAttribute("style",`
            width:100%;
            margin-top:5px;
            text-align:center;
        `)
        externalwindow.append(windowtitle)

        let windowheader = document.createElement("div")
        windowheader.setAttribute("style", `
            display:flex;
            width:100%;
            align-items:center;
            justify-content:space-between;
        `)
        externalwindow.append(windowheader)

        let windowsearch = document.createElement("input")
        windowsearch.setAttribute("type", "text")
        windowsearch.setAttribute("placeholder", "Search")
        windowsearch.setAttribute("style", `
            width:75%;
            height:40px;
            margin:10px 0 0 10px;
            padding:0;
            text-align:start;
            padding-left:10px;
        `)
        windowheader.append(windowsearch)

        let windowclosebutton = document.createElement("a")
        windowclosebutton.innerHTML = "Cancel"
        windowclosebutton.setAttribute("style", `
            margin-right:10px;
            color:#ffac00;
        `)
        windowheader.append(windowclosebutton)

        windowclosebutton.addEventListener("click", () => {
            setTimeout(() => {
                externalwindow.style.display = "none"
            }, 500)
            externalwindow.style.transform = ("translateY(100%)")
        })

        let windowbody = document.createElement("div")
        windowbody.setAttribute("style", `
            width:100%;
            height:85%;
            margin-top:10px;
            overflow-y:auto;
        `)
        externalwindow.append(windowbody)
        
        countries.countries.forEach(element =>{
            let countrie = document.createElement("div")
            countrie.setAttribute("style", `
                    width:95%;
                    margin:10px;
                    padding:10px 0;
                    border-bottom:1px solid white;
                `)
            countrie.innerHTML = element.name
            windowbody.append(countrie)

            countrie.addEventListener("click", () =>{
                let newcontainer = document.createElement("div")
                newcontainer.setAttribute("style", `
                    margin:0 0 10px 10px;
                    border-bottom: 1px solid #6d6d6d;
                    padding-bottom:10px;
                    display:flex;
                    justify-content:end;
                    align-items:center;
                    height:50px;
                `)

                let ContainersElements = document.createElement("div")
                ContainersElements.setAttribute("style", `
                    position:absolute;
                    width:100%;
                    height:70px;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    background:black;
                `)

                let sectionleft = document.createElement("div")
                sectionleft.setAttribute("style", `
                    padding-left:20px;
                `)
                let today = document.createElement("div")
                today.innerHTML = "Today"
                today.setAttribute("style", `
                    color:#6d6d6d;
                `)
                sectionleft.append(today)

                let countrie = document.createElement("div")
                countrie.innerHTML = `${element.name}`
                countrie.setAttribute("style", `
                    font-size:20px;
                `)
                sectionleft.append(countrie)

                let timezone = document.createElement("div")
                timezone.innerHTML = hour()
                timezone.setAttribute("style", `
                    font-size:40px;
                    margin-right:10px;
                `)
                setTimeout(() => {timezone.innerHTML = hour()}, 60*1000)

                let deleteButton = document.createElement("a")
                deleteButton.innerHTML = "Delete"
                deleteButton.setAttribute("style",`
                    display:flex;
                    padding:0 20px;
                    align-items:center;
                    background:red;
                    height:70px;
                `)
                
                ContainersElements.append(sectionleft)
                ContainersElements.append(timezone)
                newcontainer.append(ContainersElements)
                newcontainer.append(deleteButton)
                body.append(newcontainer)

                countriesObjects.push(newcontainer)
                setTimeout(() => {
                    externalwindow.style.display = "none"
                }, 500)
                externalwindow.style.transform = ("translateY(100%)")

                deleteButton.addEventListener("click",() =>{
                    newcontainer.remove()
                })
            })
        })
    })
    editButton.addEventListener("click", () =>{
        if (editButton.innerHTML !== "Done") {
            editButton.innerHTML = "Done"
            countriesObjects.forEach(element =>{
                    let removeButtoncontainer = document.createElement("div")
                    removeButtoncontainer.setAttribute("style", `
                        display:flex;
                        margin-left:50px;
                        height:100%;
                        justify-content: center;
                        align-items:center;
                    `)
                    let removeButton= document.createElement("a")
                    removeButton.innerHTML = "-"
                    removeButton.setAttribute("style",`
                        display:flex;
                        justify-content: center;
                        align-items:center;
                        width:30px;
                        height:30px;
                        background:red;
                        color:white;
                        font-size:30px;
                        border-radius:50%;
                    `)
                removeButton.addEventListener("click", () => {
                    element.remove()
                })
                removeButtoncontainer.append(removeButton)
                element.firstChild.prepend(removeButtoncontainer)
            })
            
        } else {
            editButton.innerHTML = "Edit"
            countriesObjects.forEach(element =>{
                element.firstChild.firstChild.remove()
            })
        }
        
    })
    
    let image = document.createElement("div")
    image.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM18.9297 16C18.1887 17.2811 17.1026 18.3375 15.7986 19.0424C16.354 18.2618 16.9304 17.2476 17.354 16H18.9297ZM17.8458 14C17.9442 13.3752 18 12.7085 18 12C18 11.2915 17.9442 10.6248 17.8458 10H19.748C19.9125 10.6392 20 11.3094 20 12C20 12.6906 19.9125 13.3608 19.748 14H17.8458ZM15.8392 14C15.9417 13.3732 16 12.7063 16 12C16 11.2937 15.9417 10.6268 15.8392 10H13V14H15.8392ZM13 16H15.3321C14.7154 17.7728 13.7891 19.0922 13.0695 19.9291C13.0463 19.9322 13.0232 19.9352 13 19.9381V16ZM11 14V10H8.16083C8.0583 10.6268 8 11.2937 8 12C8 12.7063 8.0583 13.3732 8.16083 14H11ZM8.66794 16H11V19.9381C10.9768 19.9352 10.9537 19.9322 10.9305 19.9291C10.2109 19.0922 9.28456 17.7728 8.66794 16ZM6.15415 14C6.05577 13.3752 6 12.7085 6 12C6 11.2915 6.05577 10.6248 6.15415 10H4.25203C4.08751 10.6392 4 11.3094 4 12C4 12.6906 4.08751 13.3608 4.25204 14H6.15415ZM5.07026 16H6.64603C7.06963 17.2476 7.64599 18.2618 8.20142 19.0424C6.89738 18.3375 5.81131 17.2811 5.07026 16ZM18.9297 8H17.354C16.9304 6.75238 16.354 5.73825 15.7986 4.9576C17.1026 5.66246 18.1887 6.71895 18.9297 8ZM13 8H15.3321C14.7154 6.22723 13.7891 4.90784 13.0695 4.07087C13.0463 4.06778 13.0232 4.06479 13 4.06189V8ZM11 4.06189V8H8.66795C9.28456 6.22723 10.2109 4.90784 10.9305 4.07087C10.9537 4.06778 10.9768 4.06479 11 4.06189ZM8.20141 4.9576C7.64598 5.73825 7.06962 6.75238 6.64603 8H5.07026C5.8113 6.71895 6.89738 5.66246 8.20141 4.9576Z" clip-rule="evenodd"/></svg><br>
    World Clock
    `
    image.setAttribute("style", `
        width:100px;
        height:30px;
        font-size:10px;
        text-align:center;
    `)
    
    objectsSections.push({header:header, body:body, image:image})

    // adding header objects in parrent
    objectsSections.forEach(element => {
        if (element.header){
            parent.append(element.header)
        }
        parent.append(element.body)
        footer.append(element.image)
        
    })
    parent.append(footer)

}

export {clockApp}