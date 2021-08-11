var buttonColours = ["red" , "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
userClickedPattern = [];
var level = 0;
function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber*4);
    randomChosenColour = buttonColours[randomNumber];
    $("h1").text("Level " + level);
    gamePattern.push(randomChosenColour);$("#" + randomChosenColour).fadeIn().fadeOut().fadeIn();
    playSound(randomChosenColour);
    level++;

}





$(".btn").click(function (e) {
    var userChosenColour = e.target.id; 
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});

function playSound(name){
    
    var playAudio = new Audio("sounds/" + name + ".mp3");

    playAudio.play();
}



function animatePress(currentColour){
$("#" + currentColour).addClass("pressed");
setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");

}, 100); 

}

if (window.performance.navigation.type === 1) {
    $(document).keydown(function(){
        nextSequence();
    
    });
  }

function checkAnswer(currentLevel){
 if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
 {
    if (userClickedPattern.length === gamePattern.length){


        setTimeout(function () {
          nextSequence();
        }, 1000);

      }


 }
 else {
     playSound("wrong");
     $("body").addClass("game-over");
     setTimeout( function(){
     $("body").removeClass("game-over");    
     }, 200);
     $("h1").text("Game Over, Press Any Key to Restart");
     startOver();
 }

}  

function startOver(){

level = 0;
gamePattern = [];
window.performance.navigation.type === 1;



}


