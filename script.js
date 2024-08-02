//Elementos dinâmicos
const html = document.querySelector('html');
const displayTempo = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title')

//Botões
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const inicioBt = document.querySelector('.app__card-primary-button')

//Tempo dos temporizadores
const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLongo = 900;

focoBt.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'foco');
    // banner.setAttribute('src', '/imagens/foco.png')
    alterarContexto('foco', 'foco')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
}