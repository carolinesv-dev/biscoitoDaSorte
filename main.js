const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const cookieFortune = document.querySelector("#cookieFortune");
const resetButton = document.querySelector("#resetButton");

const fortune = [
  'A vida trará grandes surpresas para você.',
  'Um novo amor está chegando.',
  'Boas notícias virão em breve.',
  'Seja paciente. Há grandes conquistas no seu caminho.',
  'A sorte está do seu lado hoje.',
  'Sua criatividade trará sucesso em breve.',
  'Um sorriso sincero abrirá muitas portas.',
  'Aproveite cada momento. Eles não voltam mais.',
  'Confie na sua intuição. Ela nunca falha.',
  'Um pequeno gesto de gentileza pode gerar um grande impacto.',
  'O sucesso está na sua perseverança.',
  'Grandes realizações exigem grandes esforços.',
  'Acredite nos seus sonhos; eles estão mais próximos do que você imagina.',
  'A felicidade está nas pequenas coisas da vida.',
  'A sorte favorece os corajosos.',
]

// Eventos
cookieFortune.addEventListener('click', handleClickCookie);
resetButton.addEventListener('click', handleClickReset);
document.addEventListener('keydown', eEnter);

// Funções
function eEnter(e) {
  if (e.key == 'Enter' && screen2.classList.contains('hide')) {
    handleClickCookie();
  } else if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleClickReset();
  }
}

function handleClickCookie() {
  toggleScreen();
  pickFortune();
}

function handleClickReset() {
  toggleScreen();
}

function pickFortune() {
  let fortunes = fortune.length;
  let randomNumber = Math.floor(Math.random() * fortunes);
  screen2.querySelector("#fortune").innerText = fortune[randomNumber];
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}