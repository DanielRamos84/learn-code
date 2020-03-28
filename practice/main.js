const inputVehicle= document.getElementById('input-vehicle')
const addVehicleBtn= document.getElementById('add-vehicle')
const clearAll= document.getElementById('clear-all')
const mainContainer= document.createElement('div')

let vehicleArray =[]

//Begin check if data avaiable in localStorage set array to use this data
const userSaved= localStorage.getItem('keysSaved')
if (userSaved!==null) {
     vehicleArray= JSON.parse(userSaved)
} else {
     vehicleArray=[]
}
//End check if data avaiable in localStorage set array to use this data

addVehicleBtn.addEventListener('click', function(){
    vehicleArray.push({
        input: inputVehicle.value,
        id: moment.now(),
        inStock: true
    })
    renderData(vehicleArray)
})

//Empty array to use for filtering data
const filters= {
    searchText: ''
} 

//Save to localStorage
const saveVehicles = vehicles=>{
    localStorage.setItem('keysSaved', JSON.stringify(vehicleArray))
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
    console.log('match')
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
        const createCheckbox= document.createElement('input')
        const createElement= document.createElement('span')
        const delBtn= document.createElement('button')

        createCheckbox.setAttribute('type', 'checkbox')
        createElement.textContent= entry.input
        delBtn.textContent= 'x'

        document.querySelector('body').appendChild(mainContainer)
        mainContainer.appendChild(container)
        container.appendChild(createCheckbox)
        container.appendChild(createElement)
        container.appendChild(delBtn)


    delBtn.addEventListener('click', function(e){
        removeEntry(entry.id)
        })
    })
    saveVehicles(vehicleArray)
    inputVehicle.value= ''
    inputVehicle.focus()    
}

renderData(vehicleArray, filters)

const removeEntry= function(id){
    const entryIndex= vehicleArray.findIndex(function(entry){
        return entry.id===id
    })
    if (entryIndex>-1){
        vehicleArray.splice(entryIndex, 1)
    }
    saveVehicles(vehicleArray)
    renderData(vehicleArray)
}

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