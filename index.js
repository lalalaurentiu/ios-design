

// Loading Bar
let startLoading = 0
let main = document.getElementById("main")
let progresBarElement = document.getElementById('progresBar')
let loadingElements = document.getElementById('loading')
let loadingScreen = document.getElementById('screen')
let header = document.getElementById("header")


let screenHeight = window.innerHeight
let screenWidth = window.innerWidth


console.log(main)
if(window.innerWidth > 1024){
    screenHeight = 0
    screenWidth = 0
    let desktop = document.createElement("div")
    desktop.setAttribute("style", `
        width:100%;
        height:100%;
        position:absolute;
        background-color:white;
        z-index:7;
        display:flex;
        justify-content:center;
        align-items:center;
    `)
    let gearContainer = document.createElement("div")
    gearContainer.setAttribute("style",`
        text-align:center;
    `)
    desktop.append(gearContainer)

    let gear = document.createElement("img")
    gear.setAttribute("id", "gear")
    gear.setAttribute("src", "icons/gear.svg")
    gear.setAttribute("style", `
        width:300px;
        height:300px;
    `)
    gearContainer.append(gear)

    let gear2 = document.createElement("img")
    gear2.setAttribute("id", "gear2")
    gear2.setAttribute("src", "icons/gear.svg")
    gear2.setAttribute("style", `
        width:300px;
        height:300px;
    `)
    gearContainer.append(gear2)

    let message = document.createElement("div")
    message.innerHTML = "Desktop version under construction <br> Use desktop phone emulator"
    message.setAttribute("style", `
        position:relative;
        top:50px;
        align-self:center;
        font-size:50px
        `)

    gearContainer.append(message)
    main.prepend(desktop)
}


header.style.width = `calc(${screenWidth}px - 10px)`
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

function loading (){
    if (startLoading == 0) {
        startLoading = 1;
        let width = 1
        let time = setInterval(move, 10)
        function move(){
            if (width >= 100 ){
                clearInterval(time)
                startLoading = 0
                loadingElements.style.display = "none"
                loadingScreen.style.display = "block"
            } else {
                width++
                progresBarElement.style.width = width +"%"
            }
        }
    }
}

loading()

// header
    // hour and minutes
    let time = document.getElementById("time")
    function hour(){
        function addZero(time){
            if (time < 10){
                time = "0" + time
            }
            return time
        }
        const date = new Date()
        let hour = addZero(date.getHours())
        let minute = addZero(date.getMinutes())
        return `${hour}:${minute}`
    
    }
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
            for (i = lines;i >= 0; i--){
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
        for (i = lines;i < classElement.length; i++){
            classElement[i].style.borderTopColor = "white";
        }
    }
    styleWifiLine(wifiLine)
    WifiBlinkLine(wifiLine)
    setInterval(() =>{WifiBlinkLine(wifiLine)}, 60 * 1000)

    // battery
    
    function batteryDischarger(){
        let discharger = document.getElementById("battery-cell")
        let batteryWidh = 99
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

    function notworking(parent){
        let messagecontainer = document.createElement("div")
        messagecontainer.innerHTML = "The application is not currently working"
        messagecontainer.setAttribute("style", `
            position:absolute;
            width:100%;
            top:50%;
            text-align:center;
        `)
        parent.append(messagecontainer)
     }

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
        phoneElement.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
        `
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
            this.title.innerHTML = `<span style = "align-self: flex-end;width: 100%; text-align:center;">${this.name}</span>`
            this.app.append(this.title)
            super.containerSelf()
        }
        oppenappSelf(translate, appfunction){
            this.app.addEventListener("click", () => {
                this.app.removeChild(this.title)
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
    aplications.style.height = `calc(${screenHeight}px - 15%)`
    let aplicationWidh = (screenWidth / 100) * 90
    aplications.style.width = `${aplicationWidh}px`
    const safari = new ScreenAplications(aplications, "Safari", "aplication", "icons/safari.svg")
    const notes = new ScreenAplications(aplications, "Notes", "aplication", "icons/notes.svg")
    const files = new ScreenAplications(aplications, "Files", "aplication", "icons/files.svg")
    const clock = new ScreenAplications(aplications, "Clock", "aplication", "icons/clock.svg")

    function safariapp(parent){
        parent.innerHTML =""
        
        let safariTitle = document.createElement("div")
        safariTitle.setAttribute("id", "safariTitle")
        safariTitle.setAttribute("style",`
            position: relative;
            font-size: 200%;
            top: 60px;
            margin: 10px;
        `)
        safariTitle.innerHTML = "Favourites"

        let safariSites = document.createElement("div")
        safariSites.setAttribute("style",`
            position:relative;
            top:60px;
            display:flex;
            margin-left:10px;
            
        `)
        let youtube = document.createElement("a")
        youtube.setAttribute("id", "youtube")

        youtube.setAttribute("style",`
            height:80px;
            text-align:center;
            margin-right:10px;
        `)
        let youtubeicon = document.createElement("div")
        youtubeicon.setAttribute("style", `
            width:50px;
            height:50px;
            background-image:url("icons/youtube.svg");
            background-size:50px 50px;
            background-position: center;
            background-color: #929191;
            background-repeat:no-repeat;
            padding: 5px;
            border-radius:10px;
        `)
        let youtubetitle = document.createElement("div")
        youtubetitle.setAttribute("style", "margin-top:5px;")
        youtubetitle.innerHTML = "YouTube"

        youtube.append(youtubeicon)
        youtube.append(youtubetitle)

        let googleweb = document.createElement("a")
        googleweb.setAttribute("id","google")
        googleweb.setAttribute("style",`
            height:80px;
            text-align:center;
            margin-right:10px;
        `)

        let googlewebicon = document.createElement("div")
        googlewebicon.setAttribute("style", `
            width:50px;
            height:50px;
            background-image:url("icons/google.svg");
            background-size:50px 50px;
            background-position: center;
            background-color: white;
            background-repeat:no-repeat;
            padding: 5px;
            border-radius:10px;
            display:flex;
        `)
        let googlewebtitle = document.createElement("div")
        googlewebtitle.setAttribute("style", "margin-top:5px;")
        googlewebtitle.innerHTML = "Google"

        googleweb.append(googlewebicon)
        googleweb.append(googlewebtitle)

        safariSites.append(youtube)
        safariSites.append(googleweb)

        let safariprivacy = document.createElement("div")
        safariprivacy.innerHTML = "Privacy Report"
        safariprivacy.setAttribute("style", `
            position: relative;
            font-size: 200%;
            top: 60px;
            margin:20px 10px;
        `)

        let safariprivacyreport = document.createElement("div")
        safariprivacyreport.setAttribute("style", `
            position:relative;
            display:flex;
            height:15%;
            width:95%;
            top: 60px;
            margin-left:10px;
            background-color:#929191;
            border-radius:10px;
            color: white;
        `)
        let safariprivacyreporticon = document.createElement("div")
        safariprivacyreporticon.setAttribute("style",`
            width:30px;
            height:30px;
            background-image:url("icons/shield.svg");
            background-size:30px 30px;
            align-self: center;
            margin-left:10px;
        `)

        let safariprivacyreportnumber = document.createElement("div")
        safariprivacyreportnumber.innerHTML = "102"
        safariprivacyreportnumber.setAttribute("style",`
            font-size:30px;
            align-self: center;
        `)

        let safariprivacyreportinfo = document.createElement("div")
        safariprivacyreportinfo.innerHTML = "In the last seven days, Safari has prevent 102 trackers from profiling you and hidden your IP address from known trackers."
        safariprivacyreportinfo.setAttribute("style", `
            width:70%;
            align-self: center;
            margin-left:10px;
        `)

        safariprivacyreport.append(safariprivacyreporticon)
        safariprivacyreport.append(safariprivacyreportnumber)
        safariprivacyreport.append(safariprivacyreportinfo)

        let safarisearch = document.createElement("div")
        safarisearch.setAttribute("style",`
            position:absolute;
            display:flex;
            width:100%;
            height:10%;
            background-color: #929191;
            bottom: 0;
            justify-content:center;
        `)
        let safariserchinput = document.createElement("input")
        safariserchinput.setAttribute("type","text")
        safariserchinput.setAttribute("placeholder","Search or enter website")
        safariserchinput.setAttribute("style",`
            margin:0;
            height:40px;
            align-self: center;
            background-color: #b7b7b7;
        `)

        
        safarisearch.append(safariserchinput)

        let opensites = [youtube, googleweb]

        opensites.forEach(element =>{
            element.addEventListener("click", () =>{
                let url = `https://${element.getAttribute("id")}.com`
                window.location = url
            })
        })

        safariserchinput.addEventListener("keypress", e =>{
            if (e.key == "Enter"){
                let url = `https://www.google.com/search?q=${safariserchinput.value}`
                window.location = url
            }
        })

        parent.append(safariTitle)
        parent.append(safariSites)
        parent.append(safariprivacy)
        parent.append(safariprivacyreport)
        parent.append(safarisearch)
    }
    safari.containerSelf()
    safari.oppenappSelf("-40px", safariapp)

    // notes function
    function notesFunction(parrent){
        let notesList = []
        notesList.push =  function (){
            Array.prototype.push.apply(this, arguments);
            listUtils.show()
            listUtils.udateListener(arguments, notesList.length - 1)
        }

        notesList.splice =  function (){
            Array.prototype.splice.apply(this, arguments);
            listUtils.show()
            listUtils.reloadListener(arguments)
        }
        const listUtils = {
            create:function(value){
                let notesElement = document.createElement("div")
                let date = new Date()
                value = notes.value
                let sliceValue 

                if (value.length > 30){
                    sliceValue = `${value.slice(0,30)}...`
                } else {
                    sliceValue = value
                }
                notesElement.innerHTML = `${sliceValue} <br>
                    ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} <br>
                    <div style="
                        display:flex;
                        height:20px;
                        color:white;
                        align-items:end;
                        ">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                style="margin-right:5px;"
                                width="20"
                                height="20"
                                fill="currentcolor"
                                id="Layer_1" 
                                x="0" 
                                y="0" 
                                version="1.1" 
                                viewBox="0 0 29 29" 
                                xml:space="preserve">
                                    <path d="M24 25H5c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h4.559c1.293 0 2.437.824 2.846 2.051l.089.266a.997.997 0 0 0 .947.683H24c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zM5 6c-.552 0-1 .449-1 1v15c0 .551.448 1 1 1h19c.552 0 1-.449 1-1V10c0-.551-.448-1-1-1H13.441a2.996 2.996 0 0 1-2.846-2.051l-.089-.266A.997.997 0 0 0 9.559 6H5z"/><path d="M24 25H5c-1.654 0-3-1.346-3-3V12a1 1 0 0 1 1-1h23a1 1 0 0 1 1 1v10c0 1.654-1.346 3-3 3zM4 13v9c0 .551.448 1 1 1h19c.552 0 1-.449 1-1v-9H4z"/>
                        </svg>
                            Notes
                        </div>
                `
                
                notesElement.setAttribute("style", `
                    border-bottom:1px solid white;
                    padding-bottom:5px;
                    margin-top:5px;
                `)
                if (notes.value !== "") {
                    console.log("create")
                    notesList.push({ element:notesElement, value:value})
                }
            },
            udateListener:function(obj, index){
                obj[0].element.addEventListener("click", () =>{
                    listUtils.update(obj[0], index)
                })
            },
            reloadListener: function (obj){
                console.log(obj)
                try {
                    obj[2].element.addEventListener("click", () =>{
                        listUtils.update(obj[2], obj[0])
                    })
                } catch (e){

                }
                
            },
            update:function(element, index){
                let notesEdit = document.createElement("div")
                notesEdit.setAttribute("style", `
                    position:absolute;
                    width:100%;
                    height:100%;
                    background-color:black;
                    top:0;
                    z-index:5;
                    transition: all 0.5s; 
                `)

                let notesEditHeader = document.createElement("div")
                notesEditHeader.setAttribute("style", `
                    position:relative;
                    top:60px;
                    font-size:20px;
                    color:#eabe63;
                `)

                let notesEditSave = document.createElement("a")
                notesEditSave.setAttribute("style",`
                    margin-left:10px;
                    display:flex;
                    align-items:center;
                `)
                notesEditSave.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    Folders
                    `
                
                notesEditHeader.append(notesEditSave)

                let edit = document.createElement("textarea")
                edit.setAttribute("style" ,`
                    position:relative;
                    top:60px;
                    width:95%;
                    height:70%;
                    background-color:black;
                    color:white;
                    border:none;
                    margin:10px;
                    font-size:20px;
                `)
                let deleteContainer = document.createElement("div")
                deleteContainer.setAttribute("style", `
                    position:absolute;
                    display:flex;
                    bottom:0;
                    width:100%;
                    height:50px;
                    color:white;
                    z-index:4;
                    background-color:rgba(0, 0, 0, 0.5);
                    justify-content: end;
                    align-items:center;
                `)
                let deleteButton = document.createElement("a")
                deleteButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eabe63" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                `
                deleteButton.setAttribute("style", "margin-right:10px;")
                deleteContainer.append(deleteButton)

                edit.value = element.value
                notesEdit.append(notesEditHeader)
                notesEdit.append(edit)
                notesEdit.append(deleteContainer)
                parrent.append(notesEdit)

                deleteButton.addEventListener("click",() =>{
                    notesList.splice(index, 1)
                    notesEdit.remove()
                })
                
                notesEditSave.addEventListener("click", () => {
                    let notesElement = document.createElement("div")
                    let date = new Date()
                    value = edit.value
                    let sliceValue 

                    if (value.length > 30){
                        sliceValue = `${value.slice(0,30)}...`
                    } else {
                        sliceValue = value
                    }
                    notesElement.innerHTML = `${sliceValue} <br>
                        ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} <br>
                        <div style="
                            display:flex;
                            height:20px;
                            color:white;
                            align-items:end;
                            ">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    style="margin-right:5px;"
                                    width="20"
                                    height="20"
                                    fill="currentcolor"
                                    id="Layer_1" 
                                    x="0" 
                                    y="0" 
                                    version="1.1" 
                                    viewBox="0 0 29 29" 
                                    xml:space="preserve">
                                        <path d="M24 25H5c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h4.559c1.293 0 2.437.824 2.846 2.051l.089.266a.997.997 0 0 0 .947.683H24c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zM5 6c-.552 0-1 .449-1 1v15c0 .551.448 1 1 1h19c.552 0 1-.449 1-1V10c0-.551-.448-1-1-1H13.441a2.996 2.996 0 0 1-2.846-2.051l-.089-.266A.997.997 0 0 0 9.559 6H5z"/><path d="M24 25H5c-1.654 0-3-1.346-3-3V12a1 1 0 0 1 1-1h23a1 1 0 0 1 1 1v10c0 1.654-1.346 3-3 3zM4 13v9c0 .551.448 1 1 1h19c.552 0 1-.449 1-1v-9H4z"/>
                            </svg>
                                Notes
                            </div>
                    `
                    
                    notesElement.setAttribute("style", `
                        border-bottom:1px solid white;
                        padding-bottom:5px;
                        margin-top:5px;
                    `)
                    notesList.splice(index, 1 ,{
                        element:notesElement,
                        value:edit.value
                    })
                    notesEdit.remove()
                })
            },
            show: function(){
                notesContainer.innerHTML = ""
                notesList.forEach(elem => {
                    notesContainer.append(elem.element)
                })
            }
        }
        let index = 0

        // notes Search

        let notesSearch = document.createElement("input")
        notesSearch.setAttribute("type", "text")
        notesSearch.setAttribute("placeholder", "Search")
        notesSearch.setAttribute("style", `
            position:relative;
            display:inline-block;
            top:60px;
            width:90%;
            height:40px;
            margin:10px;
            text-align:start;
            padding-left:10px;
        `)
        parrent.append(notesSearch)

        // -- --

        // notes Title

        let notestitle = document.createElement("div")
        notestitle.innerHTML = "All Notes"
        notestitle.setAttribute("style", `
            position:relative;
            top:60px;
            font-size:200%;
            margin:10px;
        `)
        parrent.append(notestitle)

        // -- --

        // notes Container
        let notesContainer = document.createElement("div")
        notesContainer.setAttribute("class","notesContainer")
        notesContainer.setAttribute("style", `
            position:relative;
            top:60px;
            width:90%;
            height:70%;
            margin:10px;
            background-color: #616161;
            border-radius:5px;
            padding:10px 0 0 20px;
            overflow:auto;
        `)
        parrent.append(notesContainer)

        // -- --

        // create demo notes

        let notesElement = document.createElement("div")
        let date = new Date()
        notesElement.innerHTML = `My name is Baluta Laurentiu Marian... <br>
                                ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} <br>
                                <div style="
                                    display:flex;
                                    height:20px;
                                    color:white;
                                    align-items:end;
                                    ">
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                            style="margin-right:5px;"
                                            width="20"
                                            height="20"
                                            fill="currentcolor"
                                            id="Layer_1" 
                                            x="0" 
                                            y="0" 
                                            version="1.1" 
                                            viewBox="0 0 29 29" 
                                            xml:space="preserve">
                                                <path d="M24 25H5c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h4.559c1.293 0 2.437.824 2.846 2.051l.089.266a.997.997 0 0 0 .947.683H24c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zM5 6c-.552 0-1 .449-1 1v15c0 .551.448 1 1 1h19c.552 0 1-.449 1-1V10c0-.551-.448-1-1-1H13.441a2.996 2.996 0 0 1-2.846-2.051l-.089-.266A.997.997 0 0 0 9.559 6H5z"/><path d="M24 25H5c-1.654 0-3-1.346-3-3V12a1 1 0 0 1 1-1h23a1 1 0 0 1 1 1v10c0 1.654-1.346 3-3 3zM4 13v9c0 .551.448 1 1 1h19c.552 0 1-.449 1-1v-9H4z"/>
                                    </svg>
                                        Notes
                                    </div>
                            `
    
    notesElement.setAttribute("style", `
        border-bottom:1px solid white;
        padding-bottom:5px;
    `)
    notesList.push({element:notesElement, value:"My name is Baluta Laurentiu Marian. I am a full stack web developer "})

    // -- --

    // create new notes
    
    let notesWrite = document.createElement("div")

    notesWrite.setAttribute("style", `
        position:absolute;
        width:100%;
        height:100%;
        background-color:black;
        top:0;
        z-index:5;
        transform:translateX(100%);
        opacity: 0;
        display:none;
        transition: all 0.5s; 
    `)

    let notesWriteHeader = document.createElement("div")

    notesWriteHeader.setAttribute("style", `
        position:relative;
        top:60px;
        font-size:20px;
        color:#eabe63;
    `)

    let notesWriteSave = document.createElement("a")

    notesWriteSave.setAttribute("id", "writesave")
    notesWriteSave.setAttribute("style",`
        margin-left:10px;
        display:flex;
        align-items:center;
    `)
    notesWriteSave.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        Folders
        `
    
    notesWriteHeader.append(notesWriteSave)

    let notes = document.createElement("textarea")
    notes.setAttribute("style" ,`
        position:relative;
        top:60px;
        width:95%;
        height:70%;
        background-color:black;
        color:white;
        border:none;
        margin:10px;
        font-size:20px;
    `)

    // note create listener

    notesWriteSave.addEventListener("click", () =>{
        listUtils.create(notes.value)
        notesWrite.setAttribute("style", `
            position:absolute;
            width:100%;
            height:100%;
            background-color:black;
            top:0;
            z-index:5;
            transform:translateX(100%);
            opacity: 0;
            transition: all 0.5s;  
        `)
        notes.value = ""
    })


    notesWrite.append(notesWriteHeader)
    notesWrite.append(notes)
    parrent.append(notesWrite)

    //  -- --


    // notes footer

    let notesFooter = document.createElement("div")
    let notesFooterCreate = document.createElement("a")
    notesFooterCreate.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eabe63" class="bi bi-pencil-square" viewBox="0 0 16 16" style="margin-right:30px;">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
    `
    notesFooter.innerHTML = `
        <span></span>
        <span>Notes</span>
        
    `
    notesFooter.setAttribute("style",`
        position:absolute;
        display:flex;
        bottom:0;
        width:100%;
        height:50px;
        color:white;
        z-index:4;
        background-color:rgba(0, 0, 0, 0.5);
        justify-content: space-between;
        align-items:center;
        padding-left:20px;
    `)

    notesFooterCreate.addEventListener("click", () => {
        notesWrite.setAttribute("style", `
            position:absolute;
            width:100%;
            height:100%;
            background-color:black;
            top:0;
            z-index:5;
            transform:translateX(0);
            opacity:1;
            transition: all 0.5s; 
        `)

    })
    
    notesFooter.append(notesFooterCreate)
    parrent.append(notesFooter)


    //  -- --
    }
    // -- --
    notes.containerSelf()
    notes.oppenappSelf("-40px",notesFunction)

    function filesApp(parent){
                
        let title = document.createElement("div")
        title.innerHTML = "Browse"
        title.setAttribute("style",`
            position:relative;
            top:60px;
            font-size:40px;
            margin-left:10px;
        `)
        
        let search = document.createElement("input")
        search.setAttribute("placeholder", "Search")
        search.setAttribute("style", `
            position:relative;
            top:60px;
            margin:10px 0 0 10px;
            height:40px;
            width:90%;
            text-align:start;
            padding-left:10px;
        `)

        let app = document.createElement("div")
        app.setAttribute("style", `
            position:absolute;
            width:100%;
            height:100%;
            background-color:black;
            z-index:4;
            transform:translateX(100%);
            opacity:0;
            transition: all 0.5s;
        `)

        parent.append(app)

        function createContaier (lst, title){
            let Container = document.createElement("div")
            Container.setAttribute("style", `
                position:relative;
                top:60px;
                width:90%;
                margin:10px 0 0 10px;
                overflow:hidden;
                transition: all 0.5s;
            `)
            let header = document.createElement("div")
            header.setAttribute("style", `
                position:relative;
                background-color:black;
                z-index:2;
            `)
            Container.append(header)
            let Title = document.createElement("div")
            Title.innerHTML = `${title}`
            Title.setAttribute("style", `
                width:40%;
                display:inline-block;
                font-size:20px;
            `)
            header.append(Title)

            let Button = document.createElement("a")
            Button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4e59f5" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            `
            Button.setAttribute("style", `
                position:absolute;
                right:0;
                transition: all 0.5s;
            `)
            header.append(Button)

            let Body = document.createElement("div")
                Body.setAttribute("style", `
                    position:relative;
                    transform:translateY(-110%);
                    width:100%;
                    background-color:#616161;
                    border-radius:10px;
                    margin-top:10px;
                    transition: all 0.5s;
                    overflow:auto;
                `)
                Container.append(Body)

                Button.addEventListener("click", () =>{
                if (Button.style.transform == "rotate(90deg)"){
                    Button.style.transform = ("rotate(0deg)")
                    Body.style.transform = "translateY(-110%)"
                    setTimeout(() =>{Container.style.height = "50px"}, 500)
                } else {
                    Button.style.transform = ("rotate(90deg)")
                    Body.style.transform = "translateY(0%)"
                    Container.style.height = "initial"
                }
            })


            lst.forEach(element => {
                let BodyElement = document.createElement("div")
                BodyElement.setAttribute("style", `
                    width:100%;
                    display:flex;
                    align-items:center;
                    height:50px;
                `)
                Body.append(BodyElement)

                let Icon = document.createElement("div")
                Icon.setAttribute("style", `
                    width:30px;
                    height:30px;
                    background-image:url(${element.icon});
                    background-color:white;
                    background-size: 20px;
                    background-repeat:no-repeat;
                    background-position: center;
                    margin:5px 10px;
                    border-radius:5px;
                `)
                BodyElement.append(Icon)

                let bodyTitle = document.createElement("div")
                bodyTitle.innerHTML = `${element.bodyTitle}`
                bodyTitle.setAttribute("style",`
                    border-bottom:1px solid white;
                    width:100%;
                    padding-bottom:10px;
                `)
                BodyElement.append(bodyTitle)

                let bodyButton = document.createElement("div")
                bodyButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                `
                bodyButton.setAttribute("style", `
                    position:absolute;
                    right:0;
                    margin-right:10px;
                `)
                BodyElement.append(bodyButton)

                bodyButton.addEventListener("click", () =>{
                    app.style.transform = "translateX(0)"
                    app.style.opacity = "1"
                    let header = document.createElement("div")
                    header.setAttribute("style", `
                        position:sticky;
                        top:0;
                        width:100%;
                        height:20%;
                        z-index:2;
                    `)
                    app.append(header)

                    let appHeaderblur = document.createElement("div")
                    appHeaderblur.setAttribute("style", `
                        position:absolute;
                        top:0;
                        width:100%;
                        height:20%;
                        filter:blur(10px)
                    `)
                    header.append(appHeaderblur)

                    let appHeader = document.createElement("div")
                    appHeader.setAttribute("style", `
                        position:absolute;
                        display:flex;
                        top:60px;
                        width:100%;
                        height:20%;
                        align-items:center;
                        justify-content:space-between;
                    `)

                    header.append(appHeader)
                    let backButton = document.createElement("a")
                    backButton.setAttribute("style", `
                        display:flex;
                        align-items:center;
                        color:#4e59f5;
                    `)

                    backButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg> 
                    Browse
                    `
                    backButton.addEventListener("click", () =>{
                        app.style.transform = "translateX(100%)"
                        app.style.opacity = "0"
                        app.innerHTML = ""
                    })
                    appHeader.append(backButton)

                    let title = document.createElement("span")
                    title.innerHTML = `${element.bodyTitle}`

                    appHeader.append(title)

                    let utils = document.createElement("a")
                    utils.setAttribute("style", `
                        width:20px;
                        height:20px;
                        border:2px solid #4e59f5;
                        border-radius:50%;
                        color: #4e59f5;
                        text-align:center;
                        margin-right:10px;
                    `)

                    appHeader.append(utils)
                    let utilsIcon = document.createElement("span")
                    utilsIcon.innerHTML = "..."
                    utilsIcon.setAttribute("style", `
                        position:relative;
                        top:-5px;
                    `)

                    utils.append(utilsIcon)

                    // 
                    let utilsApp = document.createElement("div")
                    utilsApp.setAttribute("style", `
                            position:absolute;
                            width:0;
                            height:0;
                            background-color:#616161;
                            top:30px;
                            right:20px;
                            border-radius:5px;
                            color:white;
                            padding:0 0 5px 5px;
                            transition:all 0.5s;
                            opacity:0;
                            overflow:hidden;
                        `)

                        appHeader.append(utilsApp)

                        let select = document.createElement("a")
                        select.innerHTML = `
                        Select
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" viewBox="0 0 32 32"><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4ZM14.66,20.75l9-8-1.32-1.5L14,18.63,9.71,14.29,8.29,15.71l5,5A1,1,0,0,0,14,21,1,1,0,0,0,14.66,20.75Z" data-name="58  Tick, Basic, Essential, Select"/></svg>
                        `
                        select.setAttribute("style", `
                            display:block;
                            padding:5px;
                            display:flex;
                            align-items:center;
                            border-bottom:1px solid white;
                            justify-content:space-between;
                        `)

                        utilsApp.append(select)
                  
                    let newFolderButton = document.createElement("a")
                    newFolderButton.innerHTML = `
                    New Folder
                    <svg style="margin-left:5px;" xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve"><path d="M24 25H5c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h4.559c1.293 0 2.437.824 2.846 2.051l.089.266a.997.997 0 0 0 .947.683H24c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zM5 6c-.552 0-1 .449-1 1v15c0 .551.448 1 1 1h19c.552 0 1-.449 1-1V10c0-.551-.448-1-1-1H13.441a2.996 2.996 0 0 1-2.846-2.051l-.089-.266A.997.997 0 0 0 9.559 6H5z"/><path d="M24 25H5c-1.654 0-3-1.346-3-3V12a1 1 0 0 1 1-1h23a1 1 0 0 1 1 1v10c0 1.654-1.346 3-3 3zM4 13v9c0 .551.448 1 1 1h19c.552 0 1-.449 1-1v-9H4z"/></svg>
                    `
                    newFolderButton.setAttribute("style", `
                        display:block;
                        padding:5px;
                        display:flex;
                        align-items:center;
                        border-bottom:1px solid white;
                    `)

                    utilsApp.append(newFolderButton)
                    newFolderButton.addEventListener("click",() =>{
                            try{
                                element.items.push("folder")
                            } catch {
                                element.items = ["folder"]
                            }
                            setTimeout(() => {
                                utilsApp.style.width = "0"
                                utilsApp.style.height = "0"
                            }, 500)
                            utilsApp.style.opacity = "0"
                            
                            generate()
                        })

                    let newFileButton = document.createElement("a")
                    newFileButton.innerHTML = `
                    New File
                    <svg style="margin-left:5px;" xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M37,47H11c-2.209,0-4-1.791-4-4V5c0-2.209,1.791-4,4-4h18.973  c0.002,0,0.005,0,0.007,0h0.02H30c0.32,0,0.593,0.161,0.776,0.395l9.829,9.829C40.84,11.407,41,11.68,41,12l0,0v0.021  c0,0.002,0,0.003,0,0.005V43C41,45.209,39.209,47,37,47z M31,4.381V11h6.619L31,4.381z M39,13h-9c-0.553,0-1-0.448-1-1V3H11  C9.896,3,9,3.896,9,5v38c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V13z M33,39H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18  c0.553,0,1,0.448,1,1C34,38.553,33.553,39,33,39z M33,31H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18c0.553,0,1,0.448,1,1  C34,30.553,33.553,31,33,31z M33,23H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18c0.553,0,1,0.448,1,1C34,22.553,33.553,23,33,23  z" clip-rule="evenodd"/></svg>
                    `
                    newFileButton.setAttribute("style", `
                        display:block;
                        padding:5px;
                        display:flex;
                        align-items:center;
                        border-bottom:1px solid white;
                        justify-content:space-between;
                    `)

                    utilsApp.append(newFileButton)
                    newFileButton.addEventListener("click",() =>{
                            try{
                                element.items.push("document")
                            } catch {
                                element.items = ["document"]
                            }
                            setTimeout(() => {
                                utilsApp.style.width = "0"
                                utilsApp.style.height = "0"
                            }, 500)
                            utilsApp.style.opacity = "0"
                            
                            generate()
                        })
                    // -- --

                    utils.addEventListener("click", () => {
                        if (utilsApp.style.opacity === "0"){
                            utilsApp.style.width = "initial"
                            utilsApp.style.height = "initial"
                            utilsApp.style.opacity = "1"
                        } else {
                            setTimeout(() => {
                                utilsApp.style.width = "0"
                                utilsApp.style.height = "0"
                            }, 500)
                            
                            utilsApp.style.opacity = "0"
                        }
                    })

                    let body = document.createElement("div")
                    body.setAttribute("style", `
                        width:100%;
                        display:grid;
                        grid-template-columns: repeat(3, 1fr);
                        color:white;
                        text-align:center;
                    `)

                    app.append(body)

                    let EditFunction = {
                        edit: function (){
                            let input = document.createElement("input")
                            input.setAttribute("style", `
                                height:20px;
                                width:100%;
                                border-radius:0;
                            `)
                            input.value = this.innerHTML
                            this.innerHTML = ""
                            this.append(input)
                            this.removeEventListener("click", EditFunction.edit)
                            this.addEventListener("keypress", EditFunction.keyPress)
                        },
                        keyPress:function (event){
                            if (event.key == "Enter"){
                                let elementTitle = document.createElement("div")
                                elementTitle.innerHTML = this.querySelector("input").value
                                this.innerHTML = ""
                                this.append(elementTitle)
                                this.addEventListener("click", EditFunction.edit)
                            }
                        }
                    }
                   
                        let items = element.items
                        let checked = []
                            
                    try {
                        items.splice = function (){
                            Array.prototype.splice.apply(this, arguments);
                            generate()
                        }
                    } catch{}
                    
                    let deleteContainer = document.createElement("div")
                    deleteContainer.setAttribute("style", `
                        position:absolute;
                        bottom:0;
                        width:100%;
                        height:50px;
                        display:none;
                        background-color:rgba(150, 150, 150, 0.8);
                        z-index:5;
                        color:#000eda;
                        align-items:center;
                        justify-content:space-between;
                    `)

                    parent.append(deleteContainer)

                    let forwardButton = document.createElement("a")
                    forwardButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    Back
                    `
                    forwardButton.setAttribute("style", `
                        display:flex;
                        align-items:center;
                    `)
                    deleteContainer.append(forwardButton)

                    let deleteButton = document.createElement("a")
                    deleteButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    `
                    deleteButton.setAttribute("style", "margin-right:10px;")
                    deleteContainer.append(deleteButton)
                    deleteButton.addEventListener("click", () =>{
                        // not delete all files
                            checked.forEach(number =>{
                                items.splice(number,1)
                                
                            })
                            deleteContainer.style.display ="none"
                            checked.splice(0, checked.length)
                            console.log(checked)
                        })

                    let folderContainer = document.createElement("div")
                    folderContainer.setAttribute("style", `
                        position:absolute;
                        top:0;
                        height:100%;
                        width:100%;
                        background-color:black;
                        transform:translateX(100%);
                        transition: all 0.5s;
                        z-index:5;
                    `)
                    parent.append(folderContainer)

                    function generate(){
                        
                        if (items){
                            console.log(items.length )
                            body.innerHTML = ""
                        
                            items.forEach(elem => {
                                let elementbody = document.createElement("div")
                                elementbody.setAttribute("style", `
                                position:relative;
                                    width:100px;
                                    font-size:15px;
                                    margin-left:10px;
                                `)
                                body.append(elementbody)
                            if (elem == "folder"){
                                

                                let elementIcon = document.createElement("img")
                                elementIcon.setAttribute("src", "icons/blue_folder.svg")

                                elementbody.append(elementIcon)

                                let elementTitle = document.createElement("div")
                                elementTitle.innerHTML = "New folder"
                                elementbody.append(elementTitle)

                                elementTitle.addEventListener("click", EditFunction.edit)

                                elementIcon.addEventListener("click", () => {
                                    folderContainer.style.transform = "translateX(0)"
                                    let header = document.createElement("div")
                                    header.setAttribute("style", `
                                            position:relative;
                                            display:flex;
                                            width:100%;
                                            height:20%;
                                            align-items:center;
                                        `)
                                    folderContainer.append(header)

                                    let backButton = document.createElement("a")
                                        backButton.setAttribute("style", `
                                            display:flex;
                                            align-items:center;
                                            color:#4e59f5;
                                        `)

                                        backButton.innerHTML = `
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                        </svg> 
                                        ${element.bodyTitle}
                                        `
                                        header.append(backButton)
                                        backButton.addEventListener("click", () =>{
                                            folderContainer.style.transform = "translateX(100%)"
                                            setTimeout(() =>{folderContainer.innerHTML = ""}, 500)
                                        })
                                        let Title = document.createElement("div")
                                        Title.innerHTML = elementTitle.innerHTML
                                        Title.setAttribute("style","margin-left:50px;")
                                        header.append(Title)

                                        let body = document.createElement("div")
                                        body.innerHTML = "No files and folders"
                                        body.setAttribute("style", `
                                            width:100%;
                                            text-align:center;
                                        `)
                                        folderContainer.append(body)
                                })
                            } else {

                                let elementIcon = document.createElement("img")
                                elementIcon.setAttribute("src", "icons/document.svg")

                                elementbody.append(elementIcon)

                                let elementTitle = document.createElement("div")
                                elementTitle.innerHTML = "New text file"
                                elementbody.append(elementTitle)

                                elementTitle.addEventListener("click", EditFunction.edit)

                                elementIcon.addEventListener("click", () => {
                                    folderContainer.style.transform = "translateX(0)"
                                    let header = document.createElement("div")
                                    header.setAttribute("style", `
                                            position:relative;
                                            display:flex;
                                            width:100%;
                                            height:20%;
                                            align-items:center;
                                        `)
                                    folderContainer.append(header)

                                    let backButton = document.createElement("a")
                                        backButton.setAttribute("style", `
                                            display:flex;
                                            align-items:center;
                                            color:#4e59f5;
                                        `)

                                        backButton.innerHTML = `
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                        </svg> 
                                        ${element.bodyTitle}
                                        `
                                        header.append(backButton)
                                        backButton.addEventListener("click", () =>{
                                            folderContainer.style.transform = "translateX(100%)"
                                            setTimeout(() =>{folderContainer.innerHTML = ""}, 500)
                                        })
                                        let Title = document.createElement("div")
                                        Title.innerHTML = elementTitle.innerHTML
                                        Title.setAttribute("style","margin-left:50px;")
                                        header.append(Title)

                                        let body = document.createElement("textarea")
                                        body.value = "you can still write"
                                        body.setAttribute("style", `
                                        position:relative;
                                            width:99%;
                                            height:70%;
                                            background-color:black;
                                            color:white;
                                        `)
                                        folderContainer.append(body)
                                })
                            }

                            select.addEventListener("click", () => {
                                setTimeout(() => {
                                    utilsApp.style.width = "0"
                                    utilsApp.style.height = "0"
                                    }, 500)
                                    utilsApp.style.opacity = "0"
                                    let selectItems = document.createElement("input")
                                    selectItems.setAttribute("type", "checkbox")
                                    selectItems.setAttribute("style", `
                                        width:20px;
                                        height:20px;
                                        position:absolute;
                                        margin:0;
                                        padding:0;
                                        left:calc(50% - 10px);
                                        top:calc(50% - 10px);
                                    `)
                                    elementbody.prepend(selectItems)
                                    

                                    let selected = body.querySelectorAll("div > input[type='checkbox']")
                                    
                                    selected.forEach((box, index )=>{
                                        box.addEventListener("change" , () => {
                                            console.log(index)
                                            if(checked.includes(index)){
                                                console.log(checked)
                                            } else {
                                                checked.push(index)
                                            }
                                            
                                            
                                        })
                                    })
                                
                                })
                                select.addEventListener("click", () => {
                                    deleteContainer.style.display ="flex"
                                })
                                
                            })
                            backButton.addEventListener("click", () => {
                                deleteContainer.style.display = "none"
                            })
                            forwardButton.addEventListener("click", () => {
                                generate()
                                deleteContainer.style.display ="none"
                            })
                        } else {
                            // erro not delete file or folder
                            let elementbody = document.createElement("div")
                                elementbody.setAttribute("style", `
                                    position:absolute;
                                    width:100%;
                                    font-size:30px;
                                    text-align:center;
                                `)
                                elementbody.innerHTML = "No files and folders"
                                body.append(elementbody)
                        }
                    }
                    generate()
                    
                })
            });
            parent.append(Container)
        }
        let elements = [
            {
                icon : "icons/icloud.svg",
                bodyTitle : "iCloud Drive",
                items:["folder", "document", ]
            },
            {
                icon : "icons/iphone.svg",
                bodyTitle : "On My iPhone",
                items:[]
            },
            {
                icon : "icons/folder.svg",
                bodyTitle : "Shared",
                items:["folder", "document", ]
            },
            {
                icon : "icons/delete.svg",
                bodyTitle : "Recently Deleted",
                items:[]
            },
        ]
        parent.append(title)
        parent.append(search)
        createContaier(elements, "Location",)
    }

    files.containerSelf()
    files.oppenappSelf("-40px",filesApp)

    clock.containerSelf()
    clock.oppenappSelf("-40px",notworking)