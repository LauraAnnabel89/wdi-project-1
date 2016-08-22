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
  var $playerName = $("input[name=playerName]").val();
  $("#playerNameDisplay").append($playerName);
}

function startGame() {
  createBalloon();
  setInterval(function() {
    createBalloon();
    startGame();
    balloonClick();
  }, 5000);


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
    function exitGame () {
      alert("Game Over")
      playerScore = 0;
    }
  }
};

function createBalloon() {
  var balloon = "<div class='Balloon'></div>"
  $('.Game-Space').prepend(balloon);
  animateBalloon($('.Balloon'))
}

function animateBalloon(balloon) {
  var speed = speeds[Math.floor(Math.random()*speeds.length)];   

  setInterval(function() {
    balloon.animate({bottom: '+=10px'})
    balloon.animate({left: '+=10px'})
  }, speed);
}   
function startingPoint() {
  var $width = widths[Math.floor(Math.random()*widths.length)];
}

}












