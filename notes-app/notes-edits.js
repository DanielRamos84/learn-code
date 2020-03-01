const noteId= location.hash.substring(1)
const notes= getSavedNotes()

const note= notes.find (note=>{
    return note.id===noteId
})

if (note === undefined){
    location.assign('/index.html')
}

const noteTitle= document.getElementById("note-title")
noteTitle.addEventListener('input', function(e){
    note.title= e.target.value
    localStorage.setItem('notes', JSON.stringify(notes))
})

const textBody= document.getElementById("text-body")
textBody.addEventListener('input', function(e){
    note.body= e.target.value
    localStorage.setItem('notes', JSON.stringify(notes))
    getSavedNotes(notes)
})

const remBtn= document.getElementById("remove-note")
remBtn.addEventListener('click', function (e){
    removeNote(note.id)
    location.assign('/index.html')
    getSavedNotes(notes)
})
