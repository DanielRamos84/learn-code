const returnMainPage= document.getElementById('return-main-page')
const getId= location.hash.substring(1)

const titleAreaField= document.getElementById('title-area-field')
const textAreaField= document.getElementById
('text-area-field')


const findId= userArray.find(entry=>{
    return entry.id===getId
})

titleAreaField.value= findId.text

returnMainPage.addEventListener('click', function(e){
    location.assign('/index.html')
})
