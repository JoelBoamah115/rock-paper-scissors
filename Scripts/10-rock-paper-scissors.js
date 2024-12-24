 //creating obejct
 let score = JSON.parse(localStorage.getItem('Score'))|| 
 {
     wins:0,
     losses:0,
     ties:0  
 };
             //displaying Scores not in a popup
 document.querySelector('.js-score')
 .innerHTML=`wins: ${score.wins} ,  losses: ${score.losses},  ties : ${score.ties}`;

/*
 if(  score===null){
     score={
         wins:0,
         losses:0,
         ties:0 ,
     };
 }
*/
                 //functions

 function playGame(playerMove){  
 const computerMove = pickcomputerMove();

 let result='';
     //Scissors
 if (playerMove=='scissors'){

     if(computerMove ==='rock'){
         result = 'You lose.😂';
     }
     else if(computerMove ==='paper'){
         result='You Win.😘';
     }
     else if(computerMove ==='scissors'){
         result='Tie.🤷‍♀️';
     }
         //Paper
}else if(playerMove==='paper'){
     if(computerMove ==='rock'){
         result = 'You Win.😘';
     }
     else if(computerMove ==='paper'){
         result='Tie.🤷‍♂️';
     }
     else if(computerMove ==='scissors'){
         result='You lose.😂';
     }
         //Rock
 }else if(playerMove==='rock'){
     if(computerMove ==='rock'){
     result = 'Tie.🤷‍♂️';
 }
 else if(computerMove ==='paper'){
     result='You lose.😂';
 }
 else if(computerMove ==='scissors'){
     result='You Win.😘';
 }

 }

 if(result==='You Win.😘'){
     score.wins +=1;

 }else if(result==='You lose.😂'){

     score.losses +=1;

 }else if (result==='Tie.🤷‍♂️'){

     score.ties +=1;
 }


 localStorage.setItem('Score',JSON.stringify(score));

 updateScoreElement();

 document.querySelector('.js-result').innerHTML=result;

 document.querySelector('.js-moves').innerHTML = `You<img src="images/${playerMove}-emoji.png" class="move-icon">
 <img src="images/${computerMove}-emoji.png"class="move-icon">computer`;
 /*  alert( `You picked ${playerMove}.Computer picked  ${computerMove}. ${result} 
   wins: ${score.wins} ,  losses: ${score.losses},  ties : ${score.ties}`);   */
 }

 function updateScoreElement(){
 document.querySelector('.js-score')
 .innerHTML=`wins: ${score.wins} ,  losses: ${score.losses},  ties : ${score.ties}`;
 }



             //ComputerMoves

function pickcomputerMove(){

 let computerMove='';

 const randomNumber= Math.random();

     if(randomNumber>= 0 && randomNumber <1 / 3){
         computerMove='rock'; 
     }
     else if(randomNumber>=1 / 3 && randomNumber < 2 / 3){
         computerMove='paper';
     }
     else if (randomNumber>=2 / 3 && randomNumber < 1){
         computerMove='scissors';
     }


     return computerMove;

 }

