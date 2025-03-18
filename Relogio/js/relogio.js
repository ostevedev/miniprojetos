function hour(){
    setInterval(function(){
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(date.getSeconds() < 10){
        sec = "0"+date.getSeconds()
    } if(date.getMinutes() < 10){
        min = "0"+date.getMinutes()
    } if(date.getHours() < 10){
        hour = "0"+date.getHours()
    } let thour = document.getElementById("icron")
    thour.innerHTML = `${hour}:${min}:${sec}`
}, 100)
}