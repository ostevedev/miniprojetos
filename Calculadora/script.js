let result = document.getElementById('calc')

function insert(num) {
    result.innerHTML += num
}

function back(){
    let volta = document.getElementById('calc').innerHTML
    document.getElementById('calc').innerHTML = volta.substring(0, volta.length -1)
}

function clean(){
    result.innerHTML = ""
}

function calc(){
    let total = document.getElementById('calc').innerHTML
    if(total){
    document.getElementById('calc').innerHTML = eval(total)
    } else{
        alert('Erro')
    }
}