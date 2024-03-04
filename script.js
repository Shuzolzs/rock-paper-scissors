const btn=document.querySelectorAll('button');
function playRound(playerSelection){
    console.log(playerSelection);
}
btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        playRound(button.id);
    });
});