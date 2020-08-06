const counterItems= document.getElementsByClassName('counter-Items')
const itemCheckBox =  document.getElementsByClassName('checkbox')
const removeBtn= document.getElementById('remove-button')
const btnCheckout= document.getElementById('btn-checkout')

let total = JSON.parse(localStorage.getItem('myValue'))
document.getElementById('total-text').innerText = total

retrieveDOMElementsState()

btnCheckout.addEventListener('click', onClickBtnCheckout)
function onClickBtnCheckout () {
    location.assign("/Checkout.html")
}

function retrieveDOMElementsState() {
    let saveChkBxState= JSON.parse(localStorage.getItem('saveChkBxState')) || []
    let inputFieldStoreValue= JSON.parse(localStorage.getItem('inputFieldStoreValue')) || []
    Array.from(itemCheckBox).forEach((itemCheckBoxItem, aIndex)=> {
        saveChkBxState.forEach((saveChkBxStateItem, bIndex) => {
            saveChkBxStateItem===true && aIndex===bIndex ? itemCheckBoxItem.setAttribute('checked', true) : false          
        })
        return retrieveDOMElementsState
})

    Array.from(counterItems).forEach((counterItemsItems, aIndex)=>{
        Array.from(inputFieldStoreValue).forEach((inputFieldStoreValueItem, bIndex)=>{
            aIndex===bIndex ? counterItemsItems.value= inputFieldStoreValueItem : false
        })
    })
}

Array.from(counterItems).forEach(item=> {
    item.addEventListener('change', onFieldChange) 
})

Array.from(itemCheckBox).forEach(item=> {
        item.addEventListener('change', onCheckBoxChange)
})

function onCheckBoxChange (e) {
    let checkbox = e.target
    let inputField = checkbox.nextElementSibling
    let price = checkbox.value
    let quantity = inputField.value
    calcTotal(price, quantity, e.target.checked)
    updateTotal() 
}

function onFieldChange(e){
    let saveChkBxState= Array.from(itemCheckBox).map(item=>{
        return item.checked
    })
    localStorage.setItem('saveChkBxState', JSON.stringify(saveChkBxState))

    let inputFieldStoreValue= Array.from(itemCheckBox).map(item=>{
        return item.nextElementSibling.value
     })
    localStorage.setItem('inputFieldStoreValue', JSON.stringify(inputFieldStoreValue))

    let inputField = e.target;
    let checkbox = inputField.previousElementSibling;
    let quantity = parseInt(inputField.value);
    if(quantity < 0 || quantity > 10){
      quantity = inputField.value = 0; 
    }
    inputField.value = quantity;
    if(checkbox.checked){
      let price = checkbox.value;
      let prevValue = inputField.prevValue;
      calcTotal(price, prevValue, false);
      calcTotal(price, quantity, true);
      updateTotal();
    }
    inputField.prevValue = quantity;
}

function calcTotal(price, quantity, add=true){
    price = price || 0;
    quantity = quantity || 0;
    if(add){
      total+=(price*quantity);
    }else{
      total-=(price*quantity);
    }
    localStorage.setItem('myValue', JSON.stringify(total))
}

function updateTotal(){
  document.getElementById('total-text').innerText = total;
}

removeBtn.addEventListener('click', onClickRemove)
function onClickRemove () {
    localStorage.clear()
    total= 0
    updateTotal();
    Array.from(itemCheckBox).forEach(item=>{
        item.checked= false
    })
    Array.from(counterItems).forEach(item=>{
        item.value= ''
    })
    
    
}