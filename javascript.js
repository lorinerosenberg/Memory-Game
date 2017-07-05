/**
 * Created by hillarosenberg on 2017/07/03.
 */

// create random shuffle of arrays to assign as divs
var idArray = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
idArray.sort(function(a, b){return 0.5 - Math.random()});

//stores global variables
var cardID = document.getElementsByClassName("card");
var choices = 0;
var firstCard;
var secondCard;
var correctGuesses = 0;

//function to randomly assign ids to cards "shuffle"
function shuffleCards() {
    for (var i = 0; i < idArray.length; i++) {
        cardID[i].setAttribute("data-id", idArray[i]);
        cardID[i].style.backgroundImage = "url(images/" +  cardID[i].getAttribute("data-id") + ".jpg)";
        cardID[i].addEventListener("click", flipCard);
    }
}
//shuffle cards on load
shuffleCards();

//function to "flip" cards on click and assign first card and second card
function flipCard() {
    if(choices === 2){
        console.log("you've picked two cards");
    }
    else if(choices === 0){
        event.target.style.opacity = "1";
        firstCard = event.target.getAttribute("data-id");
        choices = 1;
        console.log("first choice done");
    }
    else{
        event.target.style.opacity = "1";
        secondCard = event.target.getAttribute("data-id");
        choices = 2;
        console.log("second  choice done");
    }
}





//function to see if chosen cards are a match
