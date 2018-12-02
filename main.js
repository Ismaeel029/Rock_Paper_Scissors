let playerBtn = document.querySelectorAll('button');
let result = document.querySelector('#results');
const score = document.querySelector('#score');
const status = {
    WIN: 'win',
    LOSE: 'lose',
    DRAW: 'draw'
}

let gameStatus = status.WIN;
let playerPoint = 0; let computerPoint = 0; 

function counterPlay(){
    let a = 1 + Math.floor( Math.random()*3 );
    switch(a){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    } //end switch
}//end function couterPlay
            
function playRound(playerSelect, computerSelect){                
    if(playerSelect=="rock"){
        if(computerSelect=="paper"){
            result.textContent = "You Lose! Paper beats Rock";
            gameStatus = status.LOSE;
        }//end nested if
        if(computerSelect=="scissors"){
            result.textContent = "You Win! Rock beats Scissors";
            gameStatus = status.WIN;
        }//end nested if
    }//end outer if
                
    if(playerSelect=="paper"){
        if(computerSelect=="rock"){
            result.textContent = "You Win! Paper beats Rock";
            gameStatus = status.WIN;
        }//end nested if
        if(computerSelect=="scissors"){
            result.textContent = "You Lose! Scissors beats Paper";
            gameStatus = status.LOSE;
        }//end nested if
    }//end outer if
                
    if(playerSelect=="scissors"){
        if(computerSelect=="rock"){
            result.textContent = "You Lose! Rock beats Scissors";
            gameStatus = status.LOSE;
        }//end inner if
        if(computerSelect=="paper"){
            result.textContent = "You Win! Scissors beats Paper";
            gameStatus = status.WIN;
        }//end nested if
    }//end outer if

    if(playerSelect==computerSelect){
        result.textContent = "The game is a tie";
        gameStatus = status.DRAW;
    }//end if
    
    switch(gameStatus){
        case status.WIN:
            +playerPoint++;
            break;
        case status.LOSE:
            +computerPoint++;
            break;
        case status.DRAW:
            break;
    }//end switch

    score.innerHTML = '<p>Player Point: ' + playerPoint + '</p>';
    score.innerHTML += '<p>Computer Point: ' + computerPoint + '</p>';
    if(playerPoint==5)
        score.innerHTML += '<p>Player wins</p>';
    else if(computerPoint==5)
        score.innerHTML += '<p>Computer wins </p>';
    if(playerPoint==5 || computerPoint==5){
        playerPoint=0;
        computerPoint=0;
    }
} //end function playRound

playerBtn.forEach( (button) => {
    button.addEventListener( 'click', function(e){
        let player = e.target.id; //gets the id of the target element and returns a string
        let computer = counterPlay();
        playRound(player,computer);
    })
});