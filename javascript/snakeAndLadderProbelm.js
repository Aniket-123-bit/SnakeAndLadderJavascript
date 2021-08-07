/* The Player then checks for a Option. They are No Play, Ladder or Snake. 
 * Use ((RANDOM)) to check for Options along with rolling a die
 * In Case of No Play the player stays in the same position
 * In Case of Ladder the player moves ahead by the number of position received in the die
 * In Case of Snake the player moves behind by the number of position received in the die
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
let initial_position = 0;

let roll_die = (Math.floor (Math.random() * 6 ) + 1);
let check_options = (Math.floor( Math.random() * 10 ) ) % 3;

switch(check_options){
case noPlay:
initial_position = 0;
console.log("Its a NO PLAY! Player stays in the same position!");
break;

case ladder:
initial_position += roll_die;
console.log("Its a LADDER! Player moves ahead by " +roll_die+ " positions.");
break;

case snake:
initial_position -= roll_die;
console.log("Its a SNAKE! Player moves behind by " +roll_die+ " positions.");
break;

default:
console.log("Error! Please check!");
break;
}
if(initial_position < 0){
initial_position = 0;
console.log("Current position of the player in the game is: " +initial_position);
}