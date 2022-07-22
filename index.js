import {hour} from "./phone/utils/hour.js"
import {safariapp} from "./phone/apps/safariapp.js"
import {notesapp} from "./phone/apps/notesapp.js"
import {filesApp} from "./phone/apps/filesapp.js"
import {clockApp} from "./phone/apps/clockapp.js"
import {notworking} from "./phone/apps/notworkingapp.js"
import {loading} from "./phone/utils/loading.js"


// Loading Bar
let startLoading = 0
let main = document.getElementById("main")
let progresBarElement = document.getElementById('progresBar')
let loadingElements = document.getElementById('loading')
let loadingScreen = document.getElementById('screen')
let header = document.getElementById("header")


let screenHeight = window.innerHeight
let screenWidth = window.innerWidth

if(window.innerWidth > 1024){
    // screenHeight = 0
    // screenWidth = 0
    // let desktop = document.createElement("div")
    // desktop.setAttribute("style", `
    //     width:100%;
    //     height:100%;
    //     position:absolute;
    //     background-color:white;
    //     z-index:7;
    //     display:flex;
    //     justify-content:center;
    //     align-items:center;
    // `)
    // let gearContainer = document.createElement("div")
    // gearContainer.setAttribute("style",`
    //     text-align:center;
    // `)
    // desktop.append(gearContainer)

    // let gear = document.createElement("img")
    // gear.setAttribute("id", "gear")
    // gear.setAttribute("src", "icons/gear.svg")
    // gear.setAttribute("style", `
    //     width:300px;
    //     height:300px;
    // `)
    // gearContainer.append(gear)

    // let gear2 = document.createElement("img")
    // gear2.setAttribute("id", "gear2")
    // gear2.setAttribute("src", "icons/gear.svg")
    // gear2.setAttribute("style", `
    //     width:300px;
    //     height:300px;
    // `)
    // gearContainer.append(gear2)

    // let message = document.createElement("div")
    // message.innerHTML = "Desktop version under construction <br> Use desktop phone emulator"
    // message.setAttribute("style", `
    //     position:relative;
    //     top:50px;
    //     align-self:center;
    //     font-size:50px
    //     `)

    // gearContainer.append(message)
    // main.prepend(desktop)

    window.addEventListener("resize", function () {
        if (this.window.innerHeight > screenHeight + 1){
            this.location.reload(true)
        } else if (this.window.innerWidth > screenWidth + 1 || this.window.innerWidth < screenWidth - 1 ){
            this.location.reload(true)
        }
    })
    
    loadingScreen.style.height = `${screenHeight}px`
    loadingScreen.style.maxWidth = `${screenWidth}px`
    loadingElements.style.height = `${screenHeight}px`

    // header desktop
    header.innerHTML = ""

    let leftheaderapp = document.createElement("div")
    leftheaderapp.setAttribute("style", `
        display:flex;
        
    `)
    header.append(leftheaderapp)

    loading(startLoading,screenWidth, loadingElements, loadingScreen, progresBarElement, header)

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
                    transform:translateY(60%);
                    background:rgba(0, 49, 95, 0.5);
                    padding:10px;
                    display:none;
                    border-radius:10px;
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
                console.log(appelements.style.display)
            })
        }
    }

    let headerapps = [
        {
            name:`<svg xmlns="http://www.w3.org/2000/svg" whidth=20 height=20 fill="white" data-name="Layer 1" viewBox="0 0 24 24"><path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"/></svg>`,
            elements:[["<span>About This Mac</span>", "<span></span>", "border-bottom:1px solid white;"], 
                        ["<span>System Preferences...</span>", "<span></span>"],
                        ["<span>App Store...</span>", "<span style='padding:2px 5px 2px 5px;background:rgba(2, 80, 153, 0.5);border-radius:10px;'>5 updates</span>", "border-bottom:1px solid white;"],
                        ["<span>Recent Items</span>", `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>`,
                        "border-bottom:1px solid white;"],
                        ["<span>Force Quit...</span>",`<span style="color:white;">
                            <img width=20 height=20 src="./mac-icons/mac-option-command.svg">
                            <img width=20 height=20 src="./mac-icons/mac-command.svg">
                        </span>`,
                        "border-bottom:1px solid white;"],
                        ["<span>Sleep</span>", "<span></span>"],
                        ["<span>Restart...</span>", "<span></span>"],
                        ["<span>Shut Down</span>", "<span></span>", "border-bottom:1px solid white;"],
                        ["<span>Lock Screen</span>",`<span style="color:white;">
                            <img width=20 height=20 src="./mac-icons/mac-control-command.svg">
                            <img width=20 height=20 src="./mac-icons/mac-command.svg">
                            <span style="display:inline-block;transform:translateY(-5px)">Q</span>
                        </span>`],
                        ["<span>Log Out</span>",`<span style="color:white;">
                            <img width=20 height=20 src="./mac-icons/mac-shift-command.svg">
                            <img width=20 height=20 src="./mac-icons/mac-command.svg">
                            <span style="display:inline-block;transform:translateY(-5px)">Q</span>
                        </span>`],
                    ]
        },
        {
            name:"Finder",
            elements:[
                ["<span>About Finder</span>", "<span></span>", "border-bottom:1px solid white;"], 
                ["<span>Preferences...</span>", 
                `<span>
                    <img width=20 height=20 src="./mac-icons/mac-command.svg">
                    <span style="display:inline-block;transform:translateY(-5px)">,</span>
                </span>`, 
                "border-bottom:1px solid white;"],
                ["<span>Empty Bin...</span>", 
                `<span>
                    <img width=20 height=20 src="./mac-icons/mac-shift-command.svg">
                    <img width=20 height=20 src="./mac-icons/mac-command.svg">
                    <img width=20 height=20 src="./mac-icons/mac-delete-command.svg">
                </span>`, 
                "border-bottom:1px solid white;"],
                ["<span>Services</span>", `<span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span>`,
                "border-bottom:1px solid white;"],
                ["<span>Hide Finders</span>", 
                `<span>
                    <img width=20 height=20 src="./mac-icons/mac-command.svg">
                    <span style="display:inline-block;transform:translateY(-5px)">H</span>
                </span>`],
                ["<span>Hide Others</span>", 
                `<span>
                    <img width=20 height=20 src="./mac-icons/mac-option-command.svg">
                    <img width=20 height=20 src="./mac-icons/mac-command.svg">
                    <span style="display:inline-block;transform:translateY(-5px)">H</span>
                </span>`],
                ["<span>Show All</span>", "<span></span>"]
            ]
        },
        {
            name:"File",
            elements:[["<span>In progress...</span>", "<span></span>"],]
        },  
        {
            name:"View",
            elements:[["<span>In progress...</span>", "<span></span>"],]
        },    
        {
            name:"Go",
            elements:[["<span>In progress...</span>", "<span></span>"],]
        },
        {
            name:"Window",
            elements:[["<span>In progress...</span>", "<span></span>"],]
        },
        {
            name:"Help",
            elements:[["<span>In progress...</span>", "<span></span>"],]
        },
    ]

    headerapps.forEach(element => {
        const app = new HeaderApp(leftheaderapp, element.name)
        app.containerSelf(element.elements)
    })
}else {
    loading(startLoading,screenWidth, loadingElements, loadingScreen, progresBarElement)

    window.addEventListener("resize", function () {
        if (this.window.innerHeight > screenHeight + 20){
            this.location.reload(true)
        } else if (this.window.innerWidth > screenWidth + 20 || this.window.innerWidth < screenWidth - 20 ){
            this.location.reload(true)
        }
    })
    
    loadingScreen.style.height = `${screenHeight}px`
    loadingScreen.style.maxWidth = `${screenWidth}px`
    loadingElements.style.height = `${screenHeight}px`
    header.style.width = `calc(${screenWidth}px - 10px)`
// header
    // hour and minutes
    let time = document.getElementById("time")
    
    
    
    time.innerHTML = hour()
    setInterval(() => {time.innerHTML = hour()}, 60 * 1000)

    // signal
    let bateryLine = [...document.getElementsByClassName("signal-line")]
        
        function widthBaterLine(classElement){
            let height = 0
            classElement.forEach(element => {
                height += 25
                element.style.height =`${height}%`
                }
            )
        }

        function blinkLine(classElement){
            classElement.forEach(element => {
                element.style.backgroundColor = "rgba(177, 177, 177, 0.3)"
            })
            let lines = Math.floor(Math.random() * classElement.length)
            console.log(`"signal" : ${lines + 1} lines`)
            for (let i = lines;i >= 0; i--){
                classElement[i].style.backgroundColor = "white";
            }
        }
    widthBaterLine(bateryLine)
    blinkLine(bateryLine)
    
    let blinkInterval = Math.floor(Math.random() * 50)+10
    setInterval(() =>{blinkLine(bateryLine)}, blinkInterval * 1000)

    // wifi-signal
    let wifiLine = [...document.getElementsByClassName("wifi-line")]

    function styleWifiLine(classElement){
        let width = 100
        let translate = 90
        let borderRadius = 50
        classElement.forEach((element, index) => {
            
            width -= 33
            element.style.width =`${width}%`
            element.style.borderRadius = `${borderRadius}%`
            borderRadius -= 10
            if (index === 1){
                element.style.transform = `translateY(-${translate}%)`
                translate += 90
            } else if (index === 2) {
                element.style.transform = `translateY(-${translate}%)`
            }
            
            }
        )
    }

    function WifiBlinkLine(classElement,){
        classElement.forEach(element => {
            element.style.borderTopColor = "rgba(177, 177, 177, 0.3)"
        })
        let lines = Math.floor(Math.random() * classElement.length)
        console.log(`"wifi" : ${classElement.length - lines} lines`)
        for (let i = lines;i < classElement.length; i++){
            classElement[i].style.borderTopColor = "white";
        }
    }
    styleWifiLine(wifiLine)
    WifiBlinkLine(wifiLine)
    setInterval(() =>{WifiBlinkLine(wifiLine)}, 60 * 1000)

    // battery
    let batteryWidh = 99
    function batteryDischarger(){
        let discharger = document.getElementById("battery-cell")
        
        setInterval(() =>{
            discharger.style.width = `${batteryWidh}%`;
            batteryWidh -= 1;
            console.log(`"battery" : ${batteryWidh} porcent`)
        }, 100 * 100)
    }

    batteryDischarger()

    // menu icons
    let parrent = document.getElementById("menuicons")
    let parrentHeight = (screenHeight / 100) * 10 
    let parrentWidth = (screenWidth /100) * 90

    parrent.style.height = `${parrentHeight}px`
    parrent.style.width = `${parrentWidth}px`

    
    
    let openedApplication = 0

    class Aplication {
        app = document.createElement("div")
        constructor(element, name, cls, img){
            this.element = element
            this.name = name
            this.cls = cls
            this.img = img
        }
        containerSelf(){
            this.app.setAttribute("id", this.name)
            this.app.setAttribute("class", this.cls)
            this.app.setAttribute(
                "style", `
                    width:50px;
                    height:50px;
                    background-image:url(${this.img});
                    background-repeat:no-repeat;
                `
            )
            
            this.element.append(this.app)
        }
        oppenappSelf(translate, appfunction){
            this.openapp = () =>{
                appfunction(this.app)
                this.closeButtonSelf()
                this.app.removeAttribute("style")
                this.app.setAttribute(
                    "style",
                    `
                    position: absolute;
                    width: ${screenWidth}px;
                    height: ${screenHeight}px;
                    top:0;
                    transform: translateY(${translate});
                    background-color: black;
                    z-index:5;
                    transition: all 0.5s;
                    color:white;
                    `
                )
                openedApplication = 1
                this.app.removeEventListener("click", this.openapp)
            }
            this.app.addEventListener("click", this.openapp)
            
        }
        closeButtonSelf(){
            let closeButton = document.createElement("div")
            closeButton.setAttribute(
            "style",
            `   
                position: absolute;
                bottom: 0;
                width: 130px;
                height: 7px;
                background-color: white;
                text-align: center;
                left: 50%;
                transform:translateX(-50%);
                margin-bottom: 5px;
                border-radius: 5px;
                z-index:6;
            `
        )
        this.app.append(closeButton)
        this.scrollCloseSelf(closeButton)

        }

        scrollCloseSelf(element){
            // let position = 0
            element.addEventListener("touchmove",pos => {
                
                let position = pos.touches[0].clientY;
                this.app.style.height = `${position}px`
                
                if (position < 700) {
                    this.app.removeAttribute("style")
                    this.app.setAttribute(
                    "style", `
                        width:50px;
                        height:50px;
                        background-image:url(${this.img});
                        background-repeat:no-repeat;
                        transition: all 0.5s;
                    `
                )
                    element.remove()
                    this.app.innerHTML = ""
                    openedApplication = 0
                    this.app.addEventListener("click", this.openapp)
                } 
                
            })
            element.addEventListener("touchend", pos =>{
                let position = pos.changedTouches[0].clientY;
                if (position > 700){
                    this.app.style.height = `${screenHeight}px`
                    this.app.style.transition = "all 0.5s"
                    openedApplication = 1
                }
                
            })
        
    }

    }
    const imessage = new Aplication(parrent,"iMessage", "aplication", "icons/ios-message.svg")
    const appstore = new Aplication(parrent, "appstore", "aplication", "icons/app-store.svg")
    const contacts = new Aplication(parrent, "contacts", "aplication", "icons/contacts.svg")
    const setting = new Aplication(parrent, "settings", "aplication", "icons/settings.svg")

    

    imessage.containerSelf()
    imessage.oppenappSelf(`calc(-${screenHeight}px + ${parrentHeight}px  + ${(screenHeight / 100) * 2}px)`,notworking)

    appstore.containerSelf()
    appstore.oppenappSelf(`calc(-${screenHeight}px + ${parrentHeight}px  + ${(screenHeight / 100) * 2}px)`,notworking)

    contacts.containerSelf()
    contacts.oppenappSelf(`calc(-${screenHeight}px + ${parrentHeight}px  + ${(screenHeight / 100) * 2}px)`,notworking)

    setting.containerSelf()
    setting.oppenappSelf(`calc(-${screenHeight}px + ${parrentHeight}px  + ${(screenHeight / 100) * 2}px)`,notworking)
  
    // left-side
    let leftSide = document.getElementById("left-side")
    leftSide.style.height = `${screenHeight}px`
    leftSide.style.width = `${screenWidth}px`

    function scrollLeftSidesMenus(screen, element){
        let input = document.createElement("input")
        input.setAttribute("placeholder","Search")
        element.append(input)

        let images = document.createElement("div")
        images.setAttribute("id", "left-side-images")
        element.append(images)

        // location api
        let position = document.createElement("div")
        position.setAttribute("id","left-side-position")
        let mapContainer = document.createElement("div")
        mapContainer.setAttribute("id", "left-side-map")
        position.append(mapContainer)
        
        element.append(position)
        
        let map
        function initMap(){
            const coords = { lat: 44.983, lng: 24.983 };
            map = new google.maps.Map(document.getElementById("left-side-map"), {
                center: coords,
                zoom: 8,
                type: "ROADMAP"
              })
        }
        initMap()

        let elements = document.createElement("div")
        elements.setAttribute("id","left-side-elements")
        let elementsMenu = document.createElement("div")
        elementsMenu.setAttribute("id", "left-side-elementsMenu")
        let phoneElement = document.createElement("div")
        phoneElement.setAttribute("id","left-side-phoneElement")
        let phoneImg = document.createElement("div")
        phoneImg.setAttribute("style" ,`
        position:absolute;
            width:40px;
            height:40px;
            margin-top:20px;
            margin-left:20px;
        `)
        phoneImg.innerHTML = `
        <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="iphoneIconTitle" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="white" color="#000000"> <title id="iphoneIconTitle">iPhone</title> <path d="M18,3 L18,21 C18,21.5522847 17.5522847,22 17,22 L7,22 C6.44771525,22 6,21.5522847 6,21 L6,3 C6,2.44771525 6.44771525,2 7,2 L17,2 C17.5522847,2 18,2.44771525 18,3 Z"/> <polygon points="14 2 14 3 10 3 10 2"/> </svg>
        `
        elementsMenu.append(phoneImg)
        let batteryPorcent = document.createElement("div")
        batteryPorcent.innerHTML = `${batteryWidh}%`
        batteryPorcent.setAttribute("style", `
            margin-left:10px;
            font-size:40px;
            color:rgb(6, 199, 6);
        `)
        setInterval(() =>{batteryPorcent.innerHTML = `${batteryWidh}%`}, 100*100)
        // phoneElement.innerHTML = `
        // <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="iphoneIconTitle" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="white" color="#000000"> <title id="iphoneIconTitle">iPhone</title> <path d="M18,3 L18,21 C18,21.5522847 17.5522847,22 17,22 L7,22 C6.44771525,22 6,21.5522847 6,21 L6,3 C6,2.44771525 6.44771525,2 7,2 L17,2 C17.5522847,2 18,2.44771525 18,3 Z"/> <polygon points="14 2 14 3 10 3 10 2"/> </svg>
        // `
        let weatherElement = document.createElement("div")
        weatherElement.setAttribute("id", "left-side-weatherElement")
        // weather api
        let city = document.createElement("div")
        city.innerHTML = "Mioveni" // test data

        let temperature = document.createElement("div")
        temperature.style.height = "40%"
        temperature.style.width = "100%"
        temperature.style.fontSize = "250%"
        temperature.innerHTML = "21&deg;" //test data

        let weathericon = document.createElement("img")
        weathericon.setAttribute("src", "https://openweathermap.org/img/wn/01d@2x.png")
        weathericon.style.height = "20%"

        let description = document.createElement("div")
        description.innerHTML = "Clear Sky"

        weatherElement.append(city)
        weatherElement.append(temperature)
        weatherElement.append(weathericon)
        weatherElement.append(description)

        elementsMenu.append(phoneElement)
        elementsMenu.append(batteryPorcent)
        elements.append(elementsMenu)
        elements.append(weatherElement)
        element.append(elements)

        
        let opened = openedApplication
        let show = false
        element.addEventListener("touchmove", pos => {
            let screenPosition = pos.touches[0].clientX;
            if (screenPosition <= 30 && show == false && opened == 0){
                console.log(openedApplication)
                element.style.transform = "translateX(0)"
                element.style.opacity = "1"
                screen.style.filter = "blur(10px)"
                show = true
            } else if (screenPosition > 300 && show == true && opened == 0){
                element.style.transform = "translateX(-350px)"
                element.style.opacity = "0"
                screen.style.filter = "blur(0)"
                show = false
            }
            console.log(show)
            console.log(screenPosition)
        })
    }
    scrollLeftSidesMenus(loadingScreen, leftSide)

   

    // up side
    let upSide =  document.getElementById("up-side")
    upSide.style.height = `${screenHeight}px`
    upSide.style.width = `${screenWidth}px`
    upSide.style.transform = `translateY(calc(-${screenHeight}px + 50px))`
    const yearMounts = {
        0:"January",
        1:"February",
        2:"March",
        3:"April",
        4:"May",
        5:"June",
        6:"July",
        7:"August",
        8:"september",
        9:"October",
        10:"November",
        11:"December"
    }

    const weekDays = {
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday",
    }
    
    function scrollUpSideMenu(screen, element, screenHeight){
        element.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-unlock" viewBox="0 0 16 16">
            <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
        </svg>
        `
        let clock = document.createElement("div")
        clock.setAttribute("id", "up-side-clock")
        clock.innerHTML = hour()
        setInterval(() => {clock.innerHTML = hour()}, 60 * 1000)

        let date = new Date()
        let containerDate = document.createElement("div")
        containerDate.innerHTML = `${weekDays[date.getDay()]}, ${date.getDate()} ${yearMounts[date.getMonth()]}`

        console.log(date)
        element.append(clock)
        element.append(containerDate)
        let opened = openedApplication
        let show = false

        element.addEventListener("touchmove", pos => {
            let screenPosition = pos.touches[0].clientY;
            console.log(screenPosition)
            if (screenPosition <= 50 && show == false && opened == 0){
                element.style.transform = "translateY(0)"
                element.style.opacity = "1"
                screen.style.filter = "blur(10px)"
                time.innerHTML = "Network.."
                show = true
            } else if (screenPosition > screenHeight - 100 && show == true && opened == 0){
                element.style.transform = `translateY(calc(-${screenHeight}px + 50px))`
                element.style.opacity = "0"
                screen.style.filter = "blur(0)"
                time.innerHTML = hour()
                show = false
            }
        })
    }

    scrollUpSideMenu(loadingScreen, upSide, screenHeight)

    // screen Aplications
    class ScreenAplications extends Aplication{
        title = document.createElement("div")
        
        containerSelf(){
            this.title.style.height = "70px"
            this.title.style.color = "white"
            this.title.style.display = "flex"
            this.title.innerHTML = `<span style = "align-self: flex-end;width: 100%; text-align:center;font-size:10px;">${this.name}</span>`
            this.app.append(this.title)
            super.containerSelf()
        }
        oppenappSelf(translate, appfunction){
            this.app.addEventListener("click", () => {
                try{
                    this.app.removeChild(this.title)
                } catch{}
            })
            
            super.oppenappSelf(translate,appfunction)
        }
        scrollCloseSelf(element){
            super.scrollCloseSelf(element)
            element.addEventListener("touchmove",pos => {
                let position = pos.touches[0].clientY;
                console.log(position)
                if (position < 700) {
                    this.app.append(this.title)
                    console.log(this.title)
                }
            })
            
        } 
    }
    let aplications = document.getElementById("aplications")
    // aplications.style.height = `calc(${screenHeight}px - 15%)`
    let aplicationWidh = (screenWidth / 100) * 90
    aplications.style.width = `${aplicationWidh}px`

    const safari = new ScreenAplications(aplications, "Safari", "aplication", "icons/safari.svg")
    const notes = new ScreenAplications(aplications, "Notes", "aplication", "icons/notes.svg")
    const files = new ScreenAplications(aplications, "Files", "aplication", "icons/files.svg")
    const clock = new ScreenAplications(aplications, "Clock", "aplication", "icons/clock.svg")

    

    safari.containerSelf()
    safari.oppenappSelf("-40px", safariapp)

   

    notes.containerSelf()
    notes.oppenappSelf("-40px",notesapp)

    

    files.containerSelf()
    files.oppenappSelf("-40px",filesApp)

    

    clock.containerSelf()
    clock.oppenappSelf("-40px",clockApp)

    let aplications2 = document.getElementById("aplications2")
    // aplications2.style.height = `calc(${screenHeight}px - 15%)`
    let aplication2Widh = (screenWidth / 100) * 90
    aplications2.style.width = `${aplication2Widh}px`

    const phone = new ScreenAplications(aplications2, "Photo", "aplication", "icons/apple-photos.svg")
    const camera = new ScreenAplications(aplications2, "Camera", "aplication", "icons/camera.svg")
    const mail = new ScreenAplications(aplications2, "Mail", "aplication", "icons/mail.svg")
    const calculator = new ScreenAplications(aplications2, "Calculator", "aplication", "icons/calculator.svg")

    phone.containerSelf()
    phone.oppenappSelf("-129px", notworking)

    camera.containerSelf()
    camera.oppenappSelf("-129px", notworking)

    mail.containerSelf()
    mail.oppenappSelf("-129px", notworking)

    calculator.containerSelf()
    calculator.oppenappSelf("-129px", notworking)
}


