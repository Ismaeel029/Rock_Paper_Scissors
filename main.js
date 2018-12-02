 /*const status = {
    WIN: 'win',
    LOSE: 'lose',
    DRAW: 'draw'
}

let gameStatus = status.WIN;
let playerPoint = 0; let computerPoint = 0; */

function counterPlay(){
    let a = 1 + Math.floor( Math.random()*3 );
    switch(a){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    } //end switch
}//end function couterPlay

let playerBtn = document.querySelectorAll('button');
            
function playRound(playerSelect, computerSelect){
                
    if(playerSelect=="rock"){
        if(computerSelect=="paper"){
            console.log("You Lose! Paper beats Rock");
            gameStatus = status.LOSE;
        }//end nested if
        if(computerSelect=="scissors"){
            console.log("You Win! Rock beats Scissors");
            gameStatus = status.WIN;
        }//end nested if
     }//end outer if
                
    if(playerSelect=="paper"){
        if(computerSelect=="rock"){
            console.log("You Win! Paper beats Rock");
            gameStatus = status.WIN;
        }//end nested if
        if(computerSelect=="scissors"){
            console.log("You Lose! Scissors beats Paper");
            gameStatus = status.LOSE;
        }//end nested if
    }//end outer if
                
    if(playerSelect=="scissors"){
        if(computerSelect=="rock"){
            console.log("You Lose! Rock beats Scissors");
            gameStatus = status.LOSE;
        }//end inner if
        if(computerSelect=="paper"){
            console.log("You Win! Scissors beats Paper");
            gameStatus = status.WIN;
        }//end nested if
    }//end outer if

    if(playerSelect==computerSelect){
        console.log("The game is a tie");
        gameStatus = status.DRAW;
    }//end if
} //end function playRound

playerBtn.forEach( (button) => {
    button.addEventListener( 'click', function(e){
        let player = e.target.id; //gets the id of the target element and returns a string
        let computer = counterPlay();
        playRound(player,computer);
    })
}
);

           /* function game(){
                for(let i=1; i<=5; i++){
                    let player = prompt("Enter your choice: ");
                    player = player.toLowerCase();
                    let computer = counterPlay();
                    playRound(player,computer);
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
                }//end for loop
                console.log("\nYour Point: " + playerPoint + "\nComputer Point: " + computerPoint);
                if(playerPoint > computerPoint)
                    console.log("\nPlayer wins with a point of " + playerPoint);
                else if(playerPoint < computerPoint)
                    console.log("\nComputer wins with a point of " + computerPoint);
                else
                    console.log("\nDraw");
            }//end function game
            game();  */
            /*let player = prompt("Enter your choice: ");
            player = player.toLowerCase();*/
            
