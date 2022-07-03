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

 export {notworking}