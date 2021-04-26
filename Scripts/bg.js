(function () {
  

  var starFieldWidth = 1200;
  var starFieldHeight = 700;
  
  addStars(starFieldWidth, starFieldHeight, 70);
  animateStars(starFieldWidth, 2);
  
})();


function addStars(starFieldWidth, starFieldHeight, noOfStars) {
  var starField = document.getElementById('star-field');
  var numberOfStars = noOfStars;
  
  for (var i = 0; i < numberOfStars; i++) {
    var star = document.createElement('div');
  	star.className = 'star';
    var topOffset = Math.floor((Math.random() * starFieldHeight) + 1);
    var leftOffset = Math.floor((Math.random() * starFieldWidth) + 1);
    star.style.top = topOffset + 'px';
    star.style.left = leftOffset + 'px';
    star.style.position = 'absolute';
  	starField.appendChild(star);
  }
}

function animateStars(starFieldWidth, speed) {
  var starField = document.getElementById('star-field');
  var stars = starField.childNodes;
  
  function getStarColor(index) {
    if (index % 8 == 0)
      return 'red';
    else if (index % 10 == 0)
      return 'yellow';
    else if (index % 17 == 0)
      return 'blue';
    else
      return 'white';
  }
  
  function getStarDistance(index) {
    if (index % 6 == 0)
      return '';
    else if (index % 9 == 0)
      return 'near';
    else if (index % 2 == 0)
      return 'far';
    else
      return 0;
  }
  
  function getStarRelativeSpeed(index) {
    if (index % 6 == 0)
      return 1;
    else if (index % 9 == 0)
      return 2;
    else if (index % 2 == 0)
      return -1;
    else
      return 0;
  }
  
  setInterval(function() {
    for (var i = 1; i < stars.length; i++) {
      stars[i].className = 'star' + ' ' + getStarColor(i) + ' ' + getStarDistance(i); 

      var currentLeft = parseInt(stars[i].style.left, 10);
      var leftChangeAmount = speed + getStarRelativeSpeed(i);
      var leftDiff;
      if (currentLeft - leftChangeAmount < 0) {
        leftDiff = currentLeft - leftChangeAmount + starFieldWidth;
      }
      else {
        leftDiff = currentLeft - leftChangeAmount;
      }
      stars[i].style.left = (leftDiff) + 'px';
    }
    
  }, 15);
  
}


// *************************audio scripts

var bg = new Audio("Audio/bgmusic.mp3" ) ;

bg.oncanplaythrough = function(){
bg.play();
bg.volume = 0.1;
}
bg.loop = true;

bg.onended = function(){
bg.play();
}



var launch = new Audio("Audio/launch.mp3" ) ;

launch.oncanplaythrough = function(){
launch.play();
launch.volume = 0.1;
}

var left = new Audio("Audio/left_right.wav" ) ;

left.oncanplaythrough = function(){
left.play();
left.volume=0.1;
}
var leftl = new Audio("Audio/left_right.wav" ) ;

leftl.oncanplaythrough = function(){
leftl.play();
leftl.volume=0.1;


}

var jump = new Audio("Audio/jump.wav" ) ;

jump.oncanplaythrough = function(){
jump.play();
jump.volume=0.1;
}

var jumpr = new Audio("Audio/jump.wav" ) ;

jumpr.oncanplaythrough = function(){
jumpr.play();
jumpr.volume=0.1;
}

var cath = new Audio("Audio/catchme.wav" ) ;

cath.oncanplaythrough = function(){
cath.play();
cath.volume=0.1;
}



