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
                body.append(arguments[0])
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

            editButton.addEventListener("click", () =>{
                if (editButton.innerHTML !== "Done") {
                    editButton.innerHTML = "Done"
                    alarms.forEach(element =>{
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
                    alarms.forEach(element =>{
                        console.log(element)
                        element.firstChild.firstChild.remove()
                    })
                }
                
            })

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

            body.append(title)

        // create alarm
            function createAlarm(h,i, active){ //hour, info
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
                hour.innerHTML = `${h}` //"06:00"
                hour.setAttribute("style", `
                    font-size:30px;
                `)
                sectionleft.append(hour)
                ContainersElements.append(sectionleft)

                let info = document.createElement("div")
                info.innerHTML = `${i}`//`Alarm, every day`
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

                activateButton.style.justifyContent = `${active}`

                if (active == "end"){
                    activateButton.style.background = "#13dc13"
                }

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
            }
        // -- --

        // demo alarm
            createAlarm("06:00", `Alarm, every day`, "start")
        // -- --
            addButton.addEventListener("click", () =>{
                // add new alarm
                let values = {
                    hour:"00:00",
                    info:"Never",
                    name:"Alarm",
                    snooze:"start"
                }
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

                time.addEventListener("change", () =>{
                    values.hour = time.value
                })
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
                    overflow-y:auto;
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

                    let daysCount = 0
                    let daysname = ""

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
                        
                        Object.entries(days).forEach(item =>{
                            if (item[1].check == true){
                                daysCount ++
                                daysname = daysname + item[1].short + " "
                            }
                        })
                        if (daysCount == 7){
                            values.info = "Every day"
                        } else if(daysCount == 1){
                            values.info = `Every ${daysname}`
                        }else if(daysCount == 0){
                            values.info ="Never"
                        }else {
                            values.info = daysname
                        }
                        alarmUtilsContainer.childNodes[0].childNodes[1].childNodes[0].innerHTML = values.info
                        Object.entries(days).forEach(item =>{
                            item[1].check = false
                        })
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

                    backButton.addEventListener("click", () => {
                        utilsElementContainer.style.transform = "translateX(100%)"
                        setTimeout(() =>{
                            utilsElementContainer.style.display = "none"
                        }, 500)
                        
                        alarmUtilsContainer.childNodes[1].childNodes[1].childNodes[0].innerHTML = alarmName.value
                        values.name = alarmName.value
                    })
                }
            // -- --
                
                function sound (){
                    utilsElementContainer.innerHTML = ""

                    let header = document.createElement("div")
                    header.setAttribute("style",`
                        position:sticky;
                        top:0;
                        padding:10px;
                        width:calc(100% - 20px);
                        display:flex;
                        justify-content:space-between;
                        background-color: rgba(109, 109, 109, 0.8);
                        
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
                    headerTitle.setAttribute("style", `
                        position:relative;
                        right:50%;
                    `)
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
                        z-index:8;
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
                    utilsElementContainer.style.overflowY = "hidden"
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
                        utilsElementContainer.style.overflowY = "auto"
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
                    utilsElementContainer.style.overflowY = "auto"
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
                    utilsElementContainer.style.overflowY = "hidden"
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

                let ringtonesBody = document.createElement("div")
                ringtonesBody.setAttribute("style", `
                    margin:0 10px 10px 10px;
                    background-color:#858585;
                    border-radius:10px;
                `)
                ringtonesContainer.append(ringtonesBody)

                let ringtoneElements = []
                ringtoneElements.push = function (){
                    Array.prototype.push.apply(this, arguments)
                    ringtonesBody.append(arguments[0])
                    arguments[0].addEventListener("click", () =>{
                        let checked = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                            </svg>
                        `
                        ringtoneElements.forEach( elem =>{
                            elem.childNodes[0].innerHTML = ""
                        })
                        arguments[0].childNodes[0].innerHTML = checked
                        checkClassicringtones.innerHTML = ""
                        noneCheck.innerHTML = ""
                    })
                }

                let ringtonesBodyElement = document.createElement("div")
                ringtonesBodyElement.setAttribute("style", `
                    padding-left:10px;
                    display:flex;
                    align-items:center;
                `)

                let ringtonesBodyElementCheck = document.createElement("div")
                ringtonesBodyElementCheck.setAttribute("style", `
                    color: #ffac00;
                    width:50px;
                    height:20px;
                `)
                ringtonesBodyElementCheck.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                    </svg>
                `
                ringtonesBodyElement.append(ringtonesBodyElementCheck)

                let ringtonesBodyElementName = document.createElement("div")
                ringtonesBodyElementName.setAttribute("style", `
                    padding:10px;
                    border-bottom:1px solid white;
                    width:100%;
                `)
                ringtonesBodyElementName.innerHTML = "Radar (Default)"
                ringtonesBodyElement.append(ringtonesBodyElementName)

                ringtoneElements.push(ringtonesBodyElement)

                let ringtones = [
                    "Apex",
                    "Beacon",
                    "Bulletin",
                    "By The Seaside",
                    "Chimes",
                    "Circuit",
                    "Constellation",
                    "Cosmin",
                    "Crystals",
                    "Hillside",
                    "Illuminate",
                    "Night Owl",
                    "Opening",
                    "Playtime",
                    "Presto",
                    "Radiate",
                    "Reflection",
                    "Ripples",
                    "Sencha",
                    "Signal",
                    "Silk",
                    "Slow Rise",
                    "Stargaze",
                    "Summit",
                    "Twinkle",
                    "Uplift",
                    "Waves"
                ]

                ringtones.forEach(elem => {
                    let container = document.createElement("div")
                    container.setAttribute("style", `
                        padding-left:10px;
                        display:flex;
                        align-items:center;
                    `)
                    let check = document.createElement("div")
                    check.setAttribute("style", `
                        color: #ffac00;
                        width:50px;
                        height:20px;
                    `)
                    container.append(check)
                    let name = document.createElement("div")
                    name.setAttribute("style", `
                        padding:10px;
                        border-bottom:1px solid white;
                        width:100%;
                    `)
                    name.innerHTML = elem
                    container.append(name)
                    ringtoneElements.push(container)
                })
            // classic ringtones
                let classicringtones = document.createElement("div")
                classicringtones.setAttribute("style", `
                    padding-left:10px;
                    display:flex;
                    align-items:center;
                `)
                ringtonesBody.append(classicringtones)

                let checkClassicringtones = document.createElement("div")
                checkClassicringtones.setAttribute("style", `
                    color: #ffac00;
                    width:50px;
                    height:20px;
                `)
                classicringtones.append(checkClassicringtones)

                let classicringtoneselements = document.createElement("div")
                classicringtoneselements.setAttribute("style", `
                    padding:10px;
                    width:100%;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                `)
                classicringtones.append(classicringtoneselements)

                let classicringtoneselementsName = document.createElement("div")
                classicringtoneselementsName.innerHTML = "Classic"
                classicringtoneselements.append(classicringtoneselementsName)

                let classicringtoneselementsButton = document.createElement("div")
                classicringtoneselementsButton.setAttribute("style",`
                    margin-right:10px;
                    display:flex;
                    align-items:center;
                `)
                classicringtoneselementsButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#b7b6b6b3" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
       
                `
                classicringtones.append(classicringtoneselementsButton)

                classicringtoneselements.addEventListener("click", () => {
                    utilsElementContainer.style.overflowY = "hidden"
                    utilsElementContainer.scrollTo({top:0});
                    containerElements.innerHTML = ""
                    containerElements.style.display = "initial"
                    setTimeout(() =>{
                        containerElements.style.transform = "translateX(0)"
                    }, 10)

                    let header = document.createElement("div")
                    header.setAttribute("style", `
                        margin:10px;
                        width:50%;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                    `)
                    containerElements.append(header)

                    let headerButton = document.createElement("a")
                    headerButton.setAttribute("style", `
                        display:flex;
                        align-items:center;
                        color:#ffac00;
                    `)
                    headerButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        Sound
                    `
                    headerButton.addEventListener("click", () =>{
                        containerElements.style.transform = "translateX(100%)"
                        setTimeout(() =>{
                            utilsElementContainer.style.overflowY = "auto"
                            containerElements.style.display = "none"
                        }, 500)
                    })
                    header.append(headerButton)

                    let headerTitle = document.createElement("div")
                    headerTitle.innerHTML = "Classic"
                    header.append(headerTitle)

                    let body = document.createElement("div")
                    body.setAttribute("style", `
                        margin:0 10px 50px 10px;
                        background-color:#858585;
                        border-radius:10px;
                        height:90%;
                        overflow-y:auto;
                    `)
                    containerElements.append(body)

                    let ringtone = [
                        "Alarm",
                        "Ascending",
                        "Bark",
                        "Bell Tower",
                        "Blues",
                        "Boing",
                        "Crickets",
                        "Digital",
                        "Doorbell",
                        "Duck",
                        "Harp",
                        "Marimba",
                        "Motorcycle",
                        "Old Car Horn",
                        "Old Phone",
                        "Piano Riff",
                        "Pinball",
                        "Robot",
                        "Sci-Fi",
                        "Sonar",
                        "Strum",
                        "Timba",
                        "Time Passing",
                        "Trill",
                        "Xylophone"
                    ]

                    ringtone.forEach(elem => {
                        let container = document.createElement("div")
                        container.setAttribute("style", `
                            padding-left:10px;
                            display:flex;
                            align-items:center;
                        `)
                        let check = document.createElement("div")
                        check.setAttribute("style", `
                            color: #ffac00;
                            width:50px;
                            height:20px;
                        `)
                        container.append(check)
                        let name = document.createElement("div")
                        name.setAttribute("style", `
                            padding:10px;
                            border-bottom:1px solid white;
                            width:100%;
                        `)
                        name.innerHTML = elem
                        container.append(name)
                        body.append(container)
                    })
                    
                    body.childNodes.forEach(elem => {
                        let check = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                        </svg>
                        `
                        elem.addEventListener("click", () =>{
                            body.childNodes.forEach(elem => {
                                elem.childNodes[0].innerHTML = ""
                            })
                            elem.childNodes[0].innerHTML = check
                            classicringtoneselementsButton.innerHTML = `
                                ${elem.childNodes[1].innerHTML}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#b7b6b6b3" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            `
                            checkClassicringtones.innerHTML = check
                            ringtoneElements.forEach(elem => {
                                elem.childNodes[0].innerHTML = ""
                            })
                            noneCheck.innerHTML = ""
                        })
                    })
                })
            // -- --
            // -- --

                let noneSong = document.createElement("div")
                noneSong.setAttribute("style", `
                    margin: 20px 10px 10px 10px;
                    background-color: #858585;
                    border-radius: 10px;
                `)
                body.append(noneSong)

                let noneContainer = document.createElement("div")
                noneContainer.setAttribute("style", `
                    padding-left:10px;
                    display:flex;
                    align-items:center;
                `)
                noneSong.append(noneContainer)

                let noneCheck = document.createElement("div")
                noneCheck.setAttribute("style", `
                    color: #ffac00;
                    width:50px;
                    height:20px;
                `)
                noneContainer.append(noneCheck)
                let noneName = document.createElement("div")
                noneName.setAttribute("style", `
                    padding:10px;
                    width:100%;
                `)
                noneName.innerHTML = "None"
                noneContainer.append(noneName)

                noneContainer.addEventListener("click", () => {
                    let check = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                        </svg>
                        `
                    noneCheck.innerHTML = check

                    checkClassicringtones.innerHTML = ""
                    ringtoneElements.forEach(elem => {
                        elem.childNodes[0].innerHTML = ""
                    })
                })
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
                            values.snooze = "end"
                        } else {
                            activateButton.style.justifyContent = "start"
                            activateButton.style.background = "initial"
                            values.snooze = "start"
                        }
                    })

                savebutton.addEventListener("click", () =>{
                    externalwindow.style.transform = ("translateY(100%)")
                    setTimeout(() => {
                        externalwindow.style.display = "none"
                    }, 500); 
                    createAlarm(values.hour, `${values.name}, ${values.info}`, values.snooze)
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
        },
        stopwatch:function (){
            let stopwatchcontainer = document.createElement("div")
            stopwatchcontainer.setAttribute("style", `
                width:100%;
                height:100%;
                transform:translateX(100%);
                display:none;
            `)

        // timer
            let timercontainer = document.createElement("div")
            timercontainer.setAttribute("style", `
                position:relative;
                display:flex;
                align-items:center;
                justify-content:center;
                top:30px;
                width:100%;
                height:40%;
                font-size:5rem;
            `)
            stopwatchcontainer.append(timercontainer)

            let minute = document.createElement("div")
            minute.innerHTML = "00"
            let splitMinute = document.createElement("div")
            splitMinute.innerHTML = ":"
            let seconds = document.createElement("div")
            seconds.innerHTML = "00"
            let splitSeconds = document.createElement("div")
            splitSeconds.innerHTML = ","
            let miliseconds = document.createElement("div")
            miliseconds.innerHTML = "00"

            timercontainer.append(minute)
            timercontainer.append(splitMinute)
            timercontainer.append(seconds)
            timercontainer.append(splitSeconds)
            timercontainer.append(miliseconds)
        // -- --
        
        // buttons

            let containerButtons = document.createElement("div")
            containerButtons.setAttribute("style",`
                display:flex;
                align-items:center;
                justify-content:space-between;
                width:100%;
                height:20%;
                position:relative;
                font-size:1rem;
                border-bottom:1px solid rgba(109, 109, 109, 0.5); 
            `)
            stopwatchcontainer.append(containerButtons)

            let lapButton = document.createElement("a")
            lapButton.setAttribute("style", `
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius:50%;
                width:75px;
                height:75px;
                border:1px solid rgba(109, 109, 109, 0.5); 
                padding:2px;
                margin-left:20px;
            `)
            containerButtons.append(lapButton)

            let lapButtonName = document.createElement("span")
            lapButtonName.setAttribute("style",`
                display:flex;
                align-items:center;
                justify-content:center;
                width:100%;
                height:100%;
                background-color:rgba(109, 109, 109, 0.5);
                border-radius:50%;
                color:#cfcccc80;
            `)
            lapButtonName.innerHTML ="Lap"
            lapButton.append(lapButtonName)

            let anotherButtons = document.createElement("div")
            anotherButtons.setAttribute("style", `
                width:30px;
                display:flex;
                justify-content:space-between;
            `)
            anotherButtons.innerHTML = `
                <div style="width:10px;height:10px;background-color:white;border-radius:50%;"></div>
                <div style="width:10px;height:10px;background-color:rgba(109, 109, 109, 0.5);border-radius:50%;"></div>
            `
            containerButtons.append(anotherButtons)

            let startButtonStyle = `
                display:flex;
                align-items:center;
                justify-content:center;
                width:100%;
                height:100%;
                background-color:rgba(97, 138, 97, 0.5);
                border-radius:50%;
                color:#8edfa180;
            `

            let stopButtonStyle = `
                display:flex;
                align-items:center;
                justify-content:center;
                width:100%;
                height:100%;
                background-color: rgba(157, 67, 67, 0.5); 
                border-radius:50%;
                color:#d2754880;
            `
            
            let startButton = document.createElement("a")
            startButton.setAttribute("style", `
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius:50%;
                width:75px;
                height:75px;
                border:1px solid rgba(97, 138, 97, 0.5); 
                padding:2px;
                margin-right:20px;
            `)
            containerButtons.append(startButton)

            let startButtonName = document.createElement("span")
            startButtonName.setAttribute("style",startButtonStyle)
            startButtonName.innerHTML ="Start"
            startButton.append(startButtonName)
            
        // -- --

        // Lap container

            let lapContainer = document.createElement("div")
            lapContainer.setAttribute("style", `
                width:95%;
                height:28%;
                overflow-y:auto;
                padding:10px;
            `)
            stopwatchcontainer.append(lapContainer)

        // -- --

        // buttons functions
        let minutes = 0
        let second = 0
        let millisecond = 0

        let cron

        function start(m,s,ml,cm, cs, cml) {
            pause();
            cron = setInterval(() => { timer(m,s, ml,cm, cs, cml); }, 10);
          }

          function pause() {
            clearInterval(cron);
          }

        function timer(m,s,ml, cm, cs, cml) {
            if ((millisecond += 1) == 99) {
              millisecond = 0;
              second++;
            }
            if (second == 60) {
              second = 0;
              minutes++;
            }
            m.innerHTML = returnData(minutes)
            s.innerHTML = returnData(second)
            ml.innerHTML = returnData(millisecond)
            cm.innerHTML = returnData(minutes)
            cs.innerHTML = returnData(second)
            cml.innerHTML = returnData(millisecond)
        }

        function returnData(input) {
            return input >= 10 ? input : `0${input}`
          }

        let lapIndex = 0
        let lapNameIndex = 1

        let element = document.createElement("div")
        element.setAttribute("style",`
            width:100%;
            display:flex;
            justify-content:space-between;
        `)
        let lapName = document.createElement("div")
        lapName.innerHTML = `Lap ${lapNameIndex}`

        element.append(lapName)

        let cronElement = document.createElement("div")
        cronElement.setAttribute("style", `
            display:flex;
        `)

        let cronminute = document.createElement("div")
        cronminute.innerHTML = "00"
        let cronsplitMinute = document.createElement("div")
        cronsplitMinute.innerHTML = ":"
        let cronseconds = document.createElement("div")
        cronseconds.innerHTML = "00"
        let cronsplitSeconds = document.createElement("div")
        cronsplitSeconds.innerHTML = ","
        let cronmiliseconds = document.createElement("div")
        cronmiliseconds.innerHTML = "00"

        startButton.addEventListener("click", () => {
            let lastElements = lapContainer.childNodes
            let copyElements = []
            lastElements.forEach(elem  =>{
                copyElements.push(elem)
            })
            lapContainer.innerHTML = ""
            copyElements.forEach(elem => {
                lapContainer.prepend(elem)
            })

            cronElement.append(cronminute)
            cronElement.append(cronsplitMinute)
            cronElement.append(cronseconds)
            cronElement.append(cronsplitSeconds)
            cronElement.append(cronmiliseconds)

            element.append(cronElement)


            if (startButtonName.innerHTML == "Start"){
                startButtonName.innerHTML = "Stop"
                startButtonName.setAttribute("style",stopButtonStyle)
                startButton.style.border = "1px solid rgba(157, 67, 67, 0.5)"
                
                lapIndex++
                if (lapIndex > 1){
                    lapButtonName.innerHTML = "Lap"
                }
                lapContainer.prepend(element)
                start(minute, seconds, miliseconds,cronminute, cronseconds, cronmiliseconds)


            }else {
                startButtonName.innerHTML = "Start"
                startButtonName.setAttribute("style",startButtonStyle)
                startButton.style.border = "1px solid rgba(97, 138, 97, 0.5)"
                pause()
                lapButtonName.innerHTML = "Reset"
                lapContainer.prepend(element)
                
            }
            
        })

        lapButton.addEventListener("click", () =>{
            if(lapButtonName.innerHTML == "Reset"){
                lapContainer.innerHTML = ""
                minute.innerHTML = "00"
                splitMinute.innerHTML = ":"
                seconds.innerHTML = "00"
                splitSeconds.innerHTML = ","
                miliseconds.innerHTML = "00"

                minutes = 0
                second = 0
                millisecond = 0

                lapNameIndex = 1
                lapName.innerHTML = `Lap ${lapNameIndex}`
            }else {
                
                let element = document.createElement("div")
                element.setAttribute("style",`
                    width:100%;
                    display:flex;
                    justify-content:space-between;
                `)
                let newlapName = document.createElement("div")
                newlapName.innerHTML = `Lap ${lapNameIndex}`

                element.append(newlapName)

                let cronElement = document.createElement("div")
                cronElement.setAttribute("style", `
                    display:flex;
                `)
                let cronminute = document.createElement("div")
                cronminute.innerHTML = returnData(minutes)
                let cronsplitMinute = document.createElement("div")
                cronsplitMinute.innerHTML = ":"
                let cronseconds = document.createElement("div")
                cronseconds.innerHTML = returnData(second)
                let cronsplitSeconds = document.createElement("div")
                cronsplitSeconds.innerHTML = ","
                let cronmiliseconds = document.createElement("div")
                cronmiliseconds.innerHTML = returnData(millisecond)

                cronElement.append(cronminute)
                cronElement.append(cronsplitMinute)
                cronElement.append(cronseconds)
                cronElement.append(cronsplitSeconds)
                cronElement.append(cronmiliseconds)

                element.append(cronElement)
                lapContainer.append(element)
                lapNameIndex++
                lapName.innerHTML = `Lap ${lapNameIndex}`
                
                
            }
        })

        // -- --
            let image = document.createElement("a")
            image.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-stopwatch-fill" viewBox="0 0 16 16">
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"/>
                </svg>
                <br>
                StopWatch
            `
            image.setAttribute("style", `
                width:100px;
                height:30px;
                font-size:10px;
                text-align:center;
            `)
            objectsSections.push({container:stopwatchcontainer, image:image})
            parent.append(stopwatchcontainer)
        },
        timer:function(){
        // timer
            let timerContainer = document.createElement("div")
            timerContainer.setAttribute("style", `
                width:100%;
                height:100%;
                transform:translateX(100%);
                display:none;
            `)

            let timer = document.createElement("div")
            timer.setAttribute("style", `
                position:relative;
                top:30px;
                width:100%;
                height:40%;
                display:flex;
                align-items:center;
                justify-content:space-between;
            `)
            timerContainer.append(timer)

            function timerElements(parent, index,timeElement){
                let container = document.createElement("div")
                container.setAttribute("style", `
                    margin:10px;
                    display:flex;
                    align-items:center;
                `)
                parent.append(container)

                let select = document.createElement("select")
                select.setAttribute("style",`
                    background-color:rgba(109,109,109,0.2);
                    color:white;
                    border:none;
                    border-radius:5px;
                `)
                select.setAttribute("name",`${timeElement}`)
                container.append(select)

                let label = document.createElement("label")
                label.innerHTML = `${timeElement}`
                container.append(label)

                for (let i = 0;i <= index; i++){
                    let element = document.createElement("option")
                    element.setAttribute("value",i)
                    element.innerHTML = i
                    select.append(element)
                }
            }

            timerElements(timer, 24,"Hours")
            timerElements(timer, 59,"Minutes")
            timerElements(timer, 59,"Seconds")
        // -- --

        // buttons

        let containerButtons = document.createElement("div")
        containerButtons.setAttribute("style",`
            display:flex;
            align-items:center;
            justify-content:space-between;
            width:100%;
            height:20%;
            position:relative;
            font-size:1rem;
        `)
        timerContainer.append(containerButtons)

        let cancelButton = document.createElement("a")
        cancelButton.setAttribute("style", `
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:50%;
            width:75px;
            height:75px;
            border:1px solid rgba(109, 109, 109, 0.5); 
            padding:2px;
            margin-left:20px;
        `)
        containerButtons.append(cancelButton)

        let cancelButtonName = document.createElement("span")
        cancelButtonName.setAttribute("style",`
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100%;
            background-color:rgba(109, 109, 109, 0.5);
            border-radius:50%;
            color:#cfcccc80;
        `)
        cancelButtonName.innerHTML ="Cancel"
        cancelButton.append(cancelButtonName)

        let startButtonStyle = `
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100%;
            background-color:rgba(97, 138, 97, 0.5);
            border-radius:50%;
            color:#8edfa180;
        `

        let stopButtonStyle = `
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100%;
            background-color: rgba(157, 67, 67, 0.5); 
            border-radius:50%;
            color:#d2754880;
        `
        
        let startButton = document.createElement("a")
        startButton.setAttribute("style", `
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:50%;
            width:75px;
            height:75px;
            border:1px solid rgba(97, 138, 97, 0.5); 
            padding:2px;
            margin-right:20px;
        `)
        containerButtons.append(startButton)

        let startButtonName = document.createElement("span")
        startButtonName.setAttribute("style",startButtonStyle)
        startButtonName.innerHTML ="Start"
        startButton.append(startButtonName)
        // -- --
        
        // end timer

        let timerEndContainer = document.createElement("div")
        timerEndContainer.setAttribute("style", `
            margin:10px;
            display:flex;
            padding:10px;
            background-color:#858585;
            border-radius:10px;
            justify-content:space-between;
        `)
        
        timerContainer.append(timerEndContainer)

        let timerEndContainerTitle = document.createElement("div")
        timerEndContainerTitle.innerHTML = "When Timer Ends"
        timerEndContainer.append(timerEndContainerTitle)

        let timerEndContainerButton =  document.createElement("a")
        timerEndContainerButton.setAttribute("style", `
            display:flex;
            align-items:center;
            color:#bcbcbc;
        `)
        timerEndContainerButton.innerHTML = `
            Radar (Default)
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        `
        timerEndContainer.append(timerEndContainerButton)
        // -- --
            let image = document.createElement("a")
            image.innerHTML = `
                <svg width="30" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 199.328 199.328" style="enable-background:new 0 0 199.328 199.328;" xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <g>
                                    <path style="fill:currentColor;" d="M99.664,0h-4.066v39.149h8.131V8.228c48.594,2.144,87.456,42.338,87.456,91.436
                                        c0,50.473-41.053,91.533-91.522,91.533S8.142,150.136,8.142,99.664c0-20.657,6.707-40.144,19.412-56.363l-6.413-5.018
                                        C7.308,55.952,0,77.178,0,99.664c0,54.957,44.714,99.664,99.664,99.664c54.957,0,99.664-44.703,99.664-99.664
                                        C199.328,44.714,154.621,0,99.664,0z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path style="fill:currentColor;" d="M85.953,97.119c-0.497,1.657-0.748,3.135-0.748,4.542c0,8.808,7.183,15.98,15.99,15.98
                                        c8.808,0,15.98-7.172,15.98-15.98s-7.172-15.99-15.98-15.99c-1.668,0-3.368,0.308-5.218,0.952l-0.816,0.286L55.823,59.255
                                        l30.395,36.984L85.953,97.119z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <br>
                Timer
            `
            image.setAttribute("style", `
                width:100px;
                height:30px;
                font-size:10px;
                text-align:center;
            `)
            objectsSections.push({container:timerContainer, image:image})
            parent.append(timerContainer)
        }
    }
    
    
    sections.worldClock()
    sections.alarm()
    sections.stopwatch()
    sections.timer()

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