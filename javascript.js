/**
 * Created by hillarosenberg on 2017/07/03.
 */

// create random shuffle of arrays to assign as divs
var idArray = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
idArray.sort(function(a, b){return 0.5 - Math.random()});
console.log(idArray);

var cardID;
//function to randomly assign ids to cards "shuffle"
function shuffleCards() {
    for (var i = 0; i < idArray.length; i++) {
        cardID = document.getElementsByClassName("card");
        cardID[i].setAttribute("data-id", idArray[i]);
        cardID[i].style.backgroundImage = "url(images/" +  cardID[i].getAttribute("data-id") + ".jpg)";
    }
}



shuffleCards();




