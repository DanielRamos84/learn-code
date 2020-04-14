const deleteAll= document.getElementById('del-all')
const enterText= document.getElementById('enter-text')
const submitButton=document.getElementById('submit-button')

let userArray=[]
const getData= JSON.parse(localStorage.getItem('keySaved'))

if (getData !== null){
    userArray= getData
} else {
    userArray=[]
}

const filters= {
    searchText: ''
}

submitButton.addEventListener('click', function(e){
    e.preventDefault()
    const timeStamp= moment().valueOf()
    const id= uuidv4()
    userArray.push({
        text: enterText.value,
        textArea: '',
        actualTime: timeStamp,
        updateTime: timeStamp,
        id: id
    })
    location.assign(`/edit.html#${id}`)
    enterText.value= ''
    enterText.focus()
    saveData(userArray)
})

deleteAll.addEventListener('click', function(e){
    localStorage.clear()
    userArray= ''
    listItems.innerHTML= ''
})

enterText.addEventListener('input', function(e){
    filters.searchText= e.target.value
    filterData(userArray, filters)    
})

//Sync data across pages
window.addEventListener('storage', function(e){
    if (e.key==='keySaved')
    userArray= JSON.parse(e.newValue)
    generateDomElement(userArray)//See functions.js
})

