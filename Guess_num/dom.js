const submitNumber= document.getElementById('submit-number')
const enterValue= document.getElementById('enter-value')
const resultSection= document.getElementById('result-section')
const countSection= document.getElementById('count-section')
const resetButton= document.getElementById('reset-button')

submitNumber.addEventListener('click', function(e){
    e.preventDefault()
    resultSection.textContent=''
    countSection.textContent=''
    const userNumInput= enterValue.value.trim()
    userGuess(userNumInput)
})

resetButton.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.clear()
    countSection.textContent=''
    resultSection.textContent=''
    resetField()
    countWins(0,0)
})
