var speeds = [400,300,500,400];
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
function enterName () {
    $("button").click(function() {
      var $playerName = $("input[name=playerName]").val();
      $("#playerNameDisplay").append($playerName);
    })
  }

function startGame () {
   $("button").click(function() {
    if $("button").on (start() {
    else if ("")
    })
   })


function stopGame (balloon, GameSpace) {
    if (balloonHeight > gameSpaceHeight) ;
     $(".Game-Space").remove;
      alert(playerScore);
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















