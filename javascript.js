/**
 * Created by hillarosenberg on 2017/07/03.
 */


//stores global variables
var cardID = document.getElementsByClassName("card");
var choices = 0;
var firstCard;
var secondCard;
var correctGuesses = 0;

//function to randomly assign ids to cards "shuffle"
function shuffleCards() {
    // create random shuffle of arrays to assign as divs
    var idArray = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
    idArray.sort(function(a, b){return 0.5 - Math.random()});
    //loop to assign id's to cards
        for (var i = 0; i < idArray.length; i++) {
            cardID[i].setAttribute("data-id", idArray[i]);
            cardID[i].style.backgroundImage = "url(images/" + cardID[i].getAttribute("data-id") + ".jpg)";
            cardID[i].addEventListener("click", flipCard);
        }

}
//shuffle cards on load
shuffleCards();

//function to "flip" cards on click and assign first card and second card
function flipCard() {
    if(choices === 2){
        return;
    }
    else if(choices === 0){
        event.target.style.opacity = "1";
        firstCard = event.target;

        choices = 1;
    }
    else{
        event.target.style.opacity = "1";
        secondCard = event.target;
        choices = 2;
        setTimeout(checkCards, 1000);
    }
}

//function to see if chosen cards match and to keep count of matches
function checkCards(){
    //once counter reaches 10 all cards have been matched
    if(correctGuesses===9){
        console.log("you won!");
    }
    else if(firstCard.getAttribute("data-id") === secondCard.getAttribute("data-id")){
        //add to counter for each correct guess
        correctGuesses += 1;
        //remove event listener after listener after cards have been clicked
        firstCard.removeEventListener("click",flipCard);
        secondCard.removeEventListener("click",flipCard);
    }
    else{
        firstCard.style.opacity = "0";
        secondCard.style.opacity = "0";
    }
    choices = 0;
}

//function to start new game
function newGame(){
    choices = 0;
    var card = document.getElementsByClassName("cards");
    card.style.opacity = "0";
    shuffleCards();
}


//event listener to shuffle cards after page load
document.getElementById("shuffle").addEventListener("click", shuffleCards);
//event listener to start new game
document.getElementById("new").addEventListener("click", newGame);


