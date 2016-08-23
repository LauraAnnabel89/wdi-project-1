# Wdi-project-1

#### Balloon Pop - Banksy Style

#####Rules

1. Player clicks the balloons to earn points
2. The higher the points the faster the balloons travel up the screen
3. If they reach the top of the wall it's game over!


#### The Idea

A fun, addictive game, inspired by the bubble-wrap-pop app but inspired by my walk in to GA through East London! 

#### How it works

Balloons are created and randomly generated using jQuery by iterating over a speed array and randomising the starting point using Math.Function. By clicking on the balloon, points are earned and pushed to the player score div, using .html and then removed. 

The player score is used in a function that divides speed of the balloons by a certain number, incrementing every time. Their is a hidden 'game-over' div at the top of the wall that when reached pushed an alert to html for Game Over and the current player score. The game is then reset using the start button by removing the intervals from creating and animating the balloons and reseting the html.


####The build

* Used HTML, CSS and jQuery
* Google fonts and an external font file were used (Punk Kid font by Chris Hansen, approved for commercial used)
* Pic-resize, Coolers and Paletton were used to split and resize pictures where necessary and get inspiration for the minimal colour palette.


#### Problems & Challenges

The main challenges came from randomising the location of the balloons when being created. This was eventually sorted using Math.Random and iterating over a variety of speeds in an array. 

It was also really tricky to work out the end of game logic, I was inspired by the logic of Tetris, and fellow students games to create a game-stop div, hidden at the top then using .css to work out how far this would need to reach in order to generate a game over function. It was then also tricky to get the game to reset, however this was achieved my resetting all functions that were involved in creating, animating and scoring play with the balloon.

