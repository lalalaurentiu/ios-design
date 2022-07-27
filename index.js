// phone
import {hour} from "./phone/utils/hour.js"
import {safariapp} from "./phone/apps/safariapp.js"
import {notesapp} from "./phone/apps/notesapp.js"
import {filesApp} from "./phone/apps/filesapp.js"
import {clockApp} from "./phone/apps/clockapp.js"
import {notworking} from "./phone/apps/notworkingapp.js"
import {loading} from "./phone/utils/loading.js"

//desktop
import {headerapps} from "./desktop/hederapp/rightHeaderApps.js"
import {HeaderApp} from "./desktop/utils/leftHeaderAppConstructor.js"
import {rightheaderapps} from "./desktop/utils/rightHeaderAppConstructor.js"
import {desktopWindow} from "./desktop/utils/window.js"

// Loading Bar
let startLoading = 0
let main = document.getElementById("main")
let progresBarElement = document.getElementById('progresBar')
let loadingElements = document.getElementById('loading')
export let loadingScreen = document.getElementById('screen')
let header = document.getElementById("header")


export let screenHeight = window.innerHeight
export let screenWidth = window.innerWidth

let parrent = document.getElementById("menuicons")

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

// wifi functions 

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


if(window.innerWidth > 1024){
    
    // desktopWindow(loadingScreen)

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

    

    headerapps.forEach(element => {
        const app = new HeaderApp(leftheaderapp, element.name)
        app.containerSelf(element.elements)
    })

    let aplications = [
        {
            name:"Finder",
            image:"finder.svg"
        },
        {
            name:"Safari",
            image:"safari.svg"
        },
        {
            name:"iMessage",
            image:"ios-message.svg"
        },
        {
            name:"Appstore",
            image:"app-store.svg"
        },
        {
            name:"Camera",
            image:"camera.svg"
        },
        {
            name:"Contacts",
            image:"contacts.svg"
        },
        {
            name:"Notes",
            image:"notes.svg"
        },
        {
            name:"Settings",
            image:"settings.svg"
        },
        {
            name:"Photos",
            image:"apple-photos.svg"
        },
        {
            name:"Mail",
            image:"mail.svg"
        },
        {
            name:"Recycle",
            image:"Recycle-bin.png"
        },
    ]

    aplications.forEach( element => {
        let application = document.createElement("div")
        application.setAttribute("style", `
            width:50px;
            height:50px;
            background-image:url(./icons/${element.image});
            background-repeat:no-repeat;
            margin-right:10px;
        `)
        parrent.append(application)
        application.addEventListener("click", () => {
            desktopWindow(loadingScreen)
        })
    })
    
    let rightheaderapp = document.createElement("div")
    rightheaderapp.setAttribute("style", `
        display:flex;
    `)
    header.append(rightheaderapp)

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
    rightheaderapp.append(flag)

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
    rightheaderapp.append(bluetooth)

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

    rightheaderapp.append(battery)
    rightheaderapps.push({object:battery, elements:[
        [`
            <span>
                Battery
            </span>
        `,
        `
            <span>
                ${batteryWidh}%
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

    setInterval(() => {
        battery.getElementsByTagName("a")[0].children[1].innerHTML = `${batteryWidh}%`
    }, 100 * 100)

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
    rightheaderapp.append(wifi)

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

    // search
    let search = document.createElement("div")
    search.setAttribute("style", `
        margin-right:10px;
    `)
    search.innerHTML =`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
    `
    rightheaderapp.append(search)

    // controll center
    let controlcenter = document.createElement("div")
    controlcenter.setAttribute("style", `
    margin-right:10px;
    `)
    controlcenter.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggles" viewBox="0 0 16 16">
            <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z"/>
        </svg>
    `
    rightheaderapp.append(controlcenter)

    // siri
    let siri = document.createElement("img")
    siri.setAttribute("src", "./wallpapers/Siri_dark.webp")
    siri.setAttribute("width","15")
    siri.setAttribute("height","15")
    siri.setAttribute("style", `
        margin-right:10px;
    `)
    rightheaderapp.append(siri)

    let abreviatemonths = {
        0:"Jan",
        1:"Feb",
        2:"Mar",
        3:"Apr",
        4:"May",
        5:"Jun",
        6:"Jul",
        7:"Aug",
        8:"Sep",
        9:"Oct",
        10:"Nov",
        11:"Dec"
    }
    let abreviatedays = {
        0:"Sun",
        1:"Mon",
        2:"Tues",
        3:"Wed",
        4:"Thurs",
        5:"Fri",
        6:"Sat",
    }
    // date and time container
    let timedatecontainer = document.createElement("div")
    timedatecontainer.setAttribute("style", 
    `
        margin-right:10px;
        display:flex;
    `
    )

    let date = document.createElement("div")
    date.setAttribute("style", `
        margin-right:10px;
    `)
    let localdate = new Date()
    date.innerHTML = `${abreviatedays[localdate.getDay()]} ${localdate.getDate()} ${abreviatemonths[localdate.getMonth()]}`
    timedatecontainer.append(date)

    let clock = document.createElement("div")
    clock.innerHTML = hour()
    timedatecontainer.append(clock)
    setTimeout(() => {
        clock.innerHTML = hour()
    }, 60 * 1000)

    rightheaderapp.append(timedatecontainer)


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

    // menu icons
    
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

// battery
batteryDischarger()

// wifi-signal
let wifiLine = [...document.getElementsByClassName("wifi-line")]


styleWifiLine(wifiLine)
WifiBlinkLine(wifiLine)
setInterval(() =>{WifiBlinkLine(wifiLine)}, 60 * 1000)