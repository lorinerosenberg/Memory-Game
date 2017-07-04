/**
 * Created by hillarosenberg on 2017/07/03.
 */


//4*5 card setup
for(var i = 0; i<4; i++){
    var rows = document.createElement('div');
    document.body.appendChild(rows);
    rows.id = "cardsRow"

    for(var r = 0; r<5; r++){
        var cards = document.createElement('div');
        rows.appendChild(cards);
        cards.id = "card";
    }
}





