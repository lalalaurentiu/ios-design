// Loading Bar
let startLoading = 0
let progresBarElement = document.getElementById('progresBar')
let loadingElements = document.getElementById('loading')
let loadingScreen = document.getElementById('screen')

let screenHeight = window.innerHeight
loadingScreen.style.height = `${screenHeight}px`
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
    var time = document.getElementById("time")
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
    parrent.style.height = `${parrentHeight}px`

    
    
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
        oppenappSelf(){

            this.app.addEventListener("click", () => {
            this.closeButtonSelf()
            this.app.removeAttribute("style")
            this.app.setAttribute(
                "style",
                `
                position: absolute;
                width: 390px;
                height: ${screenHeight}px;
                left: -10px;
                top:0;
                transform: translateY(calc(-${screenHeight}px + ${parrentHeight}px + 10px));
                background-color: black;
                transition: all 1s;
                `
            )
            openedApplication = 1
            })
        }
        closeButtonSelf(){
            let closeButton = document.createElement("div")
            closeButton.setAttribute(
            "style",
            `   
                position: absolute;
                bottom: 0;
                width: 130px;
                height: 5px;
                background-color: white;
                text-align: center;
                left: 125px;
                margin-bottom: 5px;
                border-radius: 5px;
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
                    openedApplication = 0
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
    imessage.oppenappSelf()

    appstore.containerSelf()
    appstore.oppenappSelf()

    contacts.containerSelf()
    contacts.oppenappSelf()

    setting.containerSelf()
    setting.oppenappSelf()
  
    // left-side
    let leftSide = document.getElementById("left-side")
    leftSide.style.height = `${screenHeight}px`

    function scrollLeftSidesMenus(screen, element){
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
    upSide.style.transform = `translateY(calc(-${screenHeight}px + 50px))`
    
    function scrollUpSideMenu(screen, element, screenHeight){
        let opened = openedApplication
        let show = false

        element.addEventListener("touchmove", pos => {
            let screenPosition = pos.touches[0].clientY;
            console.log(screenPosition)
            if (screenPosition <= 50 && show == false && opened == 0){
                element.style.transform = "translateY(0)"
                element.style.opacity = "1"
                screen.style.filter = "blur(10px)"
                show = true
            } else if (screenPosition > screenHeight - 100 && show == true && opened == 0){
                element.style.transform = `translateY(calc(-${screenHeight}px + 50px))`
                element.style.opacity = "0"
                screen.style.filter = "blur(0)"
                show = false
            }
        })
    }

    scrollUpSideMenu(loadingScreen, upSide, screenHeight)
