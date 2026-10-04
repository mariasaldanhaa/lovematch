function calcularValor(nome) {
    let valor = 0;
    nome = nome.toUpperCase().replaceAll(" ", ""); 
    // so pra nao ter resultados diferentes com o mesmo nome e ignorar espacos

    // o vetor nome[i] pega uma letra por vez e transforma em numero
    // com o charCode (fiz só pra não ter que ficar indo na mão atribuindo pra cada letra).
    // A regra é o seguinte: pega o valor da letra e multiplica pela posicao dela
    for (let i = 0; i < nome.length; i++) {
        let valorLetra = nome[i].charCodeAt(0) - 64;
        valor += valorLetra * (i + 1);
    }

    return valor;
}

document.getElementById('btnCalcular').addEventListener("click", () => {
    let nome1 = document.getElementById("nome1").value;
    let nome2 = document.getElementById("nome2").value;

    if (nome1.trim() !== "" && nome2.trim() !== "") {
        let valorNome1 = calcularValor(nome1);
        let valorNome2 = calcularValor(nome2);
        let valorTotal = (valorNome1 + valorNome2) % 101;
        document.getElementById("resultado").textContent = valorTotal + "%";
        // o %101 garante que o resultado sempre fique de 0 a 100
        // ex.: soma = 82, 82 % 101 = 82%

        if (valorTotal <= 20) {
            document.getElementById("mensagem").textContent = "Hmm... Talvez seja melhor manter a amizade.";
        } else if (valorTotal <= 40) {
            document.getElementById("mensagem").textContent = "Tem uma faísca aí... mas ainda falta alguma coisa.";
        }  else if (valorTotal <= 60) {
            document.getElementById("mensagem").textContent = "Pode dar certo! Que tal dar uma chance?";
        }  else if (valorTotal <= 80) {
            document.getElementById("mensagem").textContent = "Olha só... esse match está ficando interessante!";
        }  else {
            document.getElementById("mensagem").textContent = "MATCH! Vocês têm muita química!";
        }
    } else {
        alert("Preencha os dois campos para calcular a compatibilidade!");
    }
})