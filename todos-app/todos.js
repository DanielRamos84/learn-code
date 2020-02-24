let todos= checkStoredTodos()

const filters= {
    searchFilter:'',
    hideCompleted: false
}

renderTodos(todos,filters)

document.getElementById("search-text").addEventListener('input', function(e){  
    filters.searchFilter= e.target.value
    renderTodos(todos,filters)
})

generateTodoDom(todos)

document.getElementById("hide-done").addEventListener('change', function(e){
    filters.hideCompleted= e.target.checked
    renderTodos(todos,filters)
}) 
