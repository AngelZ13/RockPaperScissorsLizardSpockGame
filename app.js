let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToTitle(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
    if (word === "lizard") return "Lizard";
    if (word === "spock") return "Spock";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToTitle(userChoice)}${smallUserWord} beats ${convertToTitle(computerChoice)}${smallComputerWord}. You win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToTitle(userChoice)}${smallUserWord} loses to ${convertToTitle(computerChoice)}${smallComputerWord}. You lost...`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToTitle(userChoice)}${smallUserWord} equals ${convertToTitle(computerChoice)}${smallComputerWord}. It's a draw.`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors": 
        case "rocklizard":  
        case "paperrock":   
        case "paperspock":  
        case "scissorspaper":   
        case "scissorslizard":  
        case "lizardpaper":     
        case "lizardspock":     
        case "spockrock":   
        case "spockscissors":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":   
        case "rockspock":   
        case "paperscissors":   
        case "paperlizard":     
        case "scissorsrock":    
        case "scissorsspock": 
        case "lizardrock": 
        case "lizardscissors": 
        case "spockpaper": 
        case "spocklizard":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
    lizard_div.addEventListener('click', () => game("lizard"));
    spock_div.addEventListener('click', () => game("spock"));
}

main();