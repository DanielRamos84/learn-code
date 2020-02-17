const notes= [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
    }, {
    title: 'Habits to work on',
    body: 'Excercise. Eating a bit better'
    }, {
    title: 'Office modification',
    body: 'Get a new office seat'
    }, {
    title: 'Aquire new knowledge everyday',
    body: 'Daily work in progress'
  }]

const filters={
  searchText: ''
}

const renderNotes= function(notes, filters){
  const filteredNotes= notes.filter(note=>{
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.getElementById("notes").innerHTML=''
  filteredNotes.forEach(note=>{
    const createEl= document.createElement('p')
    createEl.textContent= note.title
    document.getElementById("notes").appendChild(createEl)
  })
}

renderNotes(notes, filters)

document.getElementById("create-note").addEventListener('click', function(e){
  console.log('add')
  e.target.textContent= 'You have create a note'
})

document.getElementById("search-text").addEventListener('input', function(e){
  filters.searchText= e.target.value
  renderNotes(notes, filters)
})

document.getElementById("name-form").addEventListener('submit', function(e){
  e.preventDefault()
  console.log(e.target.elements.firstName.value)
  e.target.elements.firstName.value= ''
})