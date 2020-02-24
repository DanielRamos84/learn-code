//Read exisiting notes from localStorage
const getSavedNotes= function(){
const notesJSON= localStorage.getItem('notes')
if (notesJSON !==null){
  return JSON.parse(notesJSON) // return keyword inserted
} else {
  return [] // return keyword inserted
}
}

// Generate the DOM structure for a note
const generateDomNote= function(note){
const createEl= document.createElement('div')
const noteEl= document.createElement('span')
const button= document.createElement('button')
//Setup the remove note button
button.textContent= 'x'
createEl.appendChild(button)

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
