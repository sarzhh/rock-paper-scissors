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

    return result;
}

function game(){
    
       let playerCount = 0;
        let computerCount = 0;
    for (i = 0; i < 5; i++){
        const playerChoice = window.prompt("rock, paper or scissors?");
        const computerChoice = getComputerChoice();
      const roundResult =  playRound(playerChoice , computerChoice);
      console.log(`Round ${i + 1}: ${roundResult}`);

        
    if (roundResult === "You win! rock beats scissors" || roundResult === "You win! Paper beats rock" || roundResult === "You win! scissors beats paper"){
       playerCount++;
        console.log(`playerCount = ${playerCount}`);
    } else if (roundResult === "You lose! Paper beats rock" || roundResult === "You lose! scissors beats paper" || roundResult === "You lose! rock beats scissors"){
        computerCount++;
        console.log(`computerCount = ${computerCount}`);
    }
}
    if (playerCount > computerCount){
        console.log("YOU WIN!!!")
    }else(console.log("YOU LOOSE!!"))
    
} 


game();