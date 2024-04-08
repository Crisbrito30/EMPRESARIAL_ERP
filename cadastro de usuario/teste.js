function gerarNumerosMegaSena() {
    var numerosMegaSena = [];

    while (numerosMegaSena.length < 6) {
        var numeroAleatorio = Math.floor(Math.random() * 60) + 1; // Números de 1 a 60

        if (numerosMegaSena.indexOf(numeroAleatorio) === -1) {
            numerosMegaSena.push(numeroAleatorio);
        }
    }

    return numerosMegaSena;
}

// Exemplo de uso
var numerosSorteados = gerarNumerosMegaSena();
console.log("Números da Mega Sena: " + numerosSorteados.join(", "));
