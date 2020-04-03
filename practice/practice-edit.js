const carTitle= document.getElementById('car-title')
const carBody= document.getElementById('car-body')

const removeNoteBtn= document.createElement('button')
removeNoteBtn.textContent= 'Delete note'
document.querySelector('body').appendChild(removeNoteBtn)

const vehicleId= location.hash.substring(1)
let vehicles= getSavedNotes()
let find= vehicles.find(entry=>{
    return entry.id === vehicleId
})

if (find === undefined){
    location.assign('/index.html')
}

carTitle.value= find.input
carBody.value= find.body

carTitle.addEventListener('input', function(e){
    find.input=  e.target.value
    saveVehicles(vehicles)
})

carBody.addEventListener('input', function(e){
    find.body=  e.target.value
    saveVehicles(vehicles)
})

removeNoteBtn.addEventListener('click', function(e){/*==>functions.js:15 Uncaught ReferenceError: vehicleArray is not defined
    at removeEntry (functions.js:15)
    at HTMLButtonElement.<anonymous> (practice-edit.js:32)*/
    this.remove()
    saveVehicles(vehicles)
    location.assign('/index.html')
})

window.addEventListener('storage', function(e){
    if (e.key=== 'keysSaved'){//This is the key we car about when value changes
        vehicles= JSON.parse(e.newValue) //From debugger we extract newValue
        find= vehicles.find(entry=>{
            return entry.id === vehicleId
        })
        
        if (find === undefined){
            location.assign('/index.html')
        }
        
        carTitle.value= find.input
        carBody.value= find.body
    }
})
