//get computer choice
const playButton  = document.querySelector('.play');
console.log(playButton)
playButton.addEventListener('click', () => {
    play()
})

let playerChoice
let playerPointCounter = 0
let computerPointCounter = 0

let playerScore 
let computerScore 

let resetDiv = document.querySelector('.reset')

let divButtons = document.querySelector('.buttons')
let buttons
let rock
let paper
let scissors

let divScore = document.querySelector('.score')
let scoreAttribution = document.querySelector('.score-attribution')



function addListenersToButtons(){
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerChoice = button.className
            button.classList.add('transformed')
            game(playerChoice)
        })
        button.addEventListener('transitionend', () => {
            button.classList.remove('transformed')
        })
    })
}

function play(){
    let body = document.querySelector('body')
    body.removeChild(playButton)

    rock = divButtons.appendChild(document.createElement('button'))
    rock.setAttribute('class', 'rock')
    rock.textContent = 'Rock'
    console.log(rock)
    paper =  divButtons.appendChild(document.createElement('button'))
    paper.setAttribute('class', 'paper')
    paper.textContent = 'Paper'
    scissors = divButtons.appendChild(document.createElement('button'))
    scissors.setAttribute('class', 'scissors')
    scissors.textContent = 'Scissors'

    divScore.appendChild(document.createElement('div')).setAttribute('class', 'player-score')
    divScore.appendChild(document.createElement('div')).setAttribute('class', 'match-result')
    divScore.appendChild(document.createElement('div')).setAttribute('class', 'computer-score')

    playerScore = document.querySelector('.player-score');
    computerScore = document. querySelector('.computer-score')

    playerScore.textContent = playerPointCounter
    computerScore.textContent = computerPointCounter

    buttons = document.querySelectorAll('div.buttons > button')

    playerScoreAttribution = scoreAttribution.appendChild(document.createElement('div'))
    playerScoreAttribution.setAttribute('class', 'player')

    computerScoreAttribution = scoreAttribution.appendChild(document.createElement('div'))
    computerScoreAttribution.setAttribute('class', 'computer')

    playerScoreAttribution.textContent = 'Player score'
    computerScoreAttribution.textContent = 'Computer score'
    addListenersToButtons()
}

function reset(){
    resetButton = resetDiv.appendChild(document.createElement('button'));
    resetButton.textContent = 'Reset'
    resetButton.addEventListener('click', () => {
        playerPointCounter = 0;
        computerPointCounter = 0;
        playerScore.textContent = playerPointCounter
        computerScore.textContent = computerPointCounter
        resetDiv.removeChild(resetButton)
    })

}

function getComputerChoice(){
    choice = Math.floor(Math.random()*3)
    if (choice==1){
        return 'rock'
    }
    else if(choice==2){
        return 'scissors'
    }
    else{
        return 'paper'
    }
}

function capitalize(string){
    let fistLetterCapitalized = string[0].toUpperCase()
    let finalString = fistLetterCapitalized+string.slice(1)
    return finalString
}

function checkIfGameOver(winner, computerSelection, playerSelection){
    if (playerPointCounter >= 5){
        reset()
        return 'The overall winner is Player!'
    }
    else if (computerPointCounter >= 5){
        reset()
        return 'The overall winner is Computer!'
    }
    else if(winner == 'player' && playerSelection == 'scissors'){
        return `You win! ${capitalize(playerSelection)} beat ${computerSelection}.`;
    }
    else if (winner == 'computer' && computerSelection == 'scissors'){
        return `You lose! ${capitalize(computerSelection)} beat ${playerSelection}.`;
    }
    else if(winner == 'player'){
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`
    }
    else{
        return `You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`;
    }
}

//Compare player and computer choices and identify the winner
function playRound(playerSelection, computerSelection){
     if(
        playerSelection == 'rock' && computerSelection =='scissors' ||
        playerSelection == 'paper' && computerSelection =='rock' ||
        playerSelection == 'scissors' && computerSelection =='paper'
    ){
        playerPointCounter++
        winner = 'player'
        return checkIfGameOver(winner, computerSelection, playerSelection)
    }
    else if(
        playerSelection == 'rock' && computerSelection =='paper' ||
        playerSelection == 'paper' && computerSelection =='scissors' ||
        playerSelection == 'scissors' && computerSelection =='rock'
    ){
        computerPointCounter++
        winner = 'computer'
        return checkIfGameOver(winner, computerSelection, playerSelection)
    }
    else if (playerSelection == computerSelection){
        return `Even!`
    }
    else{
        return 'That is not one of the choices.'
    }
}



//play the game
function game(choice){
    if (playerPointCounter >= 5 || computerPointCounter >= 5){
        checkIfGameOver
    }
    else{
        document.querySelector('.match-result').textContent = playRound(choice, getComputerChoice())
        playerScore.textContent = playerPointCounter
        computerScore.textContent = computerPointCounter
    }
}