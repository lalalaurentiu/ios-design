import countries from "../../countries.js"
import { hour } from "../utils/hour.js"

function clockApp(parent){
    parent.style.fontFamily = "san-serif"

    // objects for sections
    let objectsSections = []

    // footer
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

    let sections = {
        worldClock:function (){
            let worldClockContainer = document.createElement("div")
            worldClockContainer.setAttribute("style", `
                width:100%;
                height:100%;
                transform:translateX(100%);
                display:none;
            `)
            // reveal new window
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
            worldClockContainer.append(externalwindow)

            // objects for sections

            let countriesObjects = []
            countriesObjects.push = function () {
                Array.prototype.push.apply(this, arguments);
                countriesObjects.forEach(element => {
                    let windowWidth = window.innerWidth
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
            // -- --
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
            
            let image = document.createElement("a")
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

            worldClockContainer.append(header)
            worldClockContainer.append(body)
            parent.append(worldClockContainer)
            objectsSections.push({container:worldClockContainer, image:image})
        },
        alarm:function () {
            let alarms =[]
            alarms.push =  function (){
                Array.prototype.push.apply(this, arguments)
                let windowWidth = window.innerWidth
                alarms.forEach(element =>{
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

            let days = {
                0:{day:"Monday", short:"Mon", check:false},
                1:{day:"Tuesday", short:"Tue", check:false},
                2:{day:"Wednesday", short:"Wed", check:false},
                3:{day:"Thursday", short:"Thu", check:false},
                4:{day:"Friday", short:"Fri", check:false},
                5:{day:"Saturday", short:"Sat", check:false},
                6:{day:"Sunday", short:"Sun", check:false},
            }

            let alarmcontainer = document.createElement("div")
            alarmcontainer.setAttribute("style", `
                width:100%;
                height:100%;
                transform:translateX(100%);
                display:none;
            `)

            // reveal new window
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
            alarmcontainer.append(externalwindow)

            // section 2 alarm
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
            title.innerHTML = "Alarm"
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

            // demo alarm
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
            let hour = document.createElement("div")
            hour.innerHTML = "06:00"
            hour.setAttribute("style", `
                font-size:30px;
            `)
            sectionleft.append(hour)
            ContainersElements.append(sectionleft)

            let info = document.createElement("div")
            info.innerHTML = `Alarm, every day`
            info.setAttribute("style", `
                color:#6d6d6d;
            `)
            
            sectionleft.append(info)
            container.append(ContainersElements)

            let activateButton = document.createElement("a")
            activateButton.setAttribute("style",`
                display:flex;
                height:20px;
                border:1px solid white;
                border-radius:10px;
                width:40px;
                margin-right:20px;
            `)
            let activateButtonTrigger = document.createElement("div")
            activateButtonTrigger.setAttribute("style", `
                hight:100%;
                width:20px;
                background:white;
                border-radius:10px;
            `)
            activateButton.style.justifyContent = "start"
            activateButton.append(activateButtonTrigger)
            ContainersElements.append(activateButton)
            activateButton.addEventListener("click", () =>{
                if (activateButton.style.justifyContent == "start"){
                    activateButton.style.justifyContent = "end"
                    activateButton.style.background = "#13dc13"
                } else {
                    activateButton.style.justifyContent = "start"
                    activateButton.style.background = "initial"
                }
            })
            let deleteButton = document.createElement("a")
            deleteButton.innerHTML = "Delete"
            deleteButton.setAttribute("style",`
                display:flex;
                padding:0 20px;
                align-items:center;
                background:red;
                height:70px;
            `)
            container.append(deleteButton)
            deleteButton.addEventListener("click", () =>{
                container.remove()
            })
            alarms.push(container)
            // -- --

            // add new alarm
            addButton.addEventListener("click", () =>{
                externalwindow.innerHTML = ""
                externalwindow.style.display = "initial"
                setTimeout(() => {
                    externalwindow.style.transform = ("translateY(0)")
                }, 10); 
                let header = document.createElement("div")
                header.setAttribute("style", `
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    padding:20px 10px 0 10px;
                `)
                externalwindow.append(header)

                let cancelButton = document.createElement("a")
                cancelButton.innerHTML = "Cancel"
                cancelButton.setAttribute("style", `
                    color:#ffac00;
                `)
                header.prepend(cancelButton)
                cancelButton.addEventListener("click", () => {
                    externalwindow.style.transform = ("translateY(100%)")
                    setTimeout(() => {
                        externalwindow.style.display = "none"
                    }, 500)
                })

                let title = document.createElement("div")
                title.innerHTML = "Add Alarm"
                header.append(title)

                let savebutton = document.createElement("a")
                savebutton.innerHTML = "Save"
                savebutton.setAttribute("style", `
                    color:#ffac00;
                `)
                header.append(savebutton)

                let time = document.createElement("input")
                time.setAttribute("type", "time")
                time.setAttribute("value", "00:00")
                time.setAttribute("style", `
                    display:flex;
                    align-items:center;
                    justify-content:center;
                `)
                externalwindow.append(time)
                let optionsContainer = document.createElement("div")
                optionsContainer.setAttribute("style", `
                    width:100%;
                    background:#8a8a8ab3;
                `)
                externalwindow.append(optionsContainer)

                let alarmUtilsContainer = document.createElement("div")
                alarmUtilsContainer.setAttribute("style", `
                    width:95%;
                    margin:10px;
                    background:#8a8a8ab3;
                    border-radius:10px;
                    padding-bottom:10px;
                `)
                externalwindow.append(alarmUtilsContainer)
                // utilscontainer
                let utilsElementContainer = document.createElement("div")
                utilsElementContainer.setAttribute("style", `
                    position:absolute;
                    width:100%;
                    height:100%;
                    bottom:0;
                    background-color:#6d6d6d;
                    border-top-left-radius:10px;
                    border-top-right-radius:10px;
                    transform:translateX(100%);
                    transition: all 0.5s;
                    display:none;
                `)
                externalwindow.append(utilsElementContainer)
                // elements
                

                function createAlarmsElements(rightTitle, leftValue, func){
                    let element = document.createElement("div")
                    element.setAttribute("style", `
                        display:flex;
                        padding:10px 0 10px 10px;
                        border-bottom: 1px solid #b7b6b6b3;
                        margin-left:10px;
                        justify-content:space-between;
                    `)
                    alarmUtilsContainer.append(element)
                    let title = document.createElement("div")
                    title.innerHTML = `${rightTitle}`
                    element.append(title)

                    let rightSide = document.createElement("div")
                    rightSide.setAttribute("style", `
                        margin-right:10px;
                        display:flex;
                        align-items:center;
                    `)
                    element.append(rightSide)

                    let elementValue = document.createElement("div")
                    elementValue.innerHTML = `${leftValue}`
                    rightSide.append(elementValue)

                    let elementButton = document.createElement("div")
                    elementButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#b7b6b6b3" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    `
                    elementButton.setAttribute("style", `
                        margin-left:10px;
                    `)
                    elementButton.addEventListener("click", () =>{
                        utilsElementContainer.style.display = "initial"
                        setTimeout(() =>{
                            utilsElementContainer.style.transform = "translateX(0)"
                        },100)
                        func()
                    })
                    rightSide.append(elementButton)
                }

            // repeat function
                function repeat (){
                    utilsElementContainer.innerHTML = ""
                    let header = document.createElement("div")
                    header.setAttribute("style", `
                        width:50%;
                        display:flex;
                        align-items:center;
                    `)
                    let rightHeader = document.createElement("div")
                    rightHeader.setAttribute("style", `
                        color:#ffac00;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        margin:10px;
                    `)
                    rightHeader.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    Back
                    `
                    header.append(rightHeader)
                    
                    let leftHeader = document.createElement("div")
                    leftHeader.innerHTML = "Repeat"
                    leftHeader.setAttribute("style",`
                        position:relative;
                        left:50%;
                        transform:translateX(40%);
                    `)
                    header.append(leftHeader)
                    utilsElementContainer.append(header)

                    let container = document.createElement("div")
                    container.setAttribute("style", `
                        width:95%;
                        margin:30px 10px 10px 10px;
                        background:#8a8a8ab3;
                        border-radius:10px;
                        padding-bottom:10px;
                    `)
                    utilsElementContainer.append(container)

                    Object.entries(days).forEach(item =>{
                        let element = document.createElement("div")
                        element.setAttribute("style", `
                            display:flex;
                            padding:10px 0 10px 10px;
                            border-bottom: 1px solid #b7b6b6b3;
                            margin-left:10px;
                            justify-content:space-between;
                        `)
                        let left = document.createElement("div")
                        left.innerHTML = `Every ${item[1].day}`
                        element.append(left)

                        container.append(element)

                        let right = document.createElement("div")
                        right.setAttribute("style" , `
                                color:#ffac00;
                                margin-right:10px;
                            `)
                        element.append(right)

                        element.addEventListener("click", () =>{
                            if (item[1].check == false){
                                right.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            `
                                item[1].check = true
                            } else {
                                right.innerHTML = ""
                                item[1].check = false
                            }
                        })
                    })   
                    
                    rightHeader.addEventListener("click", () =>{
                        utilsElementContainer.style.transform = "translateX(100%)"
                        setTimeout(() =>{
                            utilsElementContainer.style.display = "none"
                        }, 500)
                        console.log(days)
                    })
                }
            // -- --

            // label function
                function label (){
                    utilsElementContainer.innerHTML = ""
                    let header = document.createElement("div")
                    header.setAttribute("style",`
                        padding:10px;
                        width:60%;
                        display:flex;
                        justify-content:space-between;
                    `)
                    utilsElementContainer.append(header)

                    let backButton = document.createElement("a")
                    backButton.setAttribute("style", `
                        display:flex;
                        align-items:center;
                        color:#ffac00;
                    `)
                    backButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        Back
                    `
                    backButton.addEventListener("click", () => {
                        utilsElementContainer.style.transform = "translateX(100%)"
                        setTimeout(() =>{
                            utilsElementContainer.style.display = "none"
                        }, 500)
                    })
                    header.append(backButton)

                    let headerTitle = document.createElement("div")
                    headerTitle.innerHTML = "Label"
                    header.append(headerTitle)

                    let alarmName = document.createElement("input")
                    alarmName.setAttribute("style",`
                        position:relative;
                        top:40%;
                        margin:auto;
                    `)
                    alarmName.value = "Alarm"
                    utilsElementContainer.append(alarmName)
                }
            // -- --
                
                function sound (){
                    utilsElementContainer.innerHTML = ""

                    let header = document.createElement("div")
                    header.setAttribute("style",`
                        padding:10px;
                        width:60%;
                        display:flex;
                        justify-content:space-between;
                    `)
                    utilsElementContainer.append(header)

                    let backButton = document.createElement("a")
                    backButton.setAttribute("style", `
                        display:flex;
                        align-items:center;
                        color:#ffac00;
                    `)
                    backButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        Back
                    `
                    backButton.addEventListener("click", () => {
                        utilsElementContainer.style.transform = "translateX(100%)"
                        setTimeout(() =>{
                            utilsElementContainer.style.display = "none"
                        }, 500)
                    })
                    header.append(backButton)

                    let headerTitle = document.createElement("div")
                    headerTitle.innerHTML = "Sound"
                    header.append(headerTitle)

                // this window is for all elements in sound container
                    let containerElements = document.createElement("div")
                    containerElements.setAttribute("style", `
                        position:absolute;
                        width:100%;
                        height:100%;
                        background-color:rgb(109, 109, 109);
                        top:0;
                        transform:translateX(100%);
                        transition:all 0.5s;
                        border-top-left-radius:10px;
                        border-top-right-radius:10px;
                        display:none;
                    `)
                    utilsElementContainer.append(containerElements)
                // -- --

                let body = document.createElement("div")
                utilsElementContainer.append(body)

                let vibrationContainer = document.createElement("div")
                vibrationContainer.setAttribute("style", `
                    margin:10px;
                    display:flex;
                    padding:10px;
                    background-color:#858585;
                    border-radius:10px;
                    justify-content:space-between;
                `)
                body.append(vibrationContainer)

                let vibrationTitle = document.createElement("div")
                vibrationTitle.innerHTML = "Vibration"
                vibrationContainer.append(vibrationTitle)

                let vibrationButton = document.createElement("a")
                vibrationButton.setAttribute("style", `
                    display:flex;
                    align-items:center;
                    color:#bcbcbc;
                `)
                vibrationButton.innerHTML = `
                    Default
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                `

                vibrationButton.addEventListener("click", () => {
                    containerElements.innerHTML = ""
                    containerElements.style.display = "initial"
                    setTimeout(() =>{
                        containerElements.style.transform = "translateX(0)"
                    }, 10)

                    let header = document.createElement("div")
                    header.setAttribute("style",`
                        padding:10px;
                        width:60%;
                        display:flex;
                        justify-content:space-between;
                    `)
                    containerElements.append(header)

                    let backButton = document.createElement("a")
                    backButton.setAttribute("style", `
                        display:flex;
                        align-items:center;
                        color:#ffac00;
                    `)
                    backButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        Sound
                    `
                    backButton.addEventListener("click", () => {
                        containerElements.style.transform = "translateX(100%)"
                        setTimeout(() =>{
                            containerElements.style.display = "none"
                        }, 500)
                    })
                    header.append(backButton)

                    let headerTitle = document.createElement("div")
                    headerTitle.innerHTML = "Vibration"
                    header.append(headerTitle)

                    let body = document.createElement("div")
                    body.setAttribute("style", `
                        height:90%;
                        overflow-y:auto;
                    `)
                    containerElements.append(body)

                // vibration
                    let checked = []
                    checked.push = function (){
                        Array.prototype.push.apply(this, arguments)
                        arguments[0].addEventListener("click", () => {
                            let check = document.createElement("div")
                            check.setAttribute("style", `
                                color:#ffac00;
                                margin-right:10px;
                            `)
                            check.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                </svg>
                            `
                            
                            checked.forEach (elem => {
                                
                                let target = elem.childNodes[1]
                                try {
                                    target.remove()
                                }catch{}
                                
                            })
                            arguments[0].append(check)
                        })
                    }

                    let synchronised = document.createElement("div")
                    synchronised.setAttribute("style", `
                        width:90%;
                        margin:10px;
                        padding:10px;
                        background-color:#858585;
                        border-radius:10px;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                    `)
                    synchronised.innerHTML = "Synchronised (Default)"
                    let check = document.createElement("div")
                    check.setAttribute("style", `
                        color:#ffac00;
                        margin-right:10px;
                    `)
                    check.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                        </svg>
                    `
                    synchronised.append(check)
                    checked.push(synchronised)
                    body.append(synchronised)

                    let standardVibrationContainer = document.createElement("div")
                    standardVibrationContainer.setAttribute("style", `
                        margin:30px 10px;
                    `)
                    body.append(standardVibrationContainer)

                    let standardVibrationTitle = document.createElement("div")
                    standardVibrationTitle.innerHTML = "STANDARD"
                    standardVibrationTitle.setAttribute("style", `
                        margin:0 0 10px 10px;
                    `)
                    standardVibrationContainer.append(standardVibrationTitle)

                    let standardElementsContainer = document.createElement("div")
                    standardElementsContainer.setAttribute("style", `
                        background-color:#858585;
                        padding:10px 0 10px 10px;
                        border-radius:10px;
                    `)
                    standardVibrationContainer.append(standardElementsContainer)

                    let standardElements ={
                        0:"Accent",
                        1:"Alert",
                        2:"Heartbeat",
                        3:"Quick",
                        4:"Rapid",
                        5:"S.O.S",
                        6:"Staccato",
                        7:"Symphony"
                    }

                    Object.entries(standardElements).forEach(item => {
                        let element = document.createElement("div")
                        element.setAttribute("style", `
                            padding:10px 0 10px 0px;
                            border-bottom:1px solid white;
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                        `)
                        element.innerHTML = item[1]
                        checked.push(element)
                        standardElementsContainer.append(element)
                    })
                    
                    let customElementContainer = document.createElement("div")
                    customElementContainer.setAttribute("style", `
                        margin:30px 10px;
                    `)
                    body.append(customElementContainer)

                    let customTitle = document.createElement("div")
                    customTitle.setAttribute("style", `
                        margin:0 0 10px 10px;
                    `)
                    customTitle.innerHTML = "CUSTOM"
                    customElementContainer.append(customTitle)

                    let customElemets = document.createElement("div")
                    customElemets.setAttribute("style", `
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        background-color:#858585;
                        padding:10px;
                        border-radius:10px;
                    `)
                    customElemets.innerHTML = `
                        Create New Vibration
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    `
                    customElementContainer.append(customElemets)

                    let noneVibration = document.createElement("div")
                    noneVibration.setAttribute("style", `
                        background-color:#858585;
                        padding:10px;
                        border-radius:10px;
                        margin:30px 10px;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                    `)
                    noneVibration.innerHTML = "None"
                    checked.push(noneVibration)
                    body.append(noneVibration)
                })

                vibrationContainer.append(vibrationButton)
            // -- --

            // store sounds
                let storeSoundContainer = document.createElement("div")
                body.append(storeSoundContainer)

                let storeSoundTitle = document.createElement("div")
                storeSoundTitle.setAttribute("style", `
                    margin:30px 0 5px 20px;
                `)
                storeSoundTitle.innerHTML = "STORE"
                storeSoundContainer.append(storeSoundTitle)

                let firstElement = document.createElement("div")
                firstElement.setAttribute("style", `
                    background-color:#858585;
                    padding:10px 0 10px 10px;
                    border-radius:10px;
                    margin:0 10px 0 10px;
                    color:#ffac00;
                `)
                firstElement.innerHTML = "Tone Store"
                storeSoundContainer.append(firstElement)
            // --

            // songs
                let songsContainer = document.createElement("div")
                body.append(songsContainer)

                let songsTitle = document.createElement("div")
                songsTitle.innerHTML = "SONGS"
                songsTitle.setAttribute("style", `
                    margin:30px 0 5px 20px;
                `)
                songsContainer.append(songsTitle)

                let songsElements = document.createElement("div")
                songsElements.setAttribute("style", `
                    background-color:#858585;
                    padding:10px;
                    border-radius:10px;
                    margin:0 10px 0 10px;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                `)
                songsContainer.append(songsElements)

                let songsElementTitle = document.createElement("div")
                songsElementTitle.setAttribute("style", `
                    margin-left:30px;
                `)
                songsElementTitle.innerHTML = "Pick a song"
                songsElements.append(songsElementTitle)

                let songsButton = document.createElement("a")
                songsButton.setAttribute("style", `
                    display:flex;
                    align-items:center;
                `)
                songsButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#b7b6b6b3" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                `
                songsElements.append(songsButton)

                let songsContainerElements = document.createElement("div")
                songsContainerElements.setAttribute("style", `
                    position:absolute;
                    top:0;
                    width:100%;
                    height:100%;
                    background-color:black;
                    z-index:7;
                    transform:translateY(100%);
                    transition:all 0.5s;
                    display:none;
                `)
                utilsElementContainer.append(songsContainerElements)
                let songsContainerButton = document.createElement("a")
                songsContainerButton.setAttribute("style", `
                    position:relative;
                    color:#ffac00;
                    display:flex;
                    justify-content:end;
                    top:10px;
                    right:10px;
                `)
                songsContainerButton.innerHTML = "Cancel"
                songsContainerButton.addEventListener("click", () =>{
                    songsContainerElements.style.transform = "translateY(100%)"
                    setTimeout(() =>{
                        songsContainerElements.style.display = "none"
                    }, 500)
                })
                songsContainerElements.append(songsContainerButton)

                let songsContainerHeader = document.createElement("div")
                songsContainerHeader.setAttribute("style", `
                    margin:20px 10px 0 10px;
                `)
                songsContainerElements.append(songsContainerHeader)

                let songsContainerHeaderTitle = document.createElement("div")
                songsContainerHeaderTitle.setAttribute("style", `
                    font-size:30px;
                `)
                songsContainerHeaderTitle.innerHTML = "Library"
                songsContainerHeader.append(songsContainerHeaderTitle)

                let songsContainerHeaderSearch = document.createElement("input")
                songsContainerHeaderSearch.setAttribute("placeholder", "Your Library")
                songsContainerHeaderSearch.setAttribute("style", `
                    margin:0;
                    width:95%;
                    height:40px;
                    text-align:left;
                    padding-left:10px;
                `)
                songsContainerHeader.append(songsContainerHeaderSearch)

                let songsContainerBody = document.createElement("div")
                songsContainerBody.setAttribute("style", `
                    position:relative;
                    top:20%;
                    padding:0 30px 0 30px;
                    text-align:center;
                `)
                songsContainerElements.append(songsContainerBody)

                let songsContainerBodyFirstElement = document.createElement("div")
                songsContainerBodyFirstElement.setAttribute("style", `
                    width:100%;
                    font-size:20px;
                `)
                songsContainerBodyFirstElement.innerHTML = "Download songs in the Apple Music app."
                songsContainerBody.append(songsContainerBodyFirstElement)

                let songsContainerBodySecondElement = document.createElement("div")
                songsContainerBodySecondElement.setAttribute("style", `
                    color:#858585;
                `)
                songsContainerBodySecondElement.innerHTML = "Only downloaded music can be used."
                songsContainerBody.append(songsContainerBodySecondElement)

                let songsContainerBodyButton = document.createElement("div")
                songsContainerBodyButton.setAttribute("style", `
                    position:relative;
                    width:85%;
                    height:50px;
                    background-color:#ffac00;
                    margin:10px 20px 0 20px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border-radius:10px;
                `)
                songsContainerBodyButton.innerHTML = "Open Apple Music"
                songsContainerBody.append(songsContainerBodyButton)

                songsButton.addEventListener("click", () => {
                    songsContainerElements.style.display = "initial"
                    setTimeout(() => {
                        songsContainerElements.style.transform = "translateY(0)"
                    },10)
                    
                })
            // -- --

            // Ringtones   
                let ringtonesContainer = document.createElement("div")
                body.append(ringtonesContainer)

                let ringtonesTitle = document.createElement("div")
                ringtonesTitle.setAttribute("style", `
                    margin:30px 0 5px 20px;
                `)
                ringtonesTitle.innerHTML = "RINGTONES"
                ringtonesContainer.append(ringtonesTitle)

            // -- --
                }

                createAlarmsElements("Repeat", "Never", repeat)
                createAlarmsElements("Label", "Alarm", label)
                createAlarmsElements("Sound", "Radar", sound)

                let element = document.createElement("div")
                    element.setAttribute("style", `
                        display:flex;
                        padding:10px 0 10px 10px;
                        border-bottom: 1px solid #b7b6b6b3;
                        margin-left:10px;
                        justify-content:space-between;
                    `)
                    alarmUtilsContainer.append(element)
                    let elementitle = document.createElement("div")
                    elementitle.innerHTML = `Snooze`
                    element.append(elementitle)
                    let activateButton = document.createElement("a")
                    activateButton.setAttribute("style",`
                        display:flex;
                        height:20px;
                        border:1px solid white;
                        border-radius:10px;
                        width:40px;
                        margin-right:20px;
                    `)
                    let activateButtonTrigger = document.createElement("div")
                    activateButtonTrigger.setAttribute("style", `
                        hight:100%;
                        width:20px;
                        background:white;
                        border-radius:10px;
                    `)
                    activateButton.style.justifyContent = "start"
                    activateButton.append(activateButtonTrigger)
                    element.append(activateButton)
                    activateButton.addEventListener("click", () =>{
                        if (activateButton.style.justifyContent == "start"){
                            activateButton.style.justifyContent = "end"
                            activateButton.style.background = "#13dc13"
                        } else {
                            activateButton.style.justifyContent = "start"
                            activateButton.style.background = "initial"
                        }
                    })
            })
            // -- --
            
            let image = document.createElement("a")
            image.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve"><path d="M22.598 22.684A10.46 10.46 0 0 0 25 16c0-5.799-4.701-10.5-10.5-10.5S4 10.201 4 16c0 2.539.902 4.868 2.402 6.684l-2.109 2.109a.999.999 0 1 0 1.414 1.414l2.109-2.109c1.816 1.5 4.144 2.402 6.684 2.402s4.868-.902 6.684-2.402l2.109 2.109a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-2.109-2.109zM14.5 25.5C9.253 25.5 5 21.247 5 16s4.253-9.5 9.5-9.5S24 10.753 24 16s-4.253 9.5-9.5 9.5z"/><path d="M14.5 26.5C8.71 26.5 4 21.79 4 16S8.71 5.5 14.5 5.5 25 10.21 25 16s-4.71 10.5-10.5 10.5zm0-19C9.813 7.5 6 11.313 6 16s3.813 8.5 8.5 8.5S23 20.687 23 16s-3.813-8.5-8.5-8.5z"/><path d="M2.685 11.953a12.38 12.38 0 01.898-2.026A3.474 3.474 0 013 8c0-1.93 1.57-3.5 3.5-3.5.712 0 1.374.216 1.927.583a12.38 12.38 0 012.026-.898A5.48 5.48 0 006.5 2.5 5.507 5.507 0 001 8a5.48 5.48 0 001.685 3.953zM15.5 17H10v-2h3.5V9.5h2zM20.573 5.083A3.474 3.474 0 0122.5 4.5C24.43 4.5 26 6.07 26 8c0 .712-.216 1.374-.583 1.927.359.642.656 1.321.898 2.026A5.48 5.48 0 0028 8c0-3.032-2.468-5.5-5.5-5.5a5.48 5.48 0 00-3.953 1.685c.705.243 1.384.54 2.026.898z"/></svg><br>
            Alarm
            `
            image.setAttribute("style", `
                width:100px;
                height:30px;
                font-size:10px;
                text-align:center;
            `)

            objectsSections.push({container:alarmcontainer, image:image})
            alarmcontainer.append(header)
            alarmcontainer.append(body)
            parent.append(alarmcontainer)
        }
    }
    
    
    sections.worldClock()
    sections.alarm()

    

    // adding container objects in parrent
    objectsSections.forEach((element, index) => {
        
        element.image.addEventListener("click", () =>{
            element.container.style.transform = "translateX(0)"
            element.container.style.display = "initial"
            
            for (let i = 0; i < objectsSections.length; i++) {
                if (i == index) {
                    objectsSections[i].image.style.color = "#ffac00"
                    continue}
                objectsSections[i].container.style.transform = "translateX(100%)"
                objectsSections[i].container.style.display = "none"
                objectsSections[i].image.style.color = "#d9d9d9"
            }
        })
        footer.append(element.image)
    })
    parent.append(footer)
    objectsSections[0].container.style.transform = "translateX(0)"
    objectsSections[0].container.style.display = "initial"
    objectsSections[0].image.style.color = "#ffac00"
}

export {clockApp}