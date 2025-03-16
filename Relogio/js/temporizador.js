let time = document.getElementById("icron")
let sec = 0
let min = 0
let hour = 0 

function startcr() {

    cronom = setInterval(function(){
        sec--
        if(sec > 9){
            time.innerHTML = `0${hour}:0${min}:${sec}`
        }
        if(sec < 0){
            sec = 59
            min--
            time.innerHTML = `0${hour}:0${min}:${sec}`
        }
        if(min > 9){
            time.innerHTML = `0${hour}:${min}:${sec}`
        }
        if(min > 0){
            min = 59
            hour--
            time.innerHTML = `0${hour}:${min}:${sec}`
        }
        if(hour > 9){
            time.innerHTML = `${hour}:${min}:${sec}`
        }

    }, 1000)
}

function pausecr(){
    clearInterval(cronom);
}

function stopcr(){
    clearInterval(cronom);
    time.innerHTML = `00:00:00`
    milisec.innerHTML =`,00`
    Milisec = 0
    sec = 0
    min = 0
    hour = 0 
}