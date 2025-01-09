const bNavEsquerda = document.getElementById("bNavEsquerda");
const bNavDireita = document.getElementById("bNavDireita");
const galeriaImagens = document.getElementById("galeriaImagens");
const larguraImg = document.querySelector("img").offsetWidth;
const larguraImgRem = larguraImg / 16;
let indiceImg = 0;
let moverImg = 0;

bNavEsquerda.addEventListener("click", () => {
  if (indiceImg > 0) {
    --indiceImg;
  }
  moverImg = indiceImg * larguraImgRem;
  galeriaImagens.style.transform = `translateX(-${moverImg}rem)`;
});

bNavDireita.addEventListener("click", () => {
  if (indiceImg < 3) {
    ++indiceImg;
  }
  moverImg = indiceImg * larguraImgRem;
  galeriaImagens.style.transform = `translateX(${moverImg}rem)`;
});

console.log(moverImg);
