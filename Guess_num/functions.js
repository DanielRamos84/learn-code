const userTallyTotal= localStorage.getItem('userWinsTotal')
const computerTallyTotal= localStorage.getItem('computerWinsTotal')

let userWinsTotal
let computerWinsTotal

const userGuess= (userNumber)=>{
    let message=''
    // if (userTallyTotal==null || computerTallyTotal==null){
    //     userWinsTotal= 0
    //     computerWinsTotal= 0
    //     } else {
        userWinsTotal= userTallyTotal  
        computerWinsTotal= computerTallyTotal
        console.log(userWinsTotal)
        console.log(computerWinsTotal)
    // }
    
    let numberChoice= userNumber
    const randomNum= Math.floor(Math.random()*1)
    numberChoice= parseInt(numberChoice, 10)

    if (isNaN(numberChoice)){
        message+= 'This is not a number, try again.'
        displayResult(message)
        resetField()
        return
    }
    
    if (numberChoice===randomNum) {
        userWinsTotal++
        localStorage.setItem('userWinsTotal', userWinsTotal)
        message+= `You won! You guessed: ${numberChoice} and the computer guessed: ${randomNum}`
    } else {
        computerWinsTotal++
        localStorage.setItem('computerWinsTotal', computerWinsTotal)
        message+= `Sorry Try Again! You guessed: ${numberChoice} and the computer guessed: ${randomNum}`
    }
        resetField()
        displayResult(message)
        countWins(userWinsTotal,computerWinsTotal)
}

const displayResult= (message)=>{    
    const displayResultEl= document.createElement('h2')
    displayResultEl.textContent= message
    document.getElementById('result-section').appendChild(displayResultEl)
}

const countWins= (userWinsTotal, computerWinsTotal)=>{   
    console.log(userWinsTotal)
    console.log(computerWinsTotal)
    const countWinsEl= document.createElement('h2')
    countWinsEl.textContent= `User Total Win: ${(userWinsTotal)} Computer Total Win: ${computerWinsTotal}`
    document.getElementById('count-section').appendChild(countWinsEl)
}

const resetField= ()=>{
    enterValue.value=''
    enterValue.focus()
}

countWins (userTallyTotal, computerTallyTotal)