const playRound = (playerSelection, computerSelection)=>{
    if(playerSelection==computerSelection){
        alert(`Tie! ${playerSelection} ties ${computerSelection}`);
    }
    else if(playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper"){
        alert(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    else if(playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissors"){
        alert("Invalid choice! Choose Rock, Paper or Scissors");
    }
    else{
        alert(`You Lose! ${playerSelection} loses to ${computerSelection}`);
    }
}

const getRandomInt = (max)=> Math.floor(Math.random() * max);

const getComputerChoice = ()=>{
    numero=getRandomInt(3)
    if(numero==0){
        return "rock";
    }
    else if(numero==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
const rounds = prompt("How many rounds do you want to play?")

for(let i=0; i<rounds; i++){
    const computerSelection  = getComputerChoice();
    const playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
    console.log(getComputerChoice);
    console.log(playRound(playerSelection, computerSelection));
}
