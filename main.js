const input = document.querySelector('.input')
const container = document.querySelector('.container')
const removeBtn = document.querySelector('.removeBtn')
const addBtn = document.querySelector('.addbutton')

let out = document.getElementById('out')

addBtn.addEventListener('click', add)

removeBtn.addEventListener('click', remove)

function add(){

    let firstName = document.getElementById('firstName').value
    out.innerHTML  =   out.innerHTML + `<p>${firstName}</p>`
    
}

function remove(){
    out.style.display = 'none';
}
