var selectedNumbers=[1, 5, 10, 20];
var counter=0;
var score = "Your total score is: ";
var randomNumberTarget = $("#randomNumber");
var wins = 0;
var winword= "Wins: ";
var losses = 0;
var lossword= "Losses: ";
var randomNumber = Math.floor((Math.random() * 100) - 1);
var randomNumberTarget = $("#randomNumber");
randomNumberTarget.html(randomNumber);
function resetGame(){
  randomNumber = Math.floor((Math.random() * 100) - 1);
  randomNumberTarget.html(randomNumber);
  counter = 0;
  $("#score").text(score + counter);
}
$(document).ready(function(){
  $("#score").text(score + counter);
  for(i=0; i<selectedNumbers.length; i++){
    var crystalImage = $('<img>');
    crystalImage.attr('data-num', selectedNumbers[i]);
    crystalImage.attr('src', 'assets/images/ruby'+(parseInt([i])+1)+'.png');
    crystalImage.attr('alt', 'crystals');
    crystalImage.addClass('image');
    $('#img1').append(crystalImage);
  }
  $('.image').on('click', function(){
    counter = counter + parseInt($(this).data('num'));;
    $("#score").text(score + counter);
    if(counter == randomNumber){
      wins+=1;
      $("#win").html(winword + wins);
      alert("You won!!!");
      resetGame();
    } else if (counter > randomNumber){
      losses+=1;
      $("#loss").html(lossword + losses);
      alert("You lost!!!");
      resetGame();
    }
  });

});
