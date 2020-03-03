//Read exisiting notes from localStorage
const getSavedNotes= function(){
const notesJSON= localStorage.getItem('notes')
if (notesJSON !==null){
  return JSON.parse(notesJSON) // return keyword inserted
} else {
  return [] // return keyword inserted
  }
}

// Save the notes to localStorage
const saveNotes= function(notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

//Remove a note from the list
const removeNote= function(id){
  const noteIndex= notes.findIndex (note=>{
    return note.id === id
  })
  if (noteIndex > -1){
    notes.splice(noteIndex, 1)
  }
}

// Generate the DOM structure for a note
const generateDomNote= function(note){
const createEl= document.createElement('div')
const noteEl= document.createElement('a')

//Crete individual id for achor tag for each note
noteEl.setAttribute('href', `/edit.html#${note.id}`)
const button= document.createElement('button')

//Setup the remove note button and event handler
button.textContent= 'x'
createEl.appendChild(button)

//Wire up event listener to delete unique entry by id, update localStorage and re render
button.addEventListener('click', function(e){
  removeNote(note.id)
  saveNotes(notes)
  renderNotes(notes,filters)
})

//Setup the note title text
  if (note.title.length > 0){
    noteEl.textContent= note.title
  } else {

    noteEl.textContent= 'Unnamed note'
  }
  createEl.appendChild(noteEl)
  return createEl
}


// Render application notes
const renderNotes= function(notes, filters){
    const filteredNotes= notes.filter(note=>{
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.getElementById("notes").innerHTML=''
    
    filteredNotes.forEach(note=>{
      const createEl= generateDomNote(note)
      document.getElementById("notes").appendChild(createEl)
    })
    }
