function loading (start, screenwidth, loadingElements, loadingScreen, progresBarElement, header){
    if (start == 0) {
        start = 1;
        let width = 1
        let time = setInterval(move, 10)
        function move(){
            if (width >= 100 ){
                clearInterval(time)
                start = 0
                loadingElements.style.display = "none"
                loadingScreen.style.display = "block"
                if (screenwidth > 1024 ){
                    header.style.background = "rgb(0, 49, 95)"
                }
            } else {
                width++
                progresBarElement.style.width = width +"%"
            }
        }
    }
}

export {loading}