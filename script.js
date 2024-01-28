const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const winner = document.getElementById('winner');
const playerResult = document.getElementById('playerResult');
const computerResult = document.getElementById('computerResult');
const buttons = document.querySelectorAll('button');

let playerCount = 0;
let computerCount = 0;


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



function game(){
    
    
       
        rock.addEventListener('click', function(){
            const computer =  getComputerChoice();
            const roundWinner = playRound('rock', computer);
            playerChoice.textContent = "PLAYER CHOICE: " + "ROCK";
            computerChoice.textContent = "COMPUTER CHOICE: " + computer.toUpperCase();

            if (roundWinner === "You win! rock beats scissors" || roundWinner === "You win! Paper beats rock" || roundWinner === "You win! scissors beats paper"){
                playerCount++;
                 playerResult.textContent = "PLAYER RESULT: " + playerCount;
             } else if (roundWinner === "You lose! Paper beats rock" || roundWinner === "You lose! scissors beats paper" || roundWinner === "You lose! rock beats scissors"){
                 computerCount++;
                 computerResult.textContent = "COMPUTER RESULT: " + computerCount;
             }

            
             if (playerCount === 5 || computerCount === 5) {
                if (playerCount === 5) {
                    winner.textContent = "GAME OVER! YOU WIN!!";
                } else if(computerCount === 5) {
                    winner.textContent = "GAME OVER! YOU LOSE!!";
                }
               buttons.forEach(button =>{
                button.disabled = true;
               })
            }
            
            
        });

        paper.addEventListener('click', function(){
            const computer =  getComputerChoice();
            const roundWinner = playRound('paper', computer);
            playerChoice.textContent = "PLAYER CHOICE: " + "PAPER";
            computerChoice.textContent = "COMPUTER CHOICE: " + computer.toUpperCase();

            if (roundWinner === "You win! rock beats scissors" || roundWinner === "You win! Paper beats rock" || roundWinner === "You win! scissors beats paper"){
                playerCount++;
                 playerResult.textContent = "PLAYER RESULT: " + playerCount;
             } else if (roundWinner === "You lose! Paper beats rock" || roundWinner === "You lose! scissors beats paper" || roundWinner === "You lose! rock beats scissors"){
                 computerCount++;
                 computerResult.textContent = "COMPUTER RESULT: " + computerCount;
             }

            winner.textContent = roundWinner.toUpperCase();

            if (playerCount === 5 || computerCount === 5) {
                if (playerCount === 5) {
                    winner.textContent = "GAME OVER! YOU WIN!!";
                } else if(computerCount === 5) {
                    winner.textContent = "GAME OVER! YOU LOSE!!";
                }
               buttons.forEach(button =>{
                button.disabled = true;
               })
            }
            
        });

        scissors.addEventListener('click', function(){
            const computer =  getComputerChoice();
            const roundWinner = playRound('scissors', computer);
            playerChoice.textContent = "PLAYER CHOICE: " + "SCISSORS";
            computerChoice.textContent = "COMPUTER CHOICE: " + computer.toUpperCase();

            if (roundWinner === "You win! rock beats scissors" || roundWinner === "You win! Paper beats rock" || roundWinner === "You win! scissors beats paper"){
                playerCount++;
                 playerResult.textContent = "PLAYER RESULT: " + playerCount;
             } else if (roundWinner === "You lose! Paper beats rock" || roundWinner === "You lose! scissors beats paper" || roundWinner === "You lose! rock beats scissors"){
                 computerCount++;
                 computerResult.textContent = "COMPUTER RESULT: " + computerCount;
             }


            winner.textContent = roundWinner.toUpperCase();

            if (playerCount === 5 || computerCount === 5) {
                if (playerCount === 5) {
                    winner.textContent = "GAME OVER! YOU WIN!!";
                } else if(computerCount === 5) {
                    winner.textContent = "GAME OVER! YOU LOSE!!";
                }
               buttons.forEach(button =>{
                button.disabled = true;
               })
            }

           
});



}


game();