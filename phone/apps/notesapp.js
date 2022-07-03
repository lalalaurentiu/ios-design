 // notes function
 function notesapp(parrent){
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
                let value = edit.value
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
        display:none;
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
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eabe63" class="bi bi-pencil-square" viewBox="0 0 16 16" style="padding-right:10px;">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>
`
notesFooter.innerHTML = `
    <span></span>
    <span style="margin-left:40px;">Notes</span>
    
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
export {notesapp}