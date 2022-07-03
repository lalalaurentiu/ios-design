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
        display:none;
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
                app.style.display = "initial"
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
                    setTimeout(() => {
                        app.style.transform = "translateX(100%)"
                        app.style.opacity = "0"
                        app.innerHTML = ""
                        app.style.display = "none"
                    })
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
                    display:none;
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
                                folderContainer.style.display = "initial"
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
                                        setTimeout(() =>{folderContainer.innerHTML = "";
                                        folderContainer.style.display = "none"
                                    }, 500)
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
                                folderContainer.style.display = "initial"
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
                                        setTimeout(() =>{
                                            folderContainer.innerHTML = "";
                                            folderContainer.style.display = "none"
                                        }, 500)
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

export {filesApp}