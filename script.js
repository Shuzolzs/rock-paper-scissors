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
console.log(getComputerChoice());