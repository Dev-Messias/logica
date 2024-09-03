// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

function verificaLetraA(str) {
    let count = 0;

    // Itera sobre cada caractere da string
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }

    // Verifica se a letra 'a' foi encontrada
    if (count > 0) {
        console.log(`A letra "a" foi encontrada ${count} vez(es) na string.`);
    } else {
        console.log('A letra "a" não foi encontrada na string.');
    }
}

// Exemplo de uso:
verificaLetraA("Barbalha"); 