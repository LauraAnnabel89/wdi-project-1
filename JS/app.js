var speeds = [400,300,500,400];
var widths = [10, 200, 300, 75];
var playerScore = 0;
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
  // var $playerName = $("input[name=playerName]").val();
  // $("#playerNameDisplay").append($playerName);
}

function startGame() {
  // createBalloon();
  setInterval(function() {
    createBalloon();
    balloonClick();
  }, 5000);


  function balloonClick() {
    $(".Balloon").click(function() {
      $(this).remove();
      playerScore++;
      $("#playerCurrentScore").html(playerScore);
      new Audio("../Pop.wav").play()
    })
  }

  function stopGame () {
   if (balloonHeight > gameSpaceHeight) {
    function exitGame () {
      alert("Game Over")
      playerScore = 0;
    }
  }
};

function createBalloon() {
  var randPosition = Math.floor(Math.random() * (440 - 0 + 1) + 0);
  $('<div class="Balloon"></div>')
  .appendTo('.Game-Space')
  .css('left', randPosition + "px")
  animateBalloon($('.Balloon'))
}

function animateBalloon(balloon) {
  var speed = speeds[Math.floor(Math.random()*speeds.length)];   
  setInterval(function() {
    balloon.animate({bottom: '+=20px'})
  }, 100);

  setInterval(function() {
    checkForEndGame(balloon)
  }, 500);

}

function checkForEndGame(balloon) {

  var topInt = parseInt($(balloon).css('top'), 10);

  if (topInt === 0) {
      // alert("Game-Over");
      // playerScore = 0
      console.log(playerScore)

    } 
// if topInt is below 0px --> Game over
if (topInt < 0) {
 alert("Game Over");    
}
}
function increaseSpeed () {
  var playerScore = 0;
  var $balloonSpeed = $(".Balloon").animate({bottom: '+=20px'})
  switch (balloonSpeed) { 
    case (playerScore > 10): 
    $balloonSpeed * 2
    break; 
    case (playerScore > 20): 
    $balloonSpeed * 5
    break; 
    case (playerScore > 50): 
    $balloonSpeed * 10
    break; 
    case (playerScore > 100): 
    $balloonSpeed * 50
  }
}
}






