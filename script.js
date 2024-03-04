const btn=document.querySelectorAll('button');
let computerScore=0,playerScore=0;

function getComputerChoice(){
    //Here, I have a variable that stores a random number which can either be 0,1 or 2
    random=Math.trunc((Math.random()*3));
    if(random===0){
        return 'rock';
    }if(random===1){
        return 'paper';
    }if(random===2){
        return 'scissors';
    }
}
function playRound(playerSelection){
    console.log(playerSelection);
    computerSelection=getComputerChoice();
    let str;
    if(playerSelection==='rock' && computerSelection==='rock'){
        str='Game tie';
    }if(playerSelection==='rock' && computerSelection==='paper'){
        str='You lose! Paper beats Rock';
        computerScore++;
    }if(playerSelection==='rock' && computerSelection==='scissors'){
        str='You win! Rock beats Scissor';
        playerScore++;
    }if(playerSelection==='paper' && computerSelection==='rock'){
        str='You win! Paper beats Rock'
        playerScore++;
    }if(playerSelection==='paper' && computerSelection==='paper'){
        str='Game tie';
    }if(playerSelection==='paper' && computerSelection==='scissors'){
        str='You lose! Scissor beats Paper';
        computerScore++;
    }if(playerSelection==='scissors' && computerSelection==='rock'){
        str='You lose! Rock beats Scissor';
        computerScore++;
    }if(playerSelection==='scissors' && computerSelection==='paper'){
        str='You win! Scissor beats Paper';
        playerScore++;
    }if(playerSelection==='scissors' && computerSelection==='scissors'){
        str='Game tie';
    }
    //let arr=[computerScore,playerScore,str];
    const intermediateResult=document.querySelector('#intermediate-result');
    intermediateResult.textContent=`${str} |\n Your Score:${playerScore} |\n Computer Score:${computerScore}`;
    if(playerScore>=5 || computerScore>=5){
        const finalResult=document.querySelector('#final-result')
        if(playerScore>computerScore){
            finalResult.textContent='Hurray! You have won the match';
        }else if(computerScore>playerScore){
            finalResult.textContent='Alas! You have lost the match';
        }else{
            finalResult.textContent='The match is draw';
        }
        intermediateResult.textContent='';
    }

}
btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        playRound(button.id);
    });
});