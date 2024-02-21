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
//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    let str;
    if(playerSelection==='rock' && computerSelection==='rock'){
        str='Game tie';
    }if(playerSelection==='rock' && computerSelection==='paper'){
        str='You lose! Paper beats Rock';
    }if(playerSelection==='rock' && computerSelection==='scissors'){
        str='You win! Rock beats Scissor';
    }if(playerSelection==='paper' && computerSelection==='rock'){
        str='You win! Paper beats Rock'
    }if(playerSelection==='paper' && computerSelection==='paper'){
        str='Game tie';
    }if(playerSelection==='paper' && computerSelection==='scissors'){
        str='You lose! Scissor beats Paper';
    }if(playerSelection==='scissors' && computerSelection==='rock'){
        str='You lose! Rock beats Scissor';
    }if(playerSelection==='scissors' && computerSelection==='paper'){
        str='You win! Scissor beats Paper';
    }if(playerSelection==='scissors' && computerSelection==='scissors'){
        str='Game tie';
    }
    return str;
}

// const playerSelection='rock';
// const computerSelection=getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));

function playGame(){
    for(let i=1;i<=5;i++){
        playerSelection=prompt(`Enter 'rock', 'paper' or'scissors'`);
        computerSelection=getComputerChoice();
        console.log(`Your choice=${playerSelection}`);
        console.log(`Computer choice=${computerSelection}`);
        console.log(playRound(playerSelection,computerSelection));
    }
}
playGame();