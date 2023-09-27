
// EXEMPLO

// function start(){
//     console.log('iniciou')
// }

// function pause(){
//     console.log('Pausou')
// }

// function stop(){
//     console.log('Parar')
// }

var sec = 0; // Inicializa a variável sec (segundos) com o valor 0
var min = 0; // Inicializa a variável min (minutos) com o valor 0
var hr = 0;  // Inicializa a variável hr (horas) com o valor 0
var interval; // Inicializa a variável interval que será usada para armazenar o identificador do intervalo

var isRunning = false; // Inicializa uma variável de estado chamada isRunning como false (indicando que o temporizador não está em execução)

function doisDigitos(digit) { // Define uma função chamada doisDigitos que recebe um argumento digit
    if (digit < 10) { // Verifica se digit é menor que 10
        return ('0' + digit); // Se for menor que 10, retorna digit com um zero à esquerda
    } else {
        return (digit); // Se não for menor que 10, retorna digit sem alterações
    }
}

function start() { // Define a função start
    if (!isRunning) { // Verifica se o temporizador não está em execução (isRunning é false)
        interval = setInterval(watch, 1000); // Inicia um intervalo de 1000 milissegundos (1 segundo) que chama a função watch repetidamente
        isRunning = true; // Define isRunning como true (indicando que o temporizador está em execução)
    }
}

function pause() { // Define a função pause
    clearInterval(interval); // Limpa o intervalo, interrompendo o temporizador
    isRunning = false; // Define isRunning como false (indicando que o temporizador não está em execução)
}

function stop() { // Define a função stop
    clearInterval(interval); // Limpa o intervalo, interrompendo o temporizador
    sec = 0; // Reseta os segundos para 0
    min = 0; // Reseta os minutos para 0
    hr = 0;  // Reseta as horas para 0
    document.getElementById('watch').innerText = '00:00:00'; // Atualiza o elemento HTML com id 'watch' para exibir '00:00'
    isRunning = false; // Define isRunning como false (indicando que o temporizador não está em execução)
}

function watch() { // Define a função watch
    sec++; // Incrementa os segundos
    if (sec == 60) { // Se os segundos atingirem 60
        min++; // Incrementa os minutos
        sec = 0; // Reseta os segundos para 0
    }
    if (min == 60) { // Se os minutos atingirem 60
        hr++; // Incrementa as horas
        min = 0; // Reseta os minutos para 0
    }
    // Atualiza o elemento HTML com id 'watch' com o tempo formatado (horas:minutos:segundos)
    document.getElementById('watch').innerText = doisDigitos(hr) + ':' + doisDigitos(min) + ':' + doisDigitos(sec);
}
