// O valor 0 significa vez do X, e o valor 1 significa vez do O
var turn = 0;

// Verifica de quem é a vez, e se o quadrado estiver vazio faz uma jogada
function play_box1() {
    if (turn == 0 && xbox1.style.display == 'none' && obox1.style.display == 'none') {
        xbox1.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && xbox1.style.display == 'none' && obox1.style.display == 'none') {
            obox1.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }
    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: blue;">X</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
    if (obox9.style.display == 'block' && obox8.style.display == 'block' && obox7.style.display == 'block' ||
        obox6.style.display == 'block' && obox5.style.display == 'block' && obox4.style.display == 'block' ||
        obox3.style.display == 'block' && obox2.style.display == 'block' && obox1.style.display == 'block' ||
        obox1.style.display == 'block' && obox4.style.display == 'block' && obox7.style.display == 'block' ||
        obox2.style.display == 'block' && obox5.style.display == 'block' && obox8.style.display == 'block' ||
        obox3.style.display == 'block' && obox6.style.display == 'block' && obox9.style.display == 'block' ||
        obox9.style.display == 'block' && obox5.style.display == 'block' && obox1.style.display == 'block' ||
        obox7.style.display == 'block' && obox5.style.display == 'block' && obox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: green;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
}

function play_box2() {
    if (turn == 0 && xbox2.style.display == 'none' && obox2.style.display == 'none') {
        xbox2.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && xbox2.style.display == 'none' && obox2.style.display == 'none') {
            obox2.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }
    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: blue;">X</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
    if (obox9.style.display == 'block' && obox8.style.display == 'block' && obox7.style.display == 'block' ||
        obox6.style.display == 'block' && obox5.style.display == 'block' && obox4.style.display == 'block' ||
        obox3.style.display == 'block' && obox2.style.display == 'block' && obox1.style.display == 'block' ||
        obox1.style.display == 'block' && obox4.style.display == 'block' && obox7.style.display == 'block' ||
        obox2.style.display == 'block' && obox5.style.display == 'block' && obox8.style.display == 'block' ||
        obox3.style.display == 'block' && obox6.style.display == 'block' && obox9.style.display == 'block' ||
        obox9.style.display == 'block' && obox5.style.display == 'block' && obox1.style.display == 'block' ||
        obox7.style.display == 'block' && obox5.style.display == 'block' && obox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: green;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
}

function play_box3() {
    if (turn == 0 && xbox3.style.display == 'none' && obox3.style.display == 'none') {
        xbox3.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && xbox3.style.display == 'none' && obox3.style.display == 'none') {
            obox3.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }
    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: blue;">X</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
    if (obox9.style.display == 'block' && obox8.style.display == 'block' && obox7.style.display == 'block' ||
        obox6.style.display == 'block' && obox5.style.display == 'block' && obox4.style.display == 'block' ||
        obox3.style.display == 'block' && obox2.style.display == 'block' && obox1.style.display == 'block' ||
        obox1.style.display == 'block' && obox4.style.display == 'block' && obox7.style.display == 'block' ||
        obox2.style.display == 'block' && obox5.style.display == 'block' && obox8.style.display == 'block' ||
        obox3.style.display == 'block' && obox6.style.display == 'block' && obox9.style.display == 'block' ||
        obox9.style.display == 'block' && obox5.style.display == 'block' && obox1.style.display == 'block' ||
        obox7.style.display == 'block' && obox5.style.display == 'block' && obox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: green;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
}

function play_box4() {
    if (turn == 0 && xbox4.style.display == 'none' && obox4.style.display == 'none') {
        xbox4.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && xbox4.style.display == 'none' && obox4.style.display == 'none') {
            obox4.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }
    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: blue;">X</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
    if (obox9.style.display == 'block' && obox8.style.display == 'block' && obox7.style.display == 'block' ||
        obox6.style.display == 'block' && obox5.style.display == 'block' && obox4.style.display == 'block' ||
        obox3.style.display == 'block' && obox2.style.display == 'block' && obox1.style.display == 'block' ||
        obox1.style.display == 'block' && obox4.style.display == 'block' && obox7.style.display == 'block' ||
        obox2.style.display == 'block' && obox5.style.display == 'block' && obox8.style.display == 'block' ||
        obox3.style.display == 'block' && obox6.style.display == 'block' && obox9.style.display == 'block' ||
        obox9.style.display == 'block' && obox5.style.display == 'block' && obox1.style.display == 'block' ||
        obox7.style.display == 'block' && obox5.style.display == 'block' && obox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: green;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
}

function play_box5() {
    if (turn == 0 && xbox5.style.display == 'none' && obox5.style.display == 'none') {
        xbox5.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && xbox5.style.display == 'none' && obox5.style.display == 'none') {
            obox5.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }
    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: blue;">X</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
    if (obox9.style.display == 'block' && obox8.style.display == 'block' && obox7.style.display == 'block' ||
        obox6.style.display == 'block' && obox5.style.display == 'block' && obox4.style.display == 'block' ||
        obox3.style.display == 'block' && obox2.style.display == 'block' && obox1.style.display == 'block' ||
        obox1.style.display == 'block' && obox4.style.display == 'block' && obox7.style.display == 'block' ||
        obox2.style.display == 'block' && obox5.style.display == 'block' && obox8.style.display == 'block' ||
        obox3.style.display == 'block' && obox6.style.display == 'block' && obox9.style.display == 'block' ||
        obox9.style.display == 'block' && obox5.style.display == 'block' && obox1.style.display == 'block' ||
        obox7.style.display == 'block' && obox5.style.display == 'block' && obox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: green;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
}

function play_box6() {
    if (turn == 0 && xbox6.style.display == 'none' && obox6.style.display == 'none') {
        xbox6.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && xbox6.style.display == 'none' && obox6.style.display == 'none') {
            obox6.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }
    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: blue;">X</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
    if (obox9.style.display == 'block' && obox8.style.display == 'block' && obox7.style.display == 'block' ||
        obox6.style.display == 'block' && obox5.style.display == 'block' && obox4.style.display == 'block' ||
        obox3.style.display == 'block' && obox2.style.display == 'block' && obox1.style.display == 'block' ||
        obox1.style.display == 'block' && obox4.style.display == 'block' && obox7.style.display == 'block' ||
        obox2.style.display == 'block' && obox5.style.display == 'block' && obox8.style.display == 'block' ||
        obox3.style.display == 'block' && obox6.style.display == 'block' && obox9.style.display == 'block' ||
        obox9.style.display == 'block' && obox5.style.display == 'block' && obox1.style.display == 'block' ||
        obox7.style.display == 'block' && obox5.style.display == 'block' && obox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: green;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
}

function play_box7() {
    if (turn == 0 && xbox7.style.display == 'none' && obox7.style.display == 'none') {
        xbox7.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && xbox7.style.display == 'none' && obox7.style.display == 'none') {
            obox7.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }
    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: blue;">X</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
    if (obox9.style.display == 'block' && obox8.style.display == 'block' && obox7.style.display == 'block' ||
        obox6.style.display == 'block' && obox5.style.display == 'block' && obox4.style.display == 'block' ||
        obox3.style.display == 'block' && obox2.style.display == 'block' && obox1.style.display == 'block' ||
        obox1.style.display == 'block' && obox4.style.display == 'block' && obox7.style.display == 'block' ||
        obox2.style.display == 'block' && obox5.style.display == 'block' && obox8.style.display == 'block' ||
        obox3.style.display == 'block' && obox6.style.display == 'block' && obox9.style.display == 'block' ||
        obox9.style.display == 'block' && obox5.style.display == 'block' && obox1.style.display == 'block' ||
        obox7.style.display == 'block' && obox5.style.display == 'block' && obox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: green;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
}

function play_box8() {
    if (turn == 0 && xbox8.style.display == 'none' && obox8.style.display == 'none') {
        xbox8.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && xbox8.style.display == 'none' && obox8.style.display == 'none') {
            obox8.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }
    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: blue;">X</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
    if (obox9.style.display == 'block' && obox8.style.display == 'block' && obox7.style.display == 'block' ||
        obox6.style.display == 'block' && obox5.style.display == 'block' && obox4.style.display == 'block' ||
        obox3.style.display == 'block' && obox2.style.display == 'block' && obox1.style.display == 'block' ||
        obox1.style.display == 'block' && obox4.style.display == 'block' && obox7.style.display == 'block' ||
        obox2.style.display == 'block' && obox5.style.display == 'block' && obox8.style.display == 'block' ||
        obox3.style.display == 'block' && obox6.style.display == 'block' && obox9.style.display == 'block' ||
        obox9.style.display == 'block' && obox5.style.display == 'block' && obox1.style.display == 'block' ||
        obox7.style.display == 'block' && obox5.style.display == 'block' && obox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: green;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
}

function play_box9() {
    if (turn == 0 && xbox9.style.display == 'none' && obox9.style.display == 'none') {
        xbox9.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && xbox9.style.display == 'none' && obox9.style.display == 'none') {
            obox9.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }
    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: blue;">X</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
    if (obox9.style.display == 'block' && obox8.style.display == 'block' && obox7.style.display == 'block' ||
        obox6.style.display == 'block' && obox5.style.display == 'block' && obox4.style.display == 'block' ||
        obox3.style.display == 'block' && obox2.style.display == 'block' && obox1.style.display == 'block' ||
        obox1.style.display == 'block' && obox4.style.display == 'block' && obox7.style.display == 'block' ||
        obox2.style.display == 'block' && obox5.style.display == 'block' && obox8.style.display == 'block' ||
        obox3.style.display == 'block' && obox6.style.display == 'block' && obox9.style.display == 'block' ||
        obox9.style.display == 'block' && obox5.style.display == 'block' && obox1.style.display == 'block' ||
        obox7.style.display == 'block' && obox5.style.display == 'block' && obox3.style.display == 'block') {

        turn = 2;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: green;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }
}


