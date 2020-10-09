(function () {
    let selectCard= document.querySelectorAll('.flash-card'),
        sectionOne= document.querySelector('.section-one'),
        sectionTwo= document.querySelector('.section-two'),
        sectionThree= document.querySelector('.section-three'),
        match,
        score=0,
        finalScore,
        radioCheckedOne= document.questions.firstQuestion,
        radioCheckedTwo= document.questions.secondQuestion,
        radioCheckedThree= document.questions.thirdQuestion,
        numberOfQuestions= document.questions.children.length;
        clickOnFormArea= document.forms,
        sectionTwo.style.display= 'none';
        sectionThree.style.display= 'none';

    for (let i=0; i < selectCard.length; i++) {
        let targetCard= selectCard[i];
        targetCard.addEventListener('click', toggleToAnswer);
    }

    /*Show answer to flashcard when its clicked, user can switch back and forth from question to answer*/
    function toggleToAnswer(e) {
        let activeCard= e.target;
        if ((activeCard.className==='question') || (activeCard.className=== 'answer')) {
            let questionSelected= activeCard;
            switch (questionSelected.innerText){
                case "User is able to see all Pending Transactions from Directed Tasks in IQRF/WMS":
                    questionSelected.innerHTML= "No Work Zone has been associated under Team Types for the user";
                    questionSelected.className= "answer";    
                break;
                case "No Work Zone has been associated under Team Types for the user":
                    questionSelected.innerHTML= "User is able to see all Pending Transactions from Directed Tasks in IQRF/WMS";
                    questionSelected.className= "question";    
                break;

                case "These rules are used to direct items to a specific Locating Zone":
                    questionSelected.innerHTML= 'Locating Rules';
                    questionSelected.className= "answer";    
                break;
                case "Locating Rules":
                    questionSelected.innerHTML= "These rules are used to direct items to a specific Locating Zone";
                    questionSelected.className= "question";    
                break;

                case "These rules are used to find items and pick them from an Allocating Zone":
                    questionSelected.innerHTML= "Picking Rules";
                    questionSelected.className= "answer";    
                break;
                case "Picking Rules":
                    questionSelected.innerHTML= "These rules are used to find items and pick them from an Allocating Zone";
                    questionSelected.className= "question";    
                break;

                case "What's your age 4?":
                    questionSelected.innerHTML= '42';
                    questionSelected.className= "answer";    
                break;
                case "42":
                    questionSelected.innerHTML= "What's your age 4?";
                    questionSelected.className= "question";    
                break;         
                
                case "What's your age 5?":
                    questionSelected.innerHTML= '44';
                    questionSelected.className= "answer";    
                break;

                case "44":
                    questionSelected.innerHTML= "What's your age 5?";
                    questionSelected.className= "question";    
                break;

                case "What's your age 6?":
                    questionSelected.innerHTML= '46';
                    questionSelected.className= "answer";    
                break;

                case "46":
                    questionSelected.innerHTML= "What's your age 6?";
                    questionSelected.className= "question";    
                break;

                case "What's your age 7?":
                    questionSelected.innerHTML= "48";
                    questionSelected.className= "answer";    
                break;

                case "48":
                    questionSelected.innerHTML= "What's your age 7?";
                    questionSelected.className= "question";    
                break;

                case "What's your age 8?":
                    questionSelected.innerHTML= "50";
                    questionSelected.className= "answer";    
                break;

                case "50":
                    questionSelected.innerHTML= "What's your age 8?";
                    questionSelected.className= "question";    
                break;
            }   
        }

        /*Iterate over flashcards add up how many flash cards are showing the answer*/
        let test= document.querySelectorAll('p');
        match= 0;
        Array.from(test).filter(cardContent=>{
            cardContent.className == 'answer' ? match++ : false;
        })

        /*If all flashcards on individual section are showing the answer hide the active section and show the user a new set of flashcards, repeat process and afterwards show the questionnaire*/
        switch (match){
            case sectionOne.children.length:
                sectionOne.innerHTML= '';
                sectionTwo.style.display= 'flex';
                match= 0;
                break;

            case sectionTwo.children.length:
                sectionTwo.style.display= 'none';
                match= 0;
                sectionThree.style.display= 'flex';    
                break;     
        }
    }

    let submitBtn= document.createElement('button');
    submitBtn.innerHTML= 'Click to Submit';
    submitBtn.id= 'clickBtn';
    submitBtn.disabled= true;
    document.querySelector('form').appendChild(submitBtn);


    window.addEventListener('click', function(e){
        if ((radioCheckedOne.value!=='') && (radioCheckedTwo.value!=='') && (radioCheckedThree.value!=='')) {
            submitBtn.disabled= false;
            submitBtn.addEventListener('click',checkAnswer);
        } 
    })
        
    function checkAnswer(){
        switch (radioCheckedOne.value){
            case 'Excellent':
                console.log ('correct');
                score++;
                break;
        }
    
        switch (radioCheckedTwo.value){
            case 'Nice':
                console.log ('correct');
                score++;
                break;
        }

        switch (radioCheckedThree.value){
            case 'Friday':
                console.log ('correct');
                score++;
                break;
        }
        displayScore(score);
    }

    function displayScore(){
        finalScore= (((score/numberOfQuestions) * 100).toFixed(2))
        alert(`Final Score: ${finalScore}`);
        /*
        Stuff to work on now: Create h3 with score and message scroll down to view results and change attribute to show x or checkmark on each answer */
    }
})();
