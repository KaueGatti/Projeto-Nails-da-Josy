/* Adiciona a função de abrir e fechar o menu lateral ao botão "Menu" */

const botaoMenu = document.getElementById("botaoMenu");
const navMenuLateral = document.getElementById("navMenuLateral");
const botaoFecharMenuLateral = document.getElementById(
  "botaoFecharMenuLateral"
);

botaoMenu.addEventListener("click", () => {
  if (
    navMenuLateral.style.display === "none" ||
    navMenuLateral.style.display === ""
  ) {
    navMenuLateral.style.display = "flex";
  } else {
    navMenuLateral.style.display = "none";
  }
});

botaoFecharMenuLateral.addEventListener("click", () => {
  if (navMenuLateral.style.display === "flex") {
    navMenuLateral.style.display = "none";
  } else {
    navMenuLateral.style.display = "flex";
  }
});
