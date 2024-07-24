const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookieButton = document.querySelector("#cookieButton")
const resetButton = document.querySelector("#resetButton")

document.addEventListener('DOMContentLoaded', function() {
  cookieButton = document.querySelector('.cookieButton');

  cookieButton.addEventListener('click', function() {
    // Redireciona para a tela 2
    toggleScreen()
  });
});

document.addEventListener('DOMContentLoaded', function() {
  cookieButton = document.querySelector('.cookieButton');

  cookieButton.addEventListener('click', function() {
    // Adiciona a classe para iniciar a animação
    this.classList.add('tremendo');

    // Remove a classe após a animação terminar
    setTimeout(() => {
      cookieButton.classList.remove('tremendo');
    }, 500)
  })})

  function toggleScreen() {
      screen1.classList.toggle('hide');
      screen2.classList.toggle('hide');
      
  }