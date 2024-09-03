// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 

function identifyLamps() {
    // Estados iniciais
    let lamps = {
        lamp1: { on: false, hot: false }, // Conectada ao Interruptor 1
        lamp2: { on: false, hot: false }, // Conectada ao Interruptor 2
        lamp3: { on: false, hot: false }  // Conectada ao Interruptor 3
    };

    // Ligue o Interruptor 1 
    lamps.lamp1.on = true;
    lamps.lamp1.hot = true; // Lâmpada aqueceu

    // Desligue o Interruptor 1 e ligue o Interruptor 2
    lamps.lamp1.on = false;
    lamps.lamp2.on = true;

    // Agora vá para a sala das lâmpadas (simulação)
    if (lamps.lamp2.on) {
        console.log("A lâmpada 2 está ligada, logo o Interruptor 2 controla a lâmpada 2.");
    }

    if (!lamps.lamp1.on && lamps.lamp1.hot) {
        console.log("A lâmpada 1 está desligada, mas quente. Logo, o Interruptor 1 controla a lâmpada 1.");
    }

    if (!lamps.lamp3.on && !lamps.lamp3.hot) {
        console.log("A lâmpada 3 está desligada e fria. Logo, o Interruptor 3 controla a lâmpada 3.");
    }
}

// Chamar a função para simular a identificação
identifyLamps();
