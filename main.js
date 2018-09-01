
var tablero = document.getElementById('tablero');
startGame();
var turno = true;
const cross = '<i class="fas fa-times"></i>';
const circle = '<i class="far fa-circle"></i>';
var btn = document.getElementsByClassName('btn');

function startGame() {
    var casillas = "";
    for (var i = 1; i <= 9; i++) {
        casillas += '<button id=' + i +
            ' onclick="press(this)" class="btn btn-outline-info casilla"></button>';
        if (i % 3 == 0) {
            casillas += '<br>'
        }
    }
    tablero.innerHTML = casillas;
}

function press(boton) {
    if (!boton.innerHTML.length > 0) {
        if (turno) {
            boton.innerHTML = cross;
        } else {
            boton.innerHTML = circle;
        }
        turno = !turno;
        findWinner();
    }
}

function restartGame() {
    turno = true;
    tablero.innerHTML = '';
    startGame();
    btn = document.getElementsByClassName('btn');
}

function findWinner() {
    //Lineas Horizontales
    if (btn[0].innerHTML == circle &&
        btn[1].innerHTML == circle &&
        btn[2].innerHTML == circle) {
        console.log('gano player 2');
        document.playerTwo.submit();
    }
    if (btn[0].innerHTML == cross &&
        btn[1].innerHTML == cross &&
        btn[2].innerHTML == cross) {
        console.log('gano player 1');
        document.playerOne.submit();
    }
    if (btn[3].innerHTML == circle &&
        btn[4].innerHTML == circle &&
        btn[5].innerHTML == circle) {
        console.log('gano player 2');
        document.playerTwo.submit();
    }
    if (btn[3].innerHTML == cross &&
        btn[4].innerHTML == cross &&
        btn[5].innerHTML == cross) {
        console.log('gano player 1');
        document.playerOne.submit();
    }
    if (btn[6].innerHTML == circle &&
        btn[7].innerHTML == circle &&
        btn[8].innerHTML == circle) {
        console.log('gano player 2');
        document.playerTwo.submit();
    }
    if (btn[6].innerHTML == cross &&
        btn[7].innerHTML == cross &&
        btn[8].innerHTML == cross) {
        console.log('gano player 1');
        document.playerOne.submit();
    }
    //Lineas Verticales
    if (btn[0].innerHTML == circle &&
        btn[3].innerHTML == circle &&
        btn[6].innerHTML == circle) {
        console.log('gano player 2');
        document.playerTwo.submit();
    }
    if (btn[0].innerHTML == cross &&
        btn[3].innerHTML == cross &&
        btn[6].innerHTML == cross) {
        console.log('gano player 1');
        document.playerOne.submit();
    }
    if (btn[1].innerHTML == circle &&
        btn[4].innerHTML == circle &&
        btn[7].innerHTML == circle) {
        console.log('gano player 2');
        document.playerTwo.submit();
    }
    if (btn[1].innerHTML == cross &&
        btn[4].innerHTML == cross &&
        btn[7].innerHTML == cross) {
        console.log('gano player 1');
        document.playerOne.submit();
    }
    if (btn[2].innerHTML == circle &&
        btn[5].innerHTML == circle &&
        btn[8].innerHTML == circle) {
        console.log('gano player 2');
        document.playerTwo.submit();
    }
    if (btn[2].innerHTML == cross &&
        btn[5].innerHTML == cross &&
        btn[8].innerHTML == cross) {
        console.log('gano player 1');
        document.playerOne.submit();
    }
    //Linas Cruzadas
    if (btn[0].innerHTML == circle &&
        btn[4].innerHTML == circle &&
        btn[8].innerHTML == circle) {
        console.log('gano player 2');
        document.playerTwo.submit();
    }
    if (btn[0].innerHTML == cross &&
        btn[4].innerHTML == cross &&
        btn[8].innerHTML == cross) {
        console.log('gano player 1');
        document.playerOne.submit();
    }
    if (btn[6].innerHTML == circle &&
        btn[4].innerHTML == circle &&
        btn[2].innerHTML == circle) {
        console.log('gano player 2');
        document.playerTwo.submit();
    }
    if (btn[6].innerHTML == cross &&
        btn[4].innerHTML == cross &&
        btn[2].innerHTML == cross) {
        console.log('gano player 1');
        document.playerOne.submit();
    }
}
