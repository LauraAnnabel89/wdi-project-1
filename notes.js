//IDEA//
//A game similar to the bubble wrap pop game but based around banksy's girl with the red balloon
//The goal is to pop as many hearts as possible within forty five seconds
//One player and you try to beat your last high score

//Possible harder ammendments

//The hearts float up the page as opposed to being static on a grid
//There is a broken heart that when clicked on forfits the game or halfs points
//There a bonus hearts that double scores etc


//HTML//
//Use an li grid - similarly to Tic Tac Toe
//Use a HTML audio file to add a popping or bursting sound
//Create a button to start the game
//Create a display area so you can see your last high score and most recent score

//CSS//
//Like the bubble wrap game but for people who like visually nice games!
//Use a rough looking wall background and the girl with the red baloon in the corner
//Have the hearts styled similarly to the drawing and/or floating up like balloons
//Use minimal themes, black, white and off read
//Animate the hearts so they enlarge when hovered over using hover/transform


//JAVASCRIPT//
//Variables needed
//Functions needed - 
//Set a timer to 45 seconds using a variation of 
// function createCountDown(timeRemaining) {    
//     var startTime = Date.now();
//     return function() {
//        return timeRemaining - ( Date.now() - startTime );
//     }
// }
//Add a click to each of the squares and set the value to be a certain amount
//Hold that value in a player array
//Immediately reset that square after the click and after the value is stored
//After completing the game - the time runs out - reset the board
//Push the values to the display for most recent game
//Create an array to store all scores for that player?? Make a variable to get the highest value and display this


//Elements to Grab from the DOM - lis, button, display box x 2
//Variables needed - empty array for player name player score, score types, game result, high score

//Add a click to li elements and iterate through

//Input box to say enter your name - push this to display

//Function to say new game - start the timer

//Create array with different balloons and what they equal?

//Function to say when li clicked - capture value "10" switch or if/else statement for other types of click - bonus balloons and death balloons - i.e. x2 for bonus and /2 for death

//function to randomise types of balloons

//Store this score in player array

//Function when timer stops - push player score to display

//Function to loop through player history and push high score to the top

//Function to switch between two images - one for the full heart and one for the popped heart, include audio file in this
