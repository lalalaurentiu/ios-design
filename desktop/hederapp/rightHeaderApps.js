let headerapps = [
    {
        name:`<svg xmlns="http://www.w3.org/2000/svg" whidth=20 height=20 fill="white" data-name="Layer 1" viewBox="0 0 24 24"><path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"/></svg>`,
        elements:[["<span>About This Mac</span>", "<span></span>", "border-bottom:1px solid white;"], 
                    ["<span>System Preferences...</span>", "<span></span>"],
                    ["<span>App Store...</span>", "<span style='padding:2px 5px 2px 5px;background:rgba(2, 80, 153, 0.5);border-radius:10px;'>5 updates</span>", "border-bottom:1px solid white;"],
                    ["<span>Recent Items</span>", `<span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>`,
                    "border-bottom:1px solid white;"],
                    ["<span>Force Quit...</span>",`<span style="color:white;">
                        <img width=13 height=13 src="./mac-icons/mac-option-command.svg">
                        <img width=13 height=13 src="./mac-icons/mac-command.svg">
                    </span>`,
                    "border-bottom:1px solid white;"],
                    ["<span>Sleep</span>", "<span></span>"],
                    ["<span>Restart...</span>", "<span></span>"],
                    ["<span>Shut Down</span>", "<span></span>", "border-bottom:1px solid white;"],
                    ["<span>Lock Screen</span>",`<span style="color:white;">
                        <img width=13 height=13 src="./mac-icons/mac-control-command.svg">
                        <img width=13 height=13 src="./mac-icons/mac-command.svg">
                        <span style="display:inline-block;transform:translateY(-2px)">Q</span>
                    </span>`],
                    ["<span>Log Out</span>",`<span style="color:white;">
                        <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                        <img width=13 height=13 src="./mac-icons/mac-command.svg">
                        <span style="display:inline-block;transform:translateY(-2px)">Q</span>
                    </span>`],
                ]
    },
    {
        name:"Finder",
        elements:[
            ["<span>About Finder</span>", "<span></span>", "border-bottom:1px solid white;"], 
            ["<span>Preferences...</span>", 
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">,</span>
            </span>`, 
            "border-bottom:1px solid white;"],
            ["<span>Empty Bin...</span>", 
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-delete-command.svg">
            </span>`, 
            "border-bottom:1px solid white;"],
            ["<span>Services</span>", `<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Hide Finders</span>", 
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">H</span>
            </span>`],
            ["<span>Hide Others</span>", 
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-option-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">H</span>
            </span>`],
            ["<span>Show All</span>", "<span></span>"]
        ]
    },
    {
        name:"File",
        elements:[
            ["<span>New Finder Window</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">N</span>
            </span>`],
            ["<span>New Folder</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">N</span>
            </span>`],
            ["<span>New Folder whith Selection</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-control-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">N</span>
            </span>`],
            ["<span>New Smart Folder</span>", "<span></span>"],
            ["<span>New Tab</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">T</span>
            </span>`],
            ["<span>Open</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">O</span>
            </span>`],
            ["<span>Open Whith</span>",
            `<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </span>`],
            ["<span>Close Window</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">W</span>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Get Info</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">I</span>
            </span>`],
            ["<span>Rename</span>",`<span></span>`],
            ["<span>Compress</span>",`<span></span>`],
            ["<span>Duplicate</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">D</span>
            </span>`],
            ["<span>Make Alias</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-control-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">A</span>
            </span>`],
            ["<span>Quick Look</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">Y</span>
            </span>`],
            ["<span>Print</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">D</span>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Share</span>", "<span></span>","border-bottom:1px solid white;"],
            ["<span>Show Original</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">R</span>
            </span>`],
            ["<span>Add to Sidebar</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-control-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">Y</span>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Move to Bin</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-delete-command.svg">
            </span>`],
            ["<span>Eject</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">E</span>
            </span>`,
            "border-bottom:1px solid white;"],
            [`<span>
                <div style="width:10px;height:10px;background:red;border-radius:50%;display:inline-block;margin-right:3px;"></div>
                <div style="width:10px;height:10px;background:orange;border-radius:50%;display:inline-block;margin-right:3px;"></div>
                <div style="width:10px;height:10px;background:yellow;border-radius:50%;display:inline-block;margin-right:3px;"></div>
                <div style="width:10px;height:10px;background:green;border-radius:50%;display:inline-block;margin-right:3px;"></div>
                <div style="width:10px;height:10px;background:blue;border-radius:50%;display:inline-block;margin-right:3px;"></div>
                <div style="width:10px;height:10px;background:rgb(255, 0, 222);border-radius:50%;display:inline-block;margin-right:3px;"></div>
                <div style="width:10px;height:10px;background:gray;border-radius:50%;display:inline-block;margin-right:3px;"></div>
            </span>`, `<span></span>`],
            ["<span>Tags...</span>", "<span></span>","border-bottom:1px solid white;"],
            ["<span>Find</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">F</span>
            </span>`],
        ]
    }, 
    {
        name:"Edit",
        elements:[
            ["<span>Undo Rename</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">Z</span>
            </span>`],
            ["<span>Redo</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">F</span>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Cut</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">X</span>
            </span>`],
            ["<span>Copy</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">C</span>
            </span>`],
            ["<span>Paste</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">V</span>
            </span>`],
            ["<span>Select All</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">A</span>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Show Clipboard</span>",`<span></span>`,"border-bottom:1px solid white;"],
            ["<span>Start Dictation...</span>",`<span></span>`],
            ["<span>Emoji & Symbols</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">Space</span>
            </span>`],
        ]
    },  
    {
        name:"View",
        elements:[
            ["<span>as Icons</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">1</span>
            </span>`],
            ["<span>as List</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">2</span>
            </span>`],
            ["<span>as Columns</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">3</span>
            </span>`],
            ["<span>as Gallery</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">4</span>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Use Stacks</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-control-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">0</span>
            </span>`],
            ["<span>Sort By</span>",
            `<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </span>`],
            ["<span>Clean Up</span>",`<span></span>`],
            ["<span>Clean Up By</span>",
            `<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Hide Sidebar</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-option-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">S</span>
            </span>`],
            ["<span>Hide Preview</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">P</span>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Hide Toolbar</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-option-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">T</span>
            </span>`],
            ["<span>Show All Tabs</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">\\</span>
            </span>`],
            ["<span>Hide Tab Bar</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">T</span>
            </span>`],
            ["<span>Hide Path Bar</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-option-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">P</span>
            </span>`],
            ["<span>Hide Status Bar</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">/</span>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Customise Toolbar...</span>",`<span></span>`],
            ["<span>Customise Touch Bar...</span>",`<span></span>`,"border-bottom:1px solid white;"],
            ["<span>Show View Options</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">J</span>
            </span>`],
            ["<span>Show Preview Options</span>",`<span></span>`,"border-bottom:1px solid white;"],
            ["<span>Enter Full Screen</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-control-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">P</span>
            </span>`],
        ]
    },    
    {
        name:"Go",
        elements:[
            ["<span>Back</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)"> [</span>
            </span>`],
            ["<span>Forward</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)"> ]</span>
            </span>`],
            ["<span>Enclosing Folder</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
            </span>`,
            "border-bottom:1px solid white;"],
            [`<span>
                <svg width="13" fill="currentColor" style="display:inline-block;transform:translateY(2px)" xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve"><path d="M14.638 27c-6.893 0-12.5-5.607-12.5-12.5S7.745 2 14.638 2s12.5 5.607 12.5 12.5S21.53 27 14.638 27zm0-23c-5.79 0-10.5 4.71-10.5 10.5S8.848 25 14.638 25s10.5-4.71 10.5-10.5S20.427 4 14.638 4zm-.08 11.42h-6.42a1 1 0 1 1 0-2h5.42V6a1 1 0 1 1 2 0v8.42a1 1 0 0 1-1 1z"/></svg>
                Recents
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">F</span>
            </span>`],
            [`<span>
                <svg width="13" fill="currentColor" style="display:inline-block;transform:translateY(2px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0L13.06,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H14ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V9a1,1,0,0,0,1,1h5Z"/></svg>
                Documents
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">O</span>
            </span>`],
            [`<span>
                <svg width="13" fill="currentColor" style="display:inline-block;transform:translateY(2px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><path d="M30 0H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1 29a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9h30v20zm0-21H1V3a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v5z"/><circle cx="4.5" cy="4.5" r=".5"/><circle cx="7.5" cy="4.5" r=".5"/><circle cx="10.5" cy="4.5" r=".5"/></g></svg>
                Desktop
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">D</span>
            </span>`],
            [`<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
                Downloads
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-option-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">L</span>
            </span>`],
            [`<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
                Home
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">H</span>
            </span>`],
            [`<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                </svg>
                Computer
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">C</span>
            </span>`],
            [`<span>
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="13">
                    <path 
                        d="M 25 5 C 13.414063 5 4 14.414063 4 26 C 4 33.917969 8.394531 
                        40.824219 14.878906 44.398438 C 15.363281 44.664063 15.972656 44.488281 
                        16.238281 44.007813 C 16.503906 43.523438 16.328125 42.914063 15.84375 42.644531 
                        C 9.980469 39.414063 6 33.179688 6 26 C 6 15.496094 14.496094 7 25 7 C 35.503906 
                        7 44 15.496094 44 26 C 44 33.179688 40.019531 39.414063 34.15625 42.644531 C 33.671875 
                        42.914063 33.496094 43.523438 33.761719 44.007813 C 34.027344 44.488281 34.636719 44.664063 
                        35.121094 44.398438 C 41.605469 40.824219 46 33.917969 46 26 C 46 14.414063 36.585938 5 25 5 
                        Z M 25 9 C 15.621094 9 8 16.621094 8 26 C 8 32.410156 11.554688 38 16.808594 40.894531 C 
                        17.289063 41.160156 17.898438 40.984375 18.167969 40.5 C 18.433594 40.019531 18.257813 39.410156 
                        17.773438 39.140625 C 13.140625 36.589844 10 31.671875 10 26 C 10 17.703125 16.703125 11 25 11 C 
                        33.296875 11 40 17.703125 40 26 C 40 31.671875 36.859375 36.589844 32.226563 39.140625 C 31.742188 
                        39.410156 31.566406 40.019531 31.832031 40.5 C 32.101563 40.984375 32.710938 41.160156 33.191406 
                        40.894531 C 38.445313 38 42 32.410156 42 26 C 42 16.621094 34.378906 9 25 9 Z M 25 13 C 17.832031 
                        13 12 18.832031 12 26 C 12 30.898438 14.71875 35.175781 18.734375 37.390625 C 19.21875 37.65625 
                        19.828125 37.480469 20.09375 37 C 20.359375 36.515625 20.183594 35.90625 19.703125 35.640625 
                        C 16.304688 33.765625 14 30.160156 14 26 C 14 19.914063 18.914063 15 25 15 C 31.085938 15 36 
                        19.914063 36 26 C 36 30.160156 33.695313 33.765625 30.296875 35.640625 C 29.816406 35.90625 
                        29.640625 36.515625 29.90625 37 C 30.171875 37.480469 30.78125 37.65625 31.265625 37.390625 
                        C 35.28125 35.175781 38 30.898438 38 26 C 38 18.832031 32.167969 13 25 13 Z M 25 17 C 20.042969 
                        17 16 21.042969 16 26 C 16 29.390625 17.882813 32.351563 20.660156 33.886719 C 20.976563 34.0625 
                        21.359375 34.058594 21.667969 33.871094 C 21.976563 33.6875 22.164063 33.351563 22.15625 32.992188 
                        C 22.144531 32.628906 21.945313 32.304688 21.625 32.132813 C 19.464844 30.941406 18 28.648438 18 
                        26 C 18 22.121094 21.121094 19 25 19 C 28.878906 19 32 22.121094 32 26 C 32 28.648438 30.535156 
                        30.941406 28.375 32.132813 C 28.054688 32.304688 27.855469 32.628906 27.84375 32.992188 
                        C 27.835938 33.351563 28.023438 33.6875 28.332031 33.871094 C 28.640625 34.058594 29.023438 
                        34.0625 29.339844 33.886719 C 32.117188 32.351563 34 29.390625 34 26 C 34 21.042969 29.957031 
                        17 25 17 Z M 25 21 C 22.25 21 20 23.25 20 26 C 20 27.882813 21.0625 29.519531 22.597656 30.363281 
                        C 23.082031 30.632813 23.691406 30.457031 23.957031 29.972656 C 24.222656 29.488281 24.046875 
                        28.878906 23.5625 28.613281 C 22.632813 28.097656 22 27.136719 22 26 C 22 24.332031 23.332031 
                        23 25 23 C 26.667969 23 28 24.332031 28 26 C 28 27.136719 27.367188 28.097656 26.4375 28.613281 
                        C 25.953125 28.878906 25.777344 29.488281 26.042969 29.972656 C 26.308594 30.457031 26.917969 
                        30.632813 27.402344 30.363281 C 28.9375 29.519531 30 27.882813 30 26 C 30 23.25 27.75 21 25 
                        21 Z M 25 25 C 24.449219 25 24 25.449219 24 26 C 24 26.550781 24.449219 27 25 27 C 25.550781 
                        27 26 26.550781 26 26 C 26 25.449219 25.550781 25 25 25 Z"/>
                </svg>
                AirDrop
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">R</span>
            </span>`],
            [`<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="currentColor" viewBox="0 0 92 92"><path d="M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm3.7 83.8c-.2 0-.4 0-.7.1V62.2c5.2-.1 9.9-.2 14.2-.5-3.8 11.7-10.9 19.5-13.5 22.1zm-7.4 0c-2.7-2.7-9.7-10.5-13.5-22.1 4.2.3 9 .5 14.2.5v21.7c-.2 0-.4-.1-.7-.1zM8 46c0-2.5.3-5 .7-7.4 2.2-.4 6.4-1 12.3-1.6-.5 2.9-.8 5.9-.8 9.1 0 3.2.3 6.2.7 9-5.8-.6-10.1-1.2-12.3-1.6-.3-2.5-.6-5-.6-7.5zm18.3 0c0-3.4.4-6.6 1-9.6 4.6-.3 9.8-.6 15.7-.6v20.4c-5.8-.1-11.1-.3-15.8-.7-.5-2.9-.9-6.1-.9-9.5zM49.6 8.2c2.7 2.7 9.6 10.7 13.5 22.1-4.2-.3-8.9-.5-14.1-.5V8.1c.2 0 .4.1.6.1zM43 8.1v21.7c-5.2.1-9.9.2-14.1.5 3.8-11.4 10.8-19.4 13.4-22.1.3 0 .5-.1.7-.1zm6 48.1V35.8c5.8.1 11.1.3 15.7.6.6 3 1 6.2 1 9.6 0 3.4-.3 6.6-.9 9.6-4.6.3-9.9.5-15.8.6zM70.9 37c5.9.6 10.1 1.2 12.3 1.6.5 2.4.8 4.9.8 7.4s-.3 5-.7 7.4c-2.2.4-6.4 1-12.3 1.6.5-2.9.7-5.9.7-9.1 0-3-.3-6.1-.8-8.9zm10.5-4.8c-2.8-.4-6.8-.9-11.9-1.4-2.4-8.6-6.6-15.5-10.1-20.4 10.1 3.8 18.1 11.8 22 21.8zM32.6 10.4c-3.6 4.8-7.7 11.7-10.1 20.3-5 .4-9 1-11.9 1.4 3.9-9.9 12-17.9 22-21.7zm-22 49.4c2.8.4 6.8.9 11.8 1.4 2.4 8.6 6.4 15.5 10 20.3-10-3.9-17.9-11.8-21.8-21.7zm49 21.7c3.6-4.8 7.6-11.6 10-20.2 5-.4 9-1 11.8-1.4-3.9 9.8-11.8 17.7-21.8 21.6z"/></svg>
                Network
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">K</span>
            </span>`],
            [`<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                </svg>
                iCloud Drive
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">I</span>
            </span>`],
            [`<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 32 32"><path fill="currentColor" d="M13.951 15.861l1.917-3.34a.527.527 0 0 0-.193-.716l-1.364-.78a.524.524 0 0 0-.714.192l-6.316 11a.522.522 0 0 0 .193.713l1.363.784c.25.143.572.056.716-.192l4.398-7.661zm12.855-1.002h-4.602c.541 1.015 1.044 1.97 1.397 2.646.244.467.438.836.507.96.071.131.123.267.157.405h2.541a.474.474 0 0 0 .474-.473v-3.064a.474.474 0 0 0-.474-.473zm-11.187 0l-2.303 4.011h6.249c-.453-.895-1.054-2.176-1.862-4.011h-2.084zm-5.204 0H5.117a.473.473 0 0 0-.473.473v3.064c0 .261.212.473.473.473h2.995l2.303-4.01zm-2.023 9.456l-1.363-.782c-.25-.143-.481-.026-.514.26l-.236 2.053c-.033.286.135.388.373.226l1.761-1.201c.239-.161.228-.412-.021-.556zm14.886-5.394l-.028-.051c-.127-.234-.444-.844-.861-1.635l-.015-.03-.097-.185-.073-.137-.062-.119-.112-.212-.035-.067a19.522 19.522 0 0 0-.166-.315c-.96-1.816-2.166-4.052-2.91-5.227-1.303-2.06-3.043-5.493-3.529-5.249-.68.339 1.426 4.697 2.122 6.335s3.417 7.913 3.962 8.187c.547.273.757.121 1.121-.029.365-.152 1.017-.656.684-1.264zm1.554 3.233l-.649-1.246a.579.579 0 0 0-.769-.256l-.783.403a.515.515 0 0 0-.193.746l.822 1.298a.59.59 0 0 0 .794.195l.559-.336a.619.619 0 0 0 .22-.804zm-.2 1.805c-.205.196-.691.621-.102 1.447.586.828 1.897.865 2.07 1.414 0 0 .411-4.204-1.968-2.862z"/></svg>
                Applications
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">A</span>
            </span>`],
            [`<span>
            <svg width="13" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 442 442" style="enable-background:new 0 0 442 442;" xml:space="preserve">
                    <g>
                        <path d="M232.307,138.009c-3.904,3.906-3.904,10.237,0.002,14.143s10.238,3.905,14.142-0.002l8.257-8.26
                            c2.97-2.971,3.767-7.481,1.994-11.29c-5.51-11.84-8.304-24.089-8.304-36.408c0-25.079,10.917-48.7,29.331-65.02l0.032,65.461
                            c0.001,3.279,1.611,6.35,4.307,8.217l47.446,32.854c3.423,2.37,7.958,2.372,11.382,0.002l47.463-32.837
                            c2.7-1.868,4.311-4.941,4.311-8.225l-0.007-65.457c18.412,16.305,29.33,39.907,29.336,64.965c0,23.19-9.029,44.993-25.425,61.392
                            c-16.383,16.387-38.159,25.408-61.325,25.408c-0.022,0-0.045,0-0.068,0c-7.971-0.006-23.618-3.865-28.975-5.352
                            c-3.473-0.966-7.199,0.015-9.748,2.563l-30.402,30.403c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929
                            s5.119-0.977,7.071-2.929l26.353-26.354c7.347,1.817,19.976,4.591,28.614,4.597c0.03,0,0.055,0,0.084,0
                            c28.505-0.001,55.307-11.104,75.467-31.268c20.172-20.176,31.281-47,31.281-75.534c-0.009-38.434-20.863-74.074-54.423-93.013
                            c-3.096-1.747-6.887-1.72-9.958,0.073c-3.07,1.793-4.958,5.081-4.957,8.637l0.008,79.557l-37.46,25.916L297.76,91.387
                            l-0.039-79.563c-0.002-3.555-1.891-6.842-4.961-8.633c-3.07-1.792-6.861-1.817-9.957-0.069
                            c-33.557,18.956-54.403,54.618-54.403,93.069c0,12.988,2.48,25.854,7.383,38.343L232.307,138.009z"/>
                        <path d="M205.828,270.797L67.106,409.524c-5.213,5.216-12.143,8.09-19.513,8.095c-0.005,0-0.009,0-0.015,0
                            c-7.368-0.001-14.299-2.873-19.511-8.085c-5.211-5.217-8.077-12.156-8.068-19.541c0.008-7.363,2.879-14.275,8.097-19.476
                            l119.319-119.33c3.905-3.905,3.905-10.236,0-14.142c-3.905-3.904-10.237-3.905-14.142,0.001L13.967,356.364
                            C4.975,365.325,0.015,377.26,0,389.97c-0.015,12.731,4.928,24.699,13.922,33.703c8.994,8.994,20.946,13.946,33.656,13.946
                            c0.009,0,0.018,0,0.026,0c12.711-0.007,24.661-4.964,33.647-13.955L219.97,284.94c3.905-3.905,3.905-10.237,0-14.143
                            C216.064,266.893,209.733,266.893,205.828,270.797z"/>
                        <path d="M47.436,377.851c-3.294,0.002-6.388,1.289-8.672,3.585c-4.807,4.777-4.831,12.583-0.054,17.398
                            c0.012,0.013,0.024,0.024,0.036,0.037c2.395,2.389,5.539,3.585,8.688,3.585c3.156,0,6.317-1.202,8.73-3.61
                            c4.786-4.809,4.772-12.615-0.011-17.383c-2.325-2.33-5.417-3.612-8.709-3.612C47.442,377.851,47.439,377.851,47.436,377.851z"/>
                        <path d="M374.381,327.157c-1.036-1.035-2.286-1.83-3.662-2.33l-28.677-10.398l-103.588-103.59l16.743-16.742
                            c3.905-3.905,3.906-10.237,0-14.143c-2.964-2.962-7.325-3.678-10.963-2.144L87.552,21.146C78.076,11.639,65.456,6.395,52.017,6.379
                            c-0.02,0-0.038,0-0.058,0c-13.439,0-26.071,5.226-35.576,14.72C6.866,30.616,1.629,43.264,1.637,56.714
                            c0.007,13.439,5.248,26.075,14.755,35.577l156.684,156.677c-1.534,3.637-0.82,7.998,2.144,10.962
                            c3.906,3.904,10.238,3.906,14.142,0l16.739-16.739L309.69,346.779l10.399,28.678c0.499,1.376,1.294,2.627,2.33,3.662l58.124,58.123
                            c1.953,1.952,4.512,2.929,7.071,2.929s5.119-0.977,7.071-2.929l37.819-37.819c1.875-1.876,2.929-4.419,2.929-7.071
                            s-1.054-5.195-2.929-7.071L374.381,327.157z M217.239,203.768c-0.021,0.021-0.043,0.044-0.064,0.065L186.7,234.308L30.532,78.147
                            c-5.732-5.729-8.891-13.344-8.895-21.443c-0.004-8.104,3.152-15.726,8.884-21.458c5.725-5.719,13.337-8.866,21.438-8.866
                            c0.012,0,0.024,0,0.035,0c8.093,0.009,15.689,3.165,21.403,8.897l156.175,156.159l-12.268,12.268
                            C217.283,203.725,217.261,203.746,217.239,203.768z M387.614,416.029l-49.48-49.48l-10.399-28.678
                            c-0.499-1.376-1.294-2.627-2.33-3.662l-105.161-105.16l4.068-4.067l105.16,105.161c1.036,1.035,2.286,1.83,3.662,2.33
                            l28.677,10.398l49.48,49.48L387.614,416.029z"/>
                        <path d="M58.981,49.573c-3.905-3.904-10.237-3.904-14.142,0c-3.905,3.905-3.905,10.237,0,14.143l137.951,137.95
                            c1.952,1.952,4.512,2.929,7.071,2.929s5.119-0.977,7.071-2.929c3.905-3.905,3.905-10.237,0-14.143L58.981,49.573z"/>
                    </g>
                </svg>
                Utilities
            </span>`,
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">U</span>
            </span>`, 
            "border-bottom:1px solid white;"],
            ["<span>Recent Folders</span>",
            `<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Go to Folder...</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">G</span>
            </span>`],
            ["<span>Connect to Server...</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">K</span>
            </span>`],
        ]
    },
    {
        name:"Window",
        elements:[
            ["<span>Minimise</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">M</span>
            </span>`],
            ["<span>Zoom</span>",`<span></span>`],
            ["<span>Move Window to Left Side of Screen</span>",`<span></span>`],
            ["<span>Move Window to Right Side of Screen</span>",`<span></span>`],
            ["<span>Cycle Throught Windows</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">\´</span>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>Show Previous Tab</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-control-command.svg">
                <img width=13 height=13 src="./mac-icons/mac-shift-command.svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </span>`],
            ["<span>Show Next Tab</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-control-command.svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </span>`],
            ["<span>Move Tab to New Window</span>",`<span></span>`],
            ["<span>Merge All Windows</span>",`<span></span>`,"border-bottom:1px solid white;"],
            ["<span>Bring All to Front</span>",`<span></span>`,"border-bottom:1px solid white;"],
            [`<span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="currentColor" class="bi bi-suit-diamond" viewBox="0 0 16 16">
                    <path d="M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.537.537 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.537.537 0 0 0 0-.612l-4.56-6.468zM6.848.613a1.39 1.39 0 0 1 2.304 0l4.56 6.468a1.61 1.61 0 0 1 0 1.838l-4.56 6.468a1.39 1.39 0 0 1-2.304 0L2.288 8.92a1.61 1.61 0 0 1 0-1.838L6.848.613z"/>
                </svg>
                Downloads
            </span>`,
            `<span></span>`]
        ]
    },
    {
        name:"Help",
        elements:[
            [`<input type="text" placeholder="Search" style="padding-left:5px;margin:0;height:30px;width:100%;text-align:start;">`, "<span></span>"],
            ["<span>macOS Help</span>",
            `<span>
                <img width=13 height=13 src="./mac-icons/mac-command.svg">
                <span style="display:inline-block;transform:translateY(-2px)">?</span>
            </span>`,
            "border-bottom:1px solid white;"],
            ["<span>See What´s New in macOS</span>",`<span></span>`],
            ["<span>New to Mac? Tour the Basics</span>",`<span></span>`],
            ["<span>Get to know your Mac</span>",`<span></span>`],
        ]
    },
]

export {headerapps}