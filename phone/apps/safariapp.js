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
        position:relative;
        top:5px;
        margin:0;
        height:40px;
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

export {safariapp}