console.log("hello world");

function getRandomInt() 
{
    return Math.floor(Math.random() * 3)+1;
}


function getComputerChoice()
{
    if (getRandomInt() === 3)
    {
    let computerSelection = ("scisors");
  
    }
    else if (getRandomInt()=== 2)
    {
    let computerSelection = ("paper");
  
    }
    else
    {
    let computerSelection = ("rock");
    
    }
}

let playerSelection = prompt("Rock Paper or Scisors?");

function startGame()
{
    //losing
    if (computerSelection == "scisors" && playerSelection == "paper")
    {
        console.log("You lose Scisors beats Paper!");
    }

    if (computerSelection == "rock" && playerSelection == "scisors")
    {
        console.log("You lose Rock beats Scisors!");
    }
    if (computerSelection == "paper" && playerSelection == "rock")
    {
        console.log("You lose Paper beats Rock!");
    }

    //winning
    if (computerSelection == "paper" && playerSelection == "scisors")
    {
        console.log("You win Scisors beats Paper!");
    }
    if (computerSelection == "rock" && playerSelection == "paper")
    {
        console.log("You win Paper beats Rock!");
    }
    if (computerSelection == "scisors" && playerSelection == "rock")
    {
        console.log("You win Rock beats scisors!");
    }
}