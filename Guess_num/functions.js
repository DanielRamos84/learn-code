let userTallyTotal
let computerTallyTotal 

const userGuess= (userNumber)=>{
    let message=''
    localStorage.getItem('userWinsTotal')!= null ? userTallyTotal : userTallyTotal= 0
    localStorage.getItem('computerWinsTotal')!= null ? computerTallyTotal : computerTallyTotal= 0
    //Current problem I'm facing now is that refreshing the page and submitting a value changes localStorage value to NaN
    
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
        parseInt(userTallyTotal, 10)
        userTallyTotal++
        localStorage.setItem('userWinsTotal', userTallyTotal)
        message+= `You won! You guessed: ${numberChoice} and the computer guessed: ${randomNum}`
    } else {    
        parseInt(computerTallyTotal, 10)
        computerTallyTotal++
        localStorage.setItem('computerWinsTotal', computerTallyTotal)
        message+= `Sorry Try Again! You guessed: ${numberChoice} and the computer guessed: ${randomNum}`
    }
        resetField()
        displayResult(message)
        countWins(userTallyTotal,computerTallyTotal)
}

const displayResult= (message)=>{    
    const displayResultEl= document.createElement('h2')
    displayResultEl.textContent= message
    document.getElementById('result-section').appendChild(displayResultEl)
}

const countWins= (userTallyTotal, computerTallyTotal)=>{   
    const countWinsEl= document.createElement('h2')
    countWinsEl.textContent= `User Total Win: ${userTallyTotal} Computer Total Win: ${computerTallyTotal}`
    document.getElementById('count-section').appendChild(countWinsEl)
}

const resetField= ()=>{
    enterValue.value=''
    enterValue.focus()
}
