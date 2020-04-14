const sortBy= document.getElementById('sort-by')
const listItems= document.getElementById('list-items')

//Generate DOM entry when submit is clicked
const generateDomElement= function(getData){
    listItems.innerHTML= ''
    userArray.forEach(entry=>{
        const displayDate= moment(entry.updateTime).fromNow()
        const paragraph= document.createElement('p')/*If I don't incorporate a p element then my text is displays as hipyerlink but all in one line*/
        const pEntry= document.createElement('a')
        pEntry.setAttribute('href', `/edit.html#${entry.id}`)
        pEntry.textContent= entry.text
        listItems.appendChild(pEntry)
        pEntry.appendChild(paragraph)
        console.log(`Last updated ${displayDate}`)
    }) 
}

/*Filter data as user types into Enter Text box
and render data of that array we are filtering from*/
const filterData= function (userArray, filters){
    listItems.innerHTML= ''
    const filterArray= userArray.filter(entry=>{
        return entry.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filterArray.forEach(entry=>{
        const paragraph= document.createElement('p')
        const pEntry= document.createElement('a')
        pEntry.setAttribute('href', `/edit.html#${entry.id}`)
        pEntry.textContent= entry.text
        listItems.appendChild(pEntry)
        pEntry.appendChild(paragraph)
     }) 
}
//Save array data
const saveData= function(userArray){
    localStorage.setItem('keySaved', JSON.stringify(userArray))
}

// Grab localStorage and display that information
const renderData= userArray.forEach(entry=>{
        generateDomElement(entry)
    })

    
    