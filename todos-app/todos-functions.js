//Check for data in localStorage
const checkStoredTodos= function(){
const storedTodos= JSON.parse(localStorage.getItem('todos'))

if(storedTodos !== null){
    return storedTodos
} else {
    return []
}
}

//Save todos data
const saveTodos= function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render application based on filters
const renderTodos= function(todos, filters){
    let filterTodos= todos.filter(todo=>{
        return todo.text.toLowerCase().includes(filters.searchFilter.toLowerCase())
    })

    filterTodos= filterTodos.filter(todo=>{
        if(filters.hideCompleted){
            return !todo.completed 
        } else {
            return true
        }
    })

    const incompleteTodos= filterTodos.filter(todo=>{
        return !todo.completed
    }) 

    document.getElementById("todos").innerHTML=''
        
    filterTodos.forEach(todo=>{
        const newDiv= document.createElement('div')
        const createEl= document.createElement('span')

        //Setup todo checkbox
        const createCheckbox= document.createElement('input')
        createCheckbox.setAttribute('type', 'checkbox')      
        
        createEl.textContent= todo.text
    
        const removeButton= document.createElement('button')
        removeButton.textContent= 'x'
        
        document.getElementById("todos").appendChild(newDiv)
        newDiv.appendChild(createCheckbox)
        newDiv.appendChild(createEl)
        newDiv.appendChild(removeButton)
    })
}

//Get the DOM elements for an individual note
const generateTodoDom= function(todos){
document.getElementById("my-form").addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.formTodo.value,
        completed: false
    })
    saveTodos(todos)
    e.target.elements.formTodo.value= ''
    renderTodos(todos,filters)
})
}

const generateSummaryDOM= function(incompleteTodos){
    const newEl= document.createElement('h2')
    newEl.textContent= `You have: ${incompleteTodos.length} items left to do`
    return newEl
}
