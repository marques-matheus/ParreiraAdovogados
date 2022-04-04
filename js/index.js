const $img = document.querySelector(".logo");
const $nav = document.querySelector(".nav__conteudo");
const $link = document.querySelectorAll(".nav__link");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    $nav.style =
      "background-color: white; opacity: 0.9; position: fixed; top: 0;";
    $img.src = "../img/LOGOPreto.png";
    $link.forEach((elemento) => {
      elemento.classList.add("nav__link--preto");
    });
  } else if (
    document.body.scrollTop < 60 ||
    document.documentElement.scrollTop < 60
  ) {
    $nav.style = "background-color: #3f3f3f; position: fixed; top: 0;";
    $img.src = "../img/LOGOColorida.png";
    $link.forEach((elemento) => {
      elemento.classList.remove("nav__link--preto");
      elemento.classList.add("nav__link--branco");
    });
    
  }
});

const $botao = document.querySelector(".btn__menu");
const $lista = document.querySelector(".nav__lista--mobile");

let clicado = false;

$botao.addEventListener("click", () => {
  if (clicado === false) {
    clicado = true;
    $lista.style =
      "visibility: visible; opacity:1; transition: opacity 300ms ease-in;top:84px;";
  } else if (clicado === true) {
    clicado = false;
    $lista.style = "transition: opacity 300ms ease-out; margin-top: -100%;";
  }
});
