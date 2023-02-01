//get computer choice
function getComputerChoice(){
    choice = Math.floor(Math.random()*3)
    if (choice==1){
        return 'Rock'
    }
    else if(choice==2){
        return 'Scissors'
    }
    else{
        return 'Paper'
    }
}

//Compare player and computer choices and identify the winner
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 'Even!'
    }
    else if(
        playerSelection == 'Rock' && computerSelection =='Scissors' ||
        playerSelection == 'Paper' && computerSelection =='Rock' ||
        playerSelection == 'Scissors' && computerSelection =='Paper'
    ){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(
        playerSelection == 'Rock' && computerSelection =='Paper' ||
        playerSelection == 'Paper' && computerSelection =='Scissors' ||
        playerSelection == 'Scissors' && computerSelection =='Rock'
    ){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else{
        return 'That is not one of the choices.'
    }
}

//play the game
function game(){
    for (i=0; i<5; i++){
        let userInput = window.prompt('Choose Rock, Paper or Scissors');
        let userInputToLowerCase = userInput.toLowerCase();
        let userInputCapitalized  = userInputToLowerCase.replace(userInputToLowerCase[0], userInputToLowerCase[0].toUpperCase())
        console.log(playRound(userInputCapitalized, getComputerChoice()))
    }
}

game()