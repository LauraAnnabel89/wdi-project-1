const speeds           = [400,300,500,400];
let playerScore;
let balloonInterval, animateBaloonInterval, endGameInterval;


$(start);

function start() {
 $("button").click(startGame)
}


function startGame() {
  playerScore      = 0;
  $(".game-space").html('<div class="game-over"></div>');
  balloonInterval = setInterval(function() {
    createballoon();
    balloonClick();
  }, 4000);

  function balloonClick() {
    $(".balloon").click(function() {
      $(this).remove();
      playerScore++;
      $("#playerCurrentScore").html(playerScore);
    })
  }
};

function createballoon() {
  const randPosition = Math.floor(Math.random() * (600 - 0 + 1) + 0);
  $('<div class="balloon"></div>')
  .appendTo('.game-space')
  .css('left', randPosition + "px")
  
  animateballoon($('.balloon'))
}

function animateballoon(balloon) {
  const speed = speeds[Math.floor(Math.random()*speeds.length)];   
  
  animateBalloonInterval = setInterval(function() {
    var speed  = playerScore+1;
    balloon.animate({
      bottom: '+='+$(window).height()+'px',
    }, 14000 / speed, 'linear')
  }, 500);

  endGameInterval = setInterval(function() {
    checkForEndGame(balloon)
  }, 500);
}

function checkForEndGame(balloon) {
  const topInt = parseInt($(balloon).css('top'), 10);
  if (topInt < 0) {
    $(".game-space").html(`Game-Over ${playerscore}`).css({
      "font-size": "100px",
      "letter-spacing": "15px", 
      "font-family": "NewUnicodeFont, sans-serif",
    });
  }
  balloonInterval       = clearInterval(balloonInterval);
  animateBalloonInterval = clearInterval(animateBalloonInterval);
  endGameInterval       = clearInterval(endGameInterval);
  return;
}   
