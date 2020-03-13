
// app . js file for tic tac toe game a none ai virsion 

var player1 = 'O';
var player2 = 'X';
var movemade = 0;
var currentturn = 1;
var reset = document.querySelector('.reset');
var winnercontent = document.querySelector('.winner');
var playbox = document.querySelectorAll('.box');
winnercontent.innerHTML = " ";
//this is for the click event
playbox.forEach(function(box) {
    box.addEventListener('click', () => {
        //moves calculater
        movemade++;
        //condition for the player
        if(currentturn % 2 === 1) {
            box.innerHTML = player1;
            let P1 = document.querySelector('.player1');
            P1.style.color = "#8c60d4";
            P1.style.fill = "#8c60d4";
            //remove the style of p2
            let P2 = document.querySelector('.player2');
            P2.style.color = "rgb(88, 88, 88)";
            P2.style.fill = "rgb(88, 88, 88)";
            currentturn++;
        }
        else {
            box.innerHTML = player2;
            let P2 = document.querySelector('.player2');
            P2.style.color = "#8c60d4";
            P2.style.fill = "#8c60d4";
            //remove the style of p1
            let P1 = document.querySelector('.player1');
            P1.style.color = "rgb(88, 88, 88)";
            P1.style.fill = "rgb(88, 88, 88)";
            currentturn--;
        }
        console.log(movemade);
        if(checkforwinner()) {
            if(currentturn == 1) {
                var thewinner = player2;
            }
            else if(currentturn == 2) {
                var thewinner = player1;
            }
            declarewinner(thewinner);             
        }
    });
});

// reset the whole console

reset.addEventListener('click', (e) => {
    var move = Array.prototype.slice.call(document.querySelectorAll('.box'));
    move.map((m) => {
        m.innerHTML = "";
    });
    let P2 = document.querySelector('.player2');
    P2.style.color = "rgb(88, 88, 88)";
    P2.style.fill = "rgb(88, 88, 88)";
    let P1 = document.querySelector('.player1');
    P1.style.color = "rgb(88, 88, 88)";
    P1.style.fill = "rgb(88, 88, 88)";
    currentturn = 1;
    winnercontent.innerHTML = " ";
});

// check for the winner

function checkforwinner () {
    if(movemade > 4) {
        var boxes = Array.prototype.slice.call(document.querySelectorAll('.box'));
        var result = boxes.map(function (boxes) { return boxes.innerHTML; });
        var winningcombo = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        return winningcombo.find(function (combo) {
            if(result[combo[0]] !== "" && result[combo[1]] !== "" && result[combo[2]] !== "" && result[combo[0]] === result[combo[1]] && result[combo[1]] === result[combo[2]] && result[combo[2]] === result[combo[0]] ) {
                console.log(result[combo[0]]);
                console.log(result[combo[1]]);
                console.log(result[combo[2]]);
                return true;
            }
            else {
                return false;
            }
        });
    }
} 
function declarewinner (winners) {
    if(winners == player1) {
        winners = "Player 1";
    }
    else {
        winners = "Player 2";
    }
    winnercontent.innerHTML = "Congratulation   " + winners +"  wins !!!!";
} 