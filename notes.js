var speeds = [400,300,500,400];
var widths = [10, 200, 300, 75];
var playerScore = 0;
var $playerName = "";
var $gameSpaceHeight = $(".Game-Space").height.val
var $balloonHeight = $(".Balloon").height.val
var $width = $(".Game-Space").width.val

$(start);

alert("Welcome to the game, you lil' heartbreaker! Enter your name and click start!");

function start() {
 $("button").click(startGame)
}

function enterName(startGame) {
  $("button").click()
  var $playerName = $("input[name=playerName]").val();
  $("#playerNameDisplay").append($playerName);
}

function startGame(createBalloon) {
  setInterval(function() {
    createBalloon();
    balloonClick();
  }, 5000);
}

function balloonClick() {
  $(".Balloon").click(function() {
    $(this).remove();
      // $(".Balloon").effect('explode'); 
      var $playerScore
      ++ playerScore;
      $("#playerCurrentScore").html(playerScore);
      new Audio("/JS/Pop.wav").play()
    })
}

function stopGame () {
 if (balloonHeight > gameSpaceHeight) { 
  function endGame() {
    $(".Balloon").fadeOut(50);
    playerScore = 0;
    alert(playerName, playerScore)
  }
}

function createBalloon(startGame) {
  var balloon = "<div class='Balloon'></div>"
  $('.Game-Space').prepend(balloon);
  animateBalloon($('.Balloon'))
}

function animateBalloon(balloon) {
  var speed = speeds[Math.floor(Math.random()*speeds.length)]; 
}
setInterval(function() {      
  balloon.animate({bottom: '+=10px'})
  balloon.animate({left: '+=10px'})
},speed);
}   














//****Still Need To Do*****

// Randomise Animations
// Get game to exit out once balloon reaches top of the div
// Add audio files
// Ensure explode function isnt crashing anymore
// Styling
// Refactor Code

// function startingPoint() {
//   var $width = widths[Math.floor(Math.random()*widths.length)];
// }


// Player opens the game and is alerted to enter their name 
//   - alert box and submit button TODAY DONE
// Their name is pushed to the display on the right hand side 
//   - need a div for this and an innerHTML funciton TODAY DONE
// Click start game to start the game
//   - need to add a button and an event listener function that says when the game starts, start to animate the div TODAY DONE
//The balloons start moving randomly over the page 
//  - need to add an event listener to the individual divs then do a for loop, iterating over two or three arrays with math random so they generate different movement accross the page, potentially interval, direction accross the div (need to research animations!) TODAY DONE
// The Balloons will be clickable earning you ten points a time, when you click the balloon makes a popping noise, disappears and the score is stores
//   - Add a hide event when clicked to the div and store the value of this within the playerScores array, push the player scores array to the DIV with player scores
//When the balloons disappear over the top of the screen the game is over!
//  - set a function so when the balloon div if is a certain point on the main div - exit out of the gameplay loop (include it as an if statement?) and pop up an alert ("Game over!") 
//Final alert showing player name and score
//  -- alert boxes, though research how to push these to the screen or modifiy the alert box


// $("#burst").play();






var $paragraph = $("p");
$("#one").after($paragraph);
$("#one").after("<p>Yay! Paragraphs!</p>");





//   alert("Welcome to the game, you lil' heartbreaker! Enter your name to begin...");

// //enter your name and submit
// $("button").click(function() {
//   var $playerName = $("input[name=playerName]").val();
//   $("#playerNameDisplay").append($playerName);
// })


// $('.Balloon').click(function() {
//   // return console.log("clickity-click-click")
//   $('.Balloon').animate({top: '+=400px'},500)
// })
// })





















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

// $(document).on('click touchstart', function () {
// var playerName;
// var playerScore;
// var gameResult = {};
// var highscoreList = [];






















console.log("hello")

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

var = heartTypes ["Normal"=== 10, 
"Death" === -50, "Bonus"=== *3]
var = playerName ""
var = playerScore 0;
var = previousScores []
var = time remaining

Add click events to both the start button and the squares
start button is 45 seconds
squares are 3 seconds that reset


add click events to lis and submit button
function setTimeout() {
  this.reset and loop through array 
}


//once clicked iterate through the hearts loop and the 
//assign each heart type

alert("Hi welcome to the game!").submit (Your Name) - innerHTML (your name) 
//player types name in submit button push this to display to screen div 

start button (click, StartGame)

function StartGame(timeRemaining) {    
     var startTime = Date.now();
     return function() {
        return timeRemaining - ( Date.now() - startTime );
        push.innerHTML to timecounter div
     }
//start button is clicked, time starts to count down, need to find a way to add 45 seconds?

squareClicked initially null

//squares start at null once clicked use the below function to randomise heart type

function gamePlay (i, storePlayerScore) {
      if cli(game play === bonus )
        return ("im src = x3?")
      else (gameplay === death)
        return ("img src = black balloon")
      else (game play === norma)
      return ("img src for burst heart")
    default === null
}

add a math random to the squares array to loop through an array of array i.e. 3 bonus, 2 death balloons : rest are normal

//once clicked!! assign values for the different types of hearts and show as a different image, important that it doesnt appear beforehand


function storePlayerScore () {
  var playerScores = this.value
  currentplayerscore(div).innerHTML = playerscores
}

//store playerscores and push to array

function resetHearts () {
  set timeout on click
  after: click = return li to null
}

//once clicked and the score is stored, return sqaure value to null and reset image

if startTime === 0 return alert(game over!)
  return board to null

//once count down timer returns to zero, alert game over

alert playername + playerScore 

//alert name and score for this games

for loop
if playScore < previousScore - display innerHTML Div for display
  alert "New High Score!"
else "Don't be heart broken! Better luck next time"

//compare playerScore to the previousScore array - if highest of the array push to display

$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}



var speeds = [100,50,20,250];

$(start);

function start() {
  createBalloon();
    setInterval(function() {
    createBalloon();
  }, 5000);


function createBalloon() {
  var balloon = "<div class='Balloon'></div>"
  $('.Game-Space').prepend(balloon);
  animateBalloon($('.Balloon'))
}

function animateBalloon(balloon) {
  // call random number from speeds array
  var speed = speeds[Math.floor(Math.random()*speeds.length)];

  setInterval(function() {
    balloon.animate({bottom: '+=10px'})
    balloon.animate({left: '+=10px'})
  }, speed)
}

function balloonClick() {
  $(".Game-Space").click()
  console.log("I've been clicked")
}

}



