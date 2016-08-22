var speeds = [400,300,500,400];
var width = [50, 50, 100, 0, 50];
var playerScore = 0;
var startingPoint = $(".Game-Space").width 
var gameSpaceHeight = $(".Game-Space").height.val
var balloonHeight = $(".Balloon").height.val

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
  }, 4000);


function balloonClick() {
    $(".Balloon").click(function() {
      $(this).remove();
      // $(".Balloon").effect('explode'); 
      var $playerScore
      ++ playerScore;
      $("#playerCurrentScore").html(playerScore);
    })

  }

function stopGame () {
   if (balloonHeight > gameSpaceHeight) {
    // return $start
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
    balloon.animate({bottom: '+=30px'})
    balloon.animate({left: '+=30px'})
  }, speed);
}   

}














