const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const creatTodo = () => {
    const div = document.createElement('div')
    const text = document.createElement('h3')
    const divButtons = document.createElement('div')
    const deleteButton = document.createElement("button")
    const editButton = document.createElement('button')


    div.setAttribute('class','block_text')
    divButtons.setAttribute('class','div_buttons')
    deleteButton.setAttribute('class', 'delete_button')
    editButton.setAttribute('class','edit_button')

    text.setAttribute('class','text')
    text.addEventListener('click', () =>{
        text.classList.toggle('no_text')
    })

    deleteButton.innerHTML = 'delete'
    deleteButton.onclick =()=> div.remove()


    editButton.innerHTML = 'edit'
    editButton.onclick =()=> {
        const editText = prompt(`Edit ${text.innerHTML}`).trim()
        editText === '' ? alert('поле не должно быть пустым'): text.innerHTML = editText
    }



    text.innerHTML = input.value
    const addText = input.value.trim()
    if (addText === '') {
        alert('поле не должно быть пустым')
        return
    }

    input.value = ''


    divButtons.append(deleteButton,editButton)
    div.append(text, divButtons)
    todoList.prepend(div)

}

createButton.onclick = () => creatTodo()
window.addEventListener('keydown',(event)=>{
    if (event.code === 'Enter'){
        creatTodo()
    }
})


















