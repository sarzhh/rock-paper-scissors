function getComputerChoice() {
    const computerChoice = ['rock' , 'paper' , 'scissors'];
    const randomChoice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomChoice];
}
 
function playRound(playerChoice, computerChoice){
    if(playerChoice == "rock" && computerChoice == "paper"){
        return "You lose! Paper beats rock";
    }

    else if(playerChoice == "rock" && computerChoice == "scissors"){
        return "You win! rock beats scissors";
    }

    else if(playerChoice == "paper" && computerChoice == "rock"){
        return "You win! Paper beats rock";
    }

    else if(playerChoice == "paper" && computerChoice == "scissors"){
        return "You lose! scissors beats paper";
    }

    else if(playerChoice == "scissors" && computerChoice == "rock"){
        return "You lose! rock beats scissors";
    }

    else if(playerChoice == "scissors" && computerChoice == "paper"){
        return "You win! scissors beats paper";
    }

    else if(playerChoice == computerChoice){
        return "It is a tie";
    }
}

const playerChoice = window.prompt("rock, paper or scissors?");
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice , computerChoice));