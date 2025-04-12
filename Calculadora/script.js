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

addEventListener('keydown', function(event){
    if(event.key >= '0' && event.key <= '9' ) {
        insert(event.key)
    } if(event.key === '-' || event.key === '+' || event.key === '*' || event.key === '/'){
        insert(event.key)
    } if(event.key === ',' || event.key === '.'){
        insert('.')
    } if(event.key === 'Backspace'){
        back()
    } if(event.key === 'Delete'){
        clean()
    } if(event.key === 'Enter' || event.key === '='){
        calc()
    }
})