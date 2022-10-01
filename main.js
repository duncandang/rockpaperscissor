const choices = ['rock', 'paper', 'scissor'];
let winners = [];

function game() {
    for (let i=1; i <= 5; i++) {
    playRound(i);
    }
    logWins();
    resetScore();
}

function computerChoice() {
    //get random input for computer
    return choices[Math.floor(Math.random()*choices.length)];
    
}

function playerChoice() {
    //get player input
    let input = prompt("rock, paper, or scissor");
    let check = validateInput(input);
    while (!check) {
        input = prompt("rock, paper, or scissor");
        while (input == null) {
            input = prompt("rock, paper, or scissor");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function validateInput(choice) {
    return choices.includes(choice);
}

function playRound(round) {
    const p = playerChoice();
    const c = computerChoice();
    const winner = checkWinner(p,c);
    winners.push(winner);
    logRound(p, c, winner, round);
}

function checkWinner(p, c) {
    if (p === c) {
        return "Tie";
    } else if (
        (p === "rock" && c === "scissor") ||
        (p === "paper" && c === "rock") ||
        (p === "scissor" && c === "paper")) 
    {
    return "Player";
    } else {
    return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter(item => item == "Player").length;
    let computerWins = winners.filter(item => item == "Computer").length;
    let ties = winners.filter(item => item == "Tie").length;
    console.log('Results:');
    console.log('Player wins: ', playerWins);
    console.log('Computer wins: ', computerWins);
    console.log('Ties: ', ties);
    if (playerWins > computerWins) {
        console.log("You win!")
    } else if (playerWins < computerWins) {
        console.log("Computer wins...")
    } else {
        console.log("Tie...")
    }
}

function logRound(p, c, winner, round) {
    console.log('Round', round)
    console.log('Player chose:', p);
    console.log('Computer chose:', c);
    if (winner == "Tie") {
        console.log("Tie round")
    } else {
        console.log(winner, 'won the round');
    }
}

function resetScore() {
    winners = [];
}

