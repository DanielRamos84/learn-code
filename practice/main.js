const inputVehicle= document.getElementById('input-vehicle')
const addVehicleBtn= document.getElementById('add-vehicle')
const clearAll= document.getElementById('clear-all')
const mainContainer= document.createElement('div')

const vehicleArray= getSavedNotes()//See functions.js

addVehicleBtn.addEventListener('click', function(){
    const idAssign= uuidv4() 
    vehicleArray.push({
        input: inputVehicle.value,
        body: '',
        id: idAssign,
        inStock: true
    })
    saveVehicles(vehicleArray)
    inputVehicle.value= ''
    location.assign(`/edit.html#${idAssign}`)
})

//Empty array to use for filtering data
const filters= {
    searchText: ''
} 

//Main function to render info on DOM
const renderData= function(vehicleArray){//IF I PASS FILTERS AS ARGUMENT THEN I GET ERROR 
    // main.js:39 Uncaught TypeError: Cannot read property 'searchText' of undefined
    // at main.js:39
    // at Array.filter (<anonymous>)
    // at renderData (main.js:38)
    // at HTMLButtonElement.<anonymous> (main.js:23)
    const filterVehicle= vehicleArray.filter(entry=>{
        return entry.input.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    mainContainer.innerHTML=''
    
    //Display how many vehicles available  work on page refresh if 0 cars in array I want message "you don't have any cars" to automatically show up
    const inStockMessage= vehicleArray.filter (function(vehicle){
        return vehicle.inStock
    })
    
    const inStockEntry= document.createElement('h2')
    if (inStockMessage.length===0){
        const betterWork= document.createElement('h2')
        betterWork.textContent= "You don't have any cars at the moment, get some!"
        mainContainer.appendChild(betterWork)
    } else {
        inStockEntry.textContent= `You currently have the following vehicle in inventory: ${inStockMessage.length}`
    mainContainer.appendChild(inStockEntry)  
    }

    //Create the buttons and text
    vehicleArray.forEach(entry=>{  
        const container= document.createElement('div')   

        //Create checkbox and initialize
        const createCheckbox= document.createElement('input')
        createCheckbox.setAttribute('type', 'checkbox')

        //Setup checkbox state
        createCheckbox.checked= entry.inStock

        //Listen for toggle on checkbox
        createCheckbox.addEventListener('change', function(e){
            toggleCheck(entry.id)
            saveVehicles(vehicleArray)
            renderData(vehicleArray, filters)
        })

        //Create text entry
        const createElement= document.createElement('a')
        createElement.setAttribute ('href', `/edit.html#${entry.id}`)
        createElement.textContent= entry.input
         
        //Create delete button
        const delBtn= document.createElement('button')
        delBtn.textContent= 'x'
        
        //Listen for button click to remove entry
        delBtn.addEventListener('click', function(e){
            removeEntry(entry.id)
            saveVehicles(vehicleArray)
            renderData(vehicleArray)
        })     

        document.querySelector('body').appendChild(mainContainer)
        mainContainer.appendChild(container)
        container.appendChild(createCheckbox)
        container.appendChild(createElement)
        container.appendChild(delBtn)

        saveVehicles(vehicleArray)
        inputVehicle.value= ''
        inputVehicle.focus()    
    })   
}

renderData(vehicleArray, filters)
removeEntry(vehicleArray)//See functions.js

//Filter data
inputVehicle.addEventListener('input', function(e){
    filters.searchText= e.target.value
    // renderData(vehicleArray, filters)  ==>>> WHY IF I UNCOMMENT THIS I'M NOT ABLE TO TYPE ANYTHING IN INPUT FIELD???
})

// Event Listener to clear localStorage and remove rendered info from DOM
clearAll.addEventListener('click', function(e){
    localStorage.clear()
    mainContainer.innerHTML= ''
    vehicleArray= []
})

//Things that need work FILTERING
//Render message when both page refreshed and there's no items and when you clear main div.. Message get to work find cars
//Being able to toggle the chechbox, retain status and have page modify message count
