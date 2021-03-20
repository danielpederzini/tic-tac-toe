// Definindo uma variável global "turn": valor 0 significa vez do X, e o valor 1 significa vez do O
var turn = 0;

/* Definindo uma variável global para cada caixa (div): valor 0 significa que não houve uma jogada na caixa,
e o valor 1 significa que já houve uma jogada na caixa*/
var box1 = 0;
var box2 = 0;
var box3 = 0;
var box4 = 0;
var box5 = 0;
var box6 = 0;
var box7 = 0;
var box8 = 0;
var box9 = 0;

/* Definindo uma variável global "win": valor 0 significa que nenhum jogador venceu,
valor 1 significa que algum jogador venceu*/
var win = 0;

// Ao clicar na caixa (div) 1, se o turno for de X e se a caixa estiver vazia, faz uma jogada de X
function play_box1() {
    if (turn == 0 && box1 == 0) {
        xbox1.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
 // Caso contrário, se o turno for de O e se a caixa estiver vazia, faz uma jogada de O
    else {
        if (turn == 1 && box1 == 0) {
            obox1.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }

 // Define a variável da caixa como 1, indicando que já houve uma jogada
    box1 = 1;

    // Verifica se a jogada vence o jogo para o jogador 1 (X), se sim, exibe uma mensagem de vitória e para o jogo
    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        // Define a variável "turn" como 2, assim, nenhuma jogada pode ser feita, parando o jogo
        turn = 2;
        
        // Define a variável "win" como 1, indicando que o jogo foi vencido
        win = 1;

        // Exibe uma mensagem de vitória para o jogador 1
        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: #0038A8;">X</span>) wins! <br>
           Refresh the page to play again...</b>`
    }

    // Verifica se a jogada vence o jogo para o jogador 2 (O), se sim, exibe uma mensagem de vitória e para o jogo
    if (obox9.style.display == 'block' && obox8.style.display == 'block' && obox7.style.display == 'block' ||
        obox6.style.display == 'block' && obox5.style.display == 'block' && obox4.style.display == 'block' ||
        obox3.style.display == 'block' && obox2.style.display == 'block' && obox1.style.display == 'block' ||
        obox1.style.display == 'block' && obox4.style.display == 'block' && obox7.style.display == 'block' ||
        obox2.style.display == 'block' && obox5.style.display == 'block' && obox8.style.display == 'block' ||
        obox3.style.display == 'block' && obox6.style.display == 'block' && obox9.style.display == 'block' ||
        obox9.style.display == 'block' && obox5.style.display == 'block' && obox1.style.display == 'block' ||
        obox7.style.display == 'block' && obox5.style.display == 'block' && obox3.style.display == 'block') {

        // Define a variável "turn" como 2, assim, nenhuma jogada pode ser feita, parando o jogo
        turn = 2;
        
        // Define a variável "win" como 1, indicando que o jogo foi vencido
        win = 1;

        // Exibe uma mensagem de vitória para o jogador 2
        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: #009900;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }

     // Se todas as caixas (divs) tiverem sido preenchidas, e ninguém venceu o jogo, exibe uma mensagem de empate
    if (box1 == 1 && box2 == 1 && box3 == 1 && box4 == 1 && box5 == 1 && box6 == 1 && box7 == 1 && box8 == 1 && box9 == 1 && win == 0) {
       
        turns.innerHTML = `<b class="turnX">It's a draw! <br>
               Refresh the page to play again...</b>`
    }
}

function play_box2() {
    if (turn == 0 && box2 == 0) {
        xbox2.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && box2 == 0) {
            obox2.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }

    box2 = 1;

    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: #0038A8;">X</span>) wins! <br>
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
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: #009900;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }

    if (box1 == 1 && box2 == 1 && box3 == 1 && box4 == 1 && box5 == 1 && box6 == 1 && box7 == 1 && box8 == 1 && box9 == 1 && win == 0) {

        turns.innerHTML = `<b class="turnX">It's a draw! <br>
               Refresh the page to play again...</b>`
    }
}

function play_box3() {
    if (turn == 0 && box3 == 0) {
        xbox3.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && box3 == 0) {
            obox3.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }

    box3 = 1;

    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: #0038A8;">X</span>) wins! <br>
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
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: #009900;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }

    if (box1 == 1 && box2 == 1 && box3 == 1 && box4 == 1 && box5 == 1 && box6 == 1 && box7 == 1 && box8 == 1 && box9 == 1 && win == 0) {

        turns.innerHTML = `<b class="turnX">It's a draw! <br>
               Refresh the page to play again...</b>`
    }
}

function play_box4() {
    if (turn == 0 && box4 == 0) {
        xbox4.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && box4 == 0) {
            obox4.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }

    box4 = 1;

    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: #0038A8;">X</span>) wins! <br>
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
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: #009900;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }

    if (box1 == 1 && box2 == 1 && box3 == 1 && box4 == 1 && box5 == 1 && box6 == 1 && box7 == 1 && box8 == 1 && box9 == 1 && win == 0) {

        turns.innerHTML = `<b class="turnX">It's a draw! <br>
               Refresh the page to play again...</b>`
    }
}

function play_box5() {
    if (turn == 0 && box5 == 0) {
        xbox5.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && box5 == 0) {
            obox5.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }

    box5 = 1;

    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: #0038A8;">X</span>) wins! <br>
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
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: #009900;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }

    if (box1 == 1 && box2 == 1 && box3 == 1 && box4 == 1 && box5 == 1 && box6 == 1 && box7 == 1 && box8 == 1 && box9 == 1 && win == 0) {

        turns.innerHTML = `<b class="turnX">It's a draw! <br>
               Refresh the page to play again...</b>`
    }
}

function play_box6() {
    if (turn == 0 && box6 == 0) {
        xbox6.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && box6 == 0) {
            obox6.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }

    box6 = 1;

    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: #0038A8;">X</span>) wins! <br>
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
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: #009900;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }

    if (box1 == 1 && box2 == 1 && box3 == 1 && box4 == 1 && box5 == 1 && box6 == 1 && box7 == 1 && box8 == 1 && box9 == 1 && win == 0) {

        turns.innerHTML = `<b class="turnX">It's a draw! <br>
               Refresh the page to play again...</b>`
    }
}

function play_box7() {
    if (turn == 0 && box7 == 0) {
        xbox7.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && box7 == 0) {
            obox7.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }

    box7 = 1;

    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: #0038A8;">X</span>) wins! <br>
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
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: #009900;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }

    if (box1 == 1 && box2 == 1 && box3 == 1 && box4 == 1 && box5 == 1 && box6 == 1 && box7 == 1 && box8 == 1 && box9 == 1 && win == 0) {

        turns.innerHTML = `<b class="turnX">It's a draw! <br>
               Refresh the page to play again...</b>`
    }
}

function play_box8() {
    if (turn == 0 && box8 == 0) {
        xbox8.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && box8 == 0) {
            obox8.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }

    box8 = 1;

    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: #0038A8;">X</span>) wins! <br>
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
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: #009900;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }

    if (box1 == 1 && box2 == 1 && box3 == 1 && box4 == 1 && box5 == 1 && box6 == 1 && box7 == 1 && box8 == 1 && box9 == 1 && win == 0) {

        turns.innerHTML = `<b class="turnX">It's a draw! <br>
               Refresh the page to play again...</b>`
    }
}

function play_box9() {
    if (turn == 0 && box9 == 0) {
        xbox9.style.display = 'block';
        turn = 1;
        turnX.style.display = 'none';
        turnO.style.display = 'block';
    }
    else {
        if (turn == 1 && box9 == 0) {
            obox9.style.display = 'block';
            turn = 0;
            turnX.style.display = 'block';
            turnO.style.display = 'none';
        }
    }

    box9 = 1;

    if (xbox9.style.display == 'block' && xbox8.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox6.style.display == 'block' && xbox5.style.display == 'block' && xbox4.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox2.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox1.style.display == 'block' && xbox4.style.display == 'block' && xbox7.style.display == 'block' ||
        xbox2.style.display == 'block' && xbox5.style.display == 'block' && xbox8.style.display == 'block' ||
        xbox3.style.display == 'block' && xbox6.style.display == 'block' && xbox9.style.display == 'block' ||
        xbox9.style.display == 'block' && xbox5.style.display == 'block' && xbox1.style.display == 'block' ||
        xbox7.style.display == 'block' && xbox5.style.display == 'block' && xbox3.style.display == 'block') {

        turn = 2;
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 1 (<span style="color: #0038A8;">X</span>) wins! <br>
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
        win = 1;

        turns.innerHTML = `<b class="turnX"> Player 2 (<span style="color: #009900;">O</span>) wins! <br>
           Refresh the page to play again...</b>`
    }

    if (box1 == 1 && box2 == 1 && box3 == 1 && box4 == 1 && box5 == 1 && box6 == 1 && box7 == 1 && box8 == 1 && box9 == 1 && win == 0) {

        turns.innerHTML = `<b class="turnX">It's a draw! <br>
               Refresh the page to play again...</b>`
    }
}


