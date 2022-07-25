    // display maun for right header apps
    let rightheaderapps= []
    rightheaderapps.push = function (){
        Array.prototype.push.apply(this, arguments)
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
                transform:translateX(calc(-100% + 30px));
            `)

        arguments[0].elements.forEach(element => {
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
        arguments[0].object.append(appelements) 
        arguments[0].object.addEventListener("click", () => {
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
    export {rightheaderapps}