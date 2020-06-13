const submitNumber= document.getElementById('submit-number')
const enterValue= document.getElementById('enter-value')
const resultSection= document.getElementById('result-section')
const countSection= document.getElementById('count-section')

submitNumber.addEventListener('click', function(e){
    e.preventDefault()
    resultSection.textContent=''
    countSection.textContent=''
    const userNumInput= enterValue.value.trim()
    userGuess(userNumInput)
})