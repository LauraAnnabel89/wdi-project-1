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


var speeds = [100,50,20,250];

$(start);

alert("Welcome to the game, you lil' heartbreaker! Enter your name to begin...");

function start() {
  createBalloon();
  setInterval(function() {
  createBalloon();
  startGame();
  balloonClick();
  enterName();
  }, 5000);

  function enterName () {
  $("button").click(function() {
    var $playerName = $("input[name=playerName]").val();
    $("#playerNameDisplay").append($playerName);
  })
}

  function startGame () {
  $("button").click(function() {
    var $playerName = $("input[name=playerName]").val();
    $("#playerNameDisplay").append($playerName);
  })
}
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
  }, speed);

  function balloonClick() {
    $("div").click()
    createBalloon();
    return console.log("I've been clicked");
  }
};
}




















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
















