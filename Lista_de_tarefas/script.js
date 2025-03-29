let addtask = document.getElementById('iadd')
let add = document.getElementById('ibadd')
let main = document.getElementById('ilist')
let counter = 0

function newtask(){
    let task = addtask.value
    if((task !=="") && (task !==null) && (task !==undefined)){
        ++counter

        let newtask = `<div id="${counter}" class="item">
            <div id="iicon" class="itemicon" onclick="checked(${counter})">
                &#x2610
            </div>
            <div class="itemname" onclick="checked(${counter})">
                ${task}
            </div>
            <div class="itembuttom" onclick="delet(${counter})">
                &#X1F5D1 Deletar
            </div>
        </div>`

        main.innerHTML += newtask 
        addtask.value =""
        addtask.focus();
    }
}

function delet(id){
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function checked(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    let icon = document.getElementById('iicon')
    
    if(classe == "item"){
        item.classList.add('itemchecked')

        icon.innerHTML = "&#x1F5F9"
    } else {
        item.classList.remove('itemchecked')

        icon.innerHTML = "&#x2610"
        console.log(icon)
    }
}

addtask.addEventListener('keypress', function(event){
    if(event.key === 'Enter') {
        add.click()
    }
})