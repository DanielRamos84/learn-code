const notes= getSavedNotes()

const filters={
searchText: ''
}

renderNotes(notes, filters)

document.getElementById("create-note").addEventListener('click', function(e){
  const createNoteIdBtn= uuidv4()
  notes.push({
    id: createNoteIdBtn,
    title: '',
    body: ''
  })
localStorage.setItem('notes', JSON.stringify(notes))
location.assign(`/edit.html#${createNoteIdBtn}`)
})

document.getElementById("search-text").addEventListener('input', function(e){
filters.searchText= e.target.value
renderNotes(notes, filters)
})

document.getElementById("filter-by").addEventListener('change', function(e){
console.log(e.target.value)
})
