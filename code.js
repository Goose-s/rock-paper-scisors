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
    let computerSelection = ("rock")
    
    }
}

let playerSelection = prompt("Rock Paper or Scisors?");

function startGame()
{
    if (computerSelection == "scisors" && playerSelection == "paper")
    {
        console.log("You lose Scisors beats Paper!")
    }

    if (computerSelection == "rock" && playerSelection == "scisors")
    {
        console.log("You lose Rock beats Scisors!")
    }
    if (computerSelection == "paper" && playerSelection == "rock")
    {
        console.log("You lose Rock beats Scisors!")
    }
    if (computerSelection == "paper" && playerSelection == "rock")
    {
        console.log("You lose Rock beats Scisors!")
    }
}