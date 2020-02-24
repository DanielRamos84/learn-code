const filters={
searchText: ''
}

renderNotes(notes, filters)

document.getElementById("create-note").addEventListener('click', function(e){
  notes.push({
    title: '',
    body: ''
  })
localStorage.setItem('notes', JSON.stringify(notes))
renderNotes(notes, filters)
})

document.getElementById("search-text").addEventListener('input', function(e){
filters.searchText= e.target.value
renderNotes(notes, filters)
})

document.getElementById("filter-by").addEventListener('change', function(e){
console.log(e.target.value)
})
