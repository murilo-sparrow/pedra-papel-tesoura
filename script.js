var jogador1
var jogador2

function jogada1(escolha) {
    jogador1 = escolha
}

function jogada2(escolha) {
    jogador2 = escolha
}

// AND = &&
// OR  = ||

// ===

//1 = pedra
//2 = papel
//3 = tesoura

function resultado() {
    if (jogador1 === 1 && jogador2 === 2)
        alert('player 2 venceu.')
    else if (jogador1 === 1 && jogador2 === 3)
        alert('player 1 venceu.')
    else if (jogador1 === 2 && jogador2 === 3)
        alert('player 2 venceu.')
    else if (jogador1 === 2 && jogador2 === 1)
        alert('player 1 venceu.')
    else if (jogador1 === 3 && jogador2 === 1)
        alert('player 2 venceu.')
    else if (jogador1 === 3 && jogador2 === 2)
        alert('player 1 venceu.')
    else
        alert('Empate.')
}