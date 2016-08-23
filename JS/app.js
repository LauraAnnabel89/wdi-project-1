var speeds           = [400,300,500,400];
var widths           = [10, 200, 300, 75];
var playerScore;
var $gameSpaceHeight = $(".game-space").height.val;
var $balloonHeight   = $(".balloon").height.val;
var $width           = $(".game-space").width.val;
var balloonInterval, animateBaloonInterval, endGameInterval;


$(start);

function start() {
 $("button").click(startGame)
}

function enterName(startGame) {
  $("button").click()
}

function startGame() {
  playerScore      = 0;
  $(".game-space").html('<div class="game-over"></div>');
  balloonInterval = setInterval(function() {
    createballoon();
    balloonClick();
  }, 3000);

  function balloonClick() {
    $(".balloon").click(function() {
      $(this).remove();
      playerScore++;
      $("#playerCurrentScore").html(playerScore);
      // new Audio("../Pop.wav").play()
    })
  }
};

function createballoon() {
  var randPosition = Math.floor(Math.random() * (800 - 0 + 10) + 10);
  $('<div class="balloon"></div>')
  .appendTo('.game-space')
  .css('left', randPosition + "px")
  
  animateballoon($('.balloon'))
}

function animateballoon(balloon) {
  var speed = speeds[Math.floor(Math.random()*speeds.length)];   
  
  animateBalloonInterval = setInterval(function() {
    var speed  = playerScore+1;
    balloon.animate({
      bottom: '+='+$(window).width()+'px',
    }, 10000 / speed, 'linear')
  }, 200);

  endGameInterval = setInterval(function() {
    checkForEndGame(balloon)
  }, 500);
}

function checkForEndGame(balloon) {
  var topInt = parseInt($(balloon).css('top'), 10);
  if (topInt < 0) {
    $(".game-space").html("Game-Over! " + playerScore).css({
      "font-size": "100px",
      "letter-spacing": "15px", 
      "font-family": "NewUnicodeFont, sans-serif",
      "text-align": "center"
    });

    balloonInterval       = clearInterval(balloonInterval);
    animateBalloonInterval = clearInterval(animateBalloonInterval);
    endGameInterval       = clearInterval(endGameInterval);
    $("#playerCurrentScore").html("");
    return;
  }   
}