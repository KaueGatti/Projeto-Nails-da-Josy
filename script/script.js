const larguraImg = document.getElementsByTagName("img")[0].offsetWidth;
const larguraImgRem = larguraImg / 16;
const indiceImgs = {
    "indice_galeriaImagensServico1": 0,
    "indice_galeriaImagensServico2": 0,
    "indice_galeriaImagensServico3": 0,
    "indice_galeriaImagensServico4": 0,
}

function moverEsquerda(id) {
    const botaoSelecionado = id;
    const galeriaImagens = document.getElementById(`${botaoSelecionado}`).nextElementSibling;
    let idGaleria = galeriaImagens.id;
    let indice = parseInt(indiceImgs[`indice_${idGaleria}`]);
    indice = Math.max(0, Math.min(galeriaImagens.children.length - 1, indice));
    if (indice <= 0) {
        console.log("Primeira Imagem");
    } else {
        indice-= 1;
        indiceImgs[`indice_${idGaleria}`] -= 1;
        galeriaImagens.style.transform = `translateX(-${indice * larguraImgRem}rem)`;
    }
}

function moverDireita(id) {
    const botaoSelecionado = id;
    const galeriaImagens = document.getElementById(`${botaoSelecionado}`).previousElementSibling;
    let idGaleria = galeriaImagens.id;
    let indice = parseInt(indiceImgs[`indice_${idGaleria}`]);
    indice = Math.max(0, Math.min(galeriaImagens.children.length - 1, indice));
    if (indice >= galeriaImagens.children.length - 1) {
        console.log("Última Imagem");
    } else {
        indice+= 1;
        indiceImgs[`indice_${idGaleria}`] += 1;
        galeriaImagens.style.transform = `translateX(-${indice * larguraImgRem}rem)`;
    }
}

