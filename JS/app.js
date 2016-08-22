var speeds = [100,300,200,400];
var width = [50, 50, 100, 0, 50];
var playerScore = 0;
var startingPoint = $(".Game-Space").width 
var gameSpaceHeight = $(".Game-Space").height.val
var balloonHeight = $(".Balloon").height.val

$(start);

alert("Welcome to the game, you lil' heartbreaker! Enter your name to begin...");

function start() {
  createBalloon();
  setInterval(function() {
    createBalloon();
    startGame();
    balloonClick();
    enterName();
  }, 7000);

  function balloonClick() {
    $(".Balloon").click(function() {
      $(".Balloon").fadeOut(0);
      // $(".Balloon").effect('explode'); 
      var $playerScore
      ++ playerScore;
      $("#playerCurrentScore").html(playerScore);
    })

  }
  function enterName () {
    $("button").click(function() {
      var $playerName = $("input[name=playerName]").val();
      $("#playerNameDisplay").append($playerName);
    })
  }

  function startGame () {
   $("button").click(function() {
   })


   function stopGame (balloon, GameSpace) {
    if (balloonHeight > gameSpaceHeight) ;
     $('.Balloon').finish(startgame===false) 
     };  
    }


function createBalloon() {
  var balloon = "<div class='Balloon'></div>"
  $('.Game-Space').prepend(balloon);
  animateBalloon($('.Balloon'))
}


function animateBalloon(balloon) {
  var speed = speeds[Math.floor(Math.random()*speeds.length)];   

  setInterval(function() {
    balloon.animate({bottom: '+=20px'})
    balloon.animate({left: '+=20px'})
  }, speed);
}   
}















