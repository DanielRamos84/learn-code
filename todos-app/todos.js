const todos= [{
    text:'Order cat food',
    completed: false
}, {
    text:'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed:  true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Excercise',
    completed:true
}]

const filters= {
    searchFilter:'',
    hideCompleted: false
}

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

    document.getElementById("todos").innerHTML=''

    const incompleteTodos= filterTodos.filter(todo=>{
        return !todo.completed
    })      

    const newEl= document.createElement('h2')
    newEl.textContent= `You have ${incompleteTodos.length} items left to do`
    document.getElementById("todos").appendChild(newEl)
    
    filterTodos.forEach(todo=>{
        const createEl= document.createElement('p')
        createEl.textContent= todo.text
        document.getElementById("todos").appendChild(createEl)
    })    
}

renderTodos(todos,filters)

document.getElementById("search-text").addEventListener('input', function(e){  
    filters.searchFilter= e.target.value
    renderTodos(todos,filters)
})

document.getElementById("my-form").addEventListener('submit', function(e){
    e.preventDefault()
        todos.push({
        text: e.target.elements.formTodo.value,
        completed: false
    })
    renderTodos(todos,filters)
    e.target.elements.formTodo.value= ''
})
  
document.getElementById("hide-done").addEventListener('change', function(e){
    filters.hideCompleted= e.target.checked
    renderTodos(todos,filters)
})
