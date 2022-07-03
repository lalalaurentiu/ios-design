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

export {hour}