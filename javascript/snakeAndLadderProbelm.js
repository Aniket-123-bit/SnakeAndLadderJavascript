/* Repeat till the Player reaches the winning position 100. 
 * Note: In case the player position moves below 0, then the player restarts from 0
 *
 * @author: ANIKET RAIKWAR
 * DATE: 07/08/2021
 */
const noPlay = 0;
const ladder = 1;
const snake = 2;

console.log("Welcome to SnakeAndLadder Probelm");
console.log("******************************");
console.log("Snake and Ladder game played with single player at start position 0");
//let initial_position = 0;
//let final_position = 100;
let playerPosition = 0;
let winPosition = 100;
for(playerPosition=0; playerPosition<winPosition; playerPosition++) {

let roll_die = (Math.floor (Math.random() * 6 ) + 1);
let check_options = (Math.floor( Math.random() * 10 ) ) % 3;

if(playerPosition < 0) {
switch(check_options){
case noPlay:
    playerPosition = 0;
console.log("Its a NO PLAY! Player stays in the same position!");
break;

case ladder:
    playerPosition += roll_die;
console.log("Its a LADDER! Player moves ahead by " +roll_die+ " positions.");
break;

case snake:
    playerPosition -= roll_die;
console.log("Its a SNAKE! Player moves behind by " +roll_die+ " positions.");
break;

default:
console.log("Error! Please check!");
break;
}

}

console.log("Player position is: "+playerPosition);

    
}
