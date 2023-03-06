console.log("hello world");

function getRandomInt() 
{
    return Math.floor(Math.random() * 3)+1;
}

let computerSelection
function getComputerChoice()
{
    if (getRandomInt() === 3)
    {
    computerSelection = "scisors";
    return computerSelection;
    }
    else if (getRandomInt()=== 2)
    {
    computerSelection = "paper";
    return computerSelection;
    }
    else
    {
    computerSelection = "rock";
    return computerSelection;
    }
}

let playerSelection = prompt("Rock Paper or Scisors?").toLowerCase();


let botScore= 0;
let playerScore = 0;


function startGame()
{
    getComputerChoice();
    //losing
    if (computerSelection === "scisors" && playerSelection === "paper")
    {
        console.log("You lose Scisors beats Paper!");
        console.log("Bot = " + ++botScore + " You = " + playerScore);
    }

    else if (computerSelection === "rock" && playerSelection === "scisors")
    {
        console.log("You lose Rock beats Scisors!");
        console.log("Bot = " + ++botScore + " You = " + playerScore);
    }
    else if (computerSelection === "paper" && playerSelection === "rock")
    {
        console.log("You lose Paper beats Rock!");
        console.log("Bot = " + ++botScore + " You = " + playerScore);
    }

    //winning
    else if (computerSelection === "paper" && playerSelection === "scisors")
    {
        console.log("You win Scisors beats Paper!");
        console.log("Bot = " + botScore + " You = " + ++playerScore);
    }
    else if (computerSelection === "rock" && playerSelection === "paper")
    {
        console.log("You win Paper beats Rock!");
        console.log("Bot = " + botScore + " You = " + ++playerScore);
    }
    else if (computerSelection === "scisors" && playerSelection === "rock")
    {
        console.log("You win Rock beats Scisors!");
        console.log("Bot = " + botScore + " You = " + ++playerScore);
    }
    //raw
    else
    {
        console.log("Draw!");
    }
}