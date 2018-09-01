let startGame = () => {
    let casillas = '';
    for (let i = 1; i <= 9; i++) {
        casillas += `<button id="${i}" 
        onclick="press(this)" 
        class="btn btn-outline-info casilla"></button>`
        if (i % 3 == 0) {
            casillas += `<br>`
        }
    }
    tablero.innerHTML = casillas;
}

const tablero = document.getElementById('tablero');
startGame();
let turno = true;
const cross = `<i class="fas fa-times"></i>`;
const circle = `<i class="far fa-circle"></i>`;
let btn = document.getElementsByClassName('btn');

let press = (boton) => {
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

let showWinner = (ganador) => {
    tablero.innerHTML = `<h3>El jugador <strong>
                        ${ganador}</strong>
                        ganó</h3>`;
}

let restartGame = () => {
    turno = true;
    tablero.innerHTML = '';
    startGame();
    btn = document.getElementsByClassName('btn');
}

let findWinner = () => {

    //Lineas Horizontales
    if (btn[0].innerHTML == circle &&
        btn[1].innerHTML == circle &&
        btn[2].innerHTML == circle) {
        showWinner('2');
    }
    if (btn[0].innerHTML == cross &&
        btn[1].innerHTML == cross &&
        btn[2].innerHTML == cross) {
        showWinner('1');
    }
    if (btn[3].innerHTML == circle &&
        btn[4].innerHTML == circle &&
        btn[5].innerHTML == circle) {
        showWinner('2');
    }
    if (btn[3].innerHTML == cross &&
        btn[4].innerHTML == cross &&
        btn[5].innerHTML == cross) {
        showWinner('1');
    }
    if (btn[6].innerHTML == circle &&
        btn[7].innerHTML == circle &&
        btn[8].innerHTML == circle) {
        showWinner('2');
    }
    if (btn[6].innerHTML == cross &&
        btn[7].innerHTML == cross &&
        btn[8].innerHTML == cross) {
        showWinner('1');
    }

    //Lineas Verticales
    if (btn[0].innerHTML == circle &&
        btn[3].innerHTML == circle &&
        btn[6].innerHTML == circle) {
        showWinner('2');

    }
    if (btn[0].innerHTML == cross &&
        btn[3].innerHTML == cross &&
        btn[6].innerHTML == cross) {
        showWinner('1');

    }
    if (btn[1].innerHTML == circle &&
        btn[4].innerHTML == circle &&
        btn[7].innerHTML == circle) {
        showWinner('2');
    }
    if (btn[1].innerHTML == cross &&
        btn[4].innerHTML == cross &&
        btn[7].innerHTML == cross) {
        showWinner('1');
    }
    if (btn[2].innerHTML == circle &&
        btn[5].innerHTML == circle &&
        btn[8].innerHTML == circle) {
        showWinner('2');
    }
    if (btn[2].innerHTML == cross &&
        btn[5].innerHTML == cross &&
        btn[8].innerHTML == cross) {
        showWinner('1');
    }

    //Linas Cruzadas
    if (btn[0].innerHTML == circle &&
        btn[4].innerHTML == circle &&
        btn[8].innerHTML == circle) {
        showWinner('2');
    }
    if (btn[0].innerHTML == cross &&
        btn[4].innerHTML == cross &&
        btn[8].innerHTML == cross) {
        showWinner('1');
    }
    if (btn[6].innerHTML == circle &&
        btn[4].innerHTML == circle &&
        btn[2].innerHTML == circle) {
        showWinner('2');
    }
    if (btn[6].innerHTML == cross &&
        btn[4].innerHTML == cross &&
        btn[2].innerHTML == cross) {
        showWinner('1');
    }
    
}
