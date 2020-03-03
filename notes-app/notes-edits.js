const noteId= location.hash.substring(1)
let notes= getSavedNotes()

let note= notes.find (note=>{
    return note.id===noteId
})

if (note === undefined){
    location.assign('/index.html')
}

const noteTitle= document.getElementById("note-title")
noteTitle.value= note.title
noteTitle.addEventListener('input', function(e){
    note.title= e.target.value
    saveNotes(notes)
})

const textBody= document.getElementById("text-body")
textBody.value= note.body
textBody.addEventListener('input', function(e){
    note.body= e.target.value
    saveNotes(notes)
})

const remBtn= document.getElementById("remove-note")
remBtn.addEventListener('click', function (e){
    removeNote(note.id)
    location.assign('/index.html')
    saveNotes(notes)
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
         notes= JSON.parse(e.newValue)
         note= notes.find (note=>{
            return note.id===noteId
        })
        
        if (note === undefined){
            location.assign('/index.html')
        }
        
        noteTitle.value= note.title
        textBody.value= note.body
}
})
