//Elementos dinâmicos
const html = document.querySelector('html');
const displayTempo = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3')
musica.loop = true;
const audioPlay = new Audio('/sons/play.wav')
const audioPause = new Audio('/sons/pause.mp3')
const audioFimDaContagem = new Audio('/sons/beep.mp3')

//Botões
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const inicioBt = document.querySelector('.app__card-primary-button');
const startPauseBt = document.querySelector('#start-pause');
const botoes = document.querySelectorAll('.app__card-button');


//Tempo dos temporizadores
let intervaloId = null

let duracaoFoco = 1500;
let duracaoDescansoCurto = 300;
let duracaoDescansoLongo = 900;

focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

function alterarContexto(contexto) {
    botoes.forEach((contexto) => {
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (duracaoFoco <=0) {
        audioFimDaContagem.play()
        zerar()
        alert('Tempo finalizado!')
        return
    }
    duracaoFoco -= 1;
    console.log('Temporizador: ' + duracaoFoco)
}

startPauseBt.addEventListener('click', iniciar)

function iniciar() {
    audioPlay.play()
    if (intervaloId) {
        audioPause.play()
        zerar()
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}