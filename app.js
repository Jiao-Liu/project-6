//const and other variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName('btn__reset');

const startBtn = document.getElementById('overlay');
const phraseLi = phrase.getElementsByTagName('li');

const title = document.querySelector('.title');

let missed =0;//innitial wrong answers

//arry for phrases
let phrases=[
    'orange',
     'yellow',
     'red',
     'blue',
     'pink'
];

//handler for start the game

startBtn.addEventListener('click',function(){
 
    this.style.display='none';


});

function gerRandomPhraseAsArry(arr){
    
   const randomPhrase = arr[Math.floor(Math.random() * arr.length)];  //choose random phrase from array
     

   const newArr =randomPhrase.split('');  //split randomphrase into characters*/


    return newArr;
    
}

 const newRandomArr = gerRandomPhraseAsArry(phrases); //call function and reveice return value

 //travering  newRandomArr and appendchild to ul after restore the arry to li
function addPhraseToDisplay(arr){
    for(let i = 0; i < arr.length; i++ ) {
        let ul = document.querySelector('#phrase ul');
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
        if (arr[i] !== ' '){
            li.classList .add('letter');
        } else {
            
            li.classList.add('space');
        }
    }
 
   
}
  addPhraseToDisplay( newRandomArr);   // call function and pass  newRandomArr as argument to it

   


   function checkLetter(button){
       let match = null;
       for (let i=0; i<phraseLi.length; i++){
           if (button===phraseLi[i].textContent.toLowerCase()){
            phraseLi[i].classList.add('show');
            match = phraseLi[i].textContent;
            
           }
       }
     
       return match;
       
   }

// Event Listener for Onscreen Keyboard

 qwerty.addEventListener('click', e => {
   
    let button = qwerty.getElementsByTagName('button');
    if (e.target.tagName === 'BUTTON' && button.classList!='chosen') {
        e.target.classList.add('chosen');
        e.target.disabled = true;
        const selected = checkLetter(e.target.textContent);
        if (selected === null) {
         
            let img = document.getElementsByTagName('img');
            
                img[missed].src = 'images/lostHeart.png';
                missed+=1;
              
        }
        checkWin();
    }  
});

//check if player wins
function checkWin (){
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    if (letter.length === show.length){
        overlay.classList.add('win');
		overlay.style.display = 'flex';
		title.textContent = "Well done!";
    }else if(missed >=5 ){
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        title.textContent = "I'm sorry, You Lost!! want one more time?";
        

    }
    reset();
}



//reset the game
const reset = function (){

    startBtn.addEventListener('click',function(){
       
        location.reload();
    
    })
} ;

