const form = document.getElementById('formularios');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
let mensagem = document.getElementById('mensagem');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (campoB.value > campoA.value ) {
        mensagem.textContent = "Parabéns! Você completou o desafio!";
        mensagem.style.color = "green";
    }
    else {
        mensagem.textContent = "Algo está errado... Veja as instruções novamente!";
        mensagem.style.color = "red";
    }



})
