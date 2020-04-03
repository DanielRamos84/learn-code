//Begin check if data avaiable in localStorage set array to use this data
const getSavedNotes= function (){
    const userSaved= localStorage.getItem('keysSaved')
    if (userSaved!==null) {
         return JSON.parse(userSaved) //Note we no longer make assignment to vehicleArray but instead we return value to the function so it can be called in a different file
    } else {
         return [] //Note we no longer set vehicleArray to empty object but instead we return value to the function so it can be called in a different file
    }
    }
    //End check if data avaiable in localStorage set array to use this data

const saveVehicles = vehicleArray => localStorage.setItem('keysSaved', JSON.stringify(vehicleArray))

const removeEntry= function(id){
    const entryIndex= vehicleArray.findIndex(function(entry){
    return entry.id===id
    })
        if (entryIndex>-1){
            vehicleArray.splice(entryIndex, 1)
        }
}

const toggleCheck= function(id){
    const toggleFind= vehicleArray.find(entry=>{
        return entry.id === id    
    })
    if(toggleFind !== undefined){
        toggleFind.inStock= !toggleFind.inStock
    }    
}
