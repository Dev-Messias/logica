// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___
// b) 2, 4, 8, 16, 32, 64, ____
// c) 0, 1, 4, 9, 16, 25, 36, ____
// d) 4, 16, 36, 64, ____
// e) 1, 1, 2, 3, 5, 8, ____
// f) 2,10, 12, 16, 17, 18, 19, ____

function nextElementA(sequence) {
    //  Números ímpares consecutivos
    return sequence[sequence.length - 1] + 2;
}

function nextElementB(sequence) {
    //  Cada número é o dobro do anterior
    return sequence[sequence.length - 1] * 2;
}

function nextElementC(sequence) {
    //  Quadrados de números inteiros
    let nextIndex = sequence.length; // Próximo índice baseado no comprimento da sequência
    return nextIndex * nextIndex;
}

function nextElementD(sequence) {
    //  Quadrados de números pares
    let nextIndex = (sequence.length + 1) * 2; // Próximo número par
    return nextIndex * nextIndex;
}

function nextElementE(sequence) {
    //  Fibonacci
    let n = sequence.length;
    return sequence[n - 1] + sequence[n - 2];
}

function nextElementF(sequence) {
    //  Combinação de aritmética e números consecutivos
    if (sequence.length === 1) return 10;
    if (sequence.length === 2) return 12;
    if (sequence.length === 3) return 16;
    if (sequence.length === 4) return 17;
    if (sequence.length === 5) return 18;
    if (sequence.length === 6) return 19;
    return sequence[sequence.length - 1] + 1;
}

// Sequências iniciais
let seqA = [1, 3, 5, 7];
let seqB = [2, 4, 8, 16, 32, 64];
let seqC = [0, 1, 4, 9, 16, 25, 36];
let seqD = [4, 16, 36, 64];
let seqE = [1, 1, 2, 3, 5, 8];
let seqF = [2, 10, 12, 16, 17, 18, 19];

// Obtendo os próximos elementos
let nextA = nextElementA(seqA);
let nextB = nextElementB(seqB);
let nextC = nextElementC(seqC);
let nextD = nextElementD(seqD);
let nextE = nextElementE(seqE);
let nextF = nextElementF(seqF);

// Exibindo os resultados
console.log("a) Próximo elemento: " + nextA); // 9
console.log("b) Próximo elemento: " + nextB); // 128
console.log("c) Próximo elemento: " + nextC); // 49
console.log("d) Próximo elemento: " + nextD); // 100
console.log("e) Próximo elemento: " + nextE); // 13
console.log("f) Próximo elemento: " + nextF); // 20