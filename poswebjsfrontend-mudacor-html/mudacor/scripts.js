function mudacor() {
    const elementes = document.getElementsByClassName("colored-div");
    const div = elementes[0];
    const input = document.getElementsByTagName("input")[0];
    const cor = input.value;
    div.style.backgroundColor = cor;
}

var idInitCres;
var idInitDim;
function initCresc() {
    clearInterval(idInitDim)
    idInitCres = setInterval(cresce, 100);

}

function initDiminui() {
    clearInterval(idInitCres)
    idInitDim = setInterval(diminui, 100);
}

function cresce() {
    console.log("teste")
    const elementes = document.getElementsByClassName("colored-div");
    const div = elementes[0];
    let largura = div.offsetWidth + 10;
    let altura = div.offsetHeight + 10;
    div.style.width = largura + "px";
    div.style.height = altura + "px";

}

function diminui() {
    console.log("teste")
    const elementes = document.getElementsByClassName("colored-div");
    const div = elementes[0];
    let largura = div.offsetWidth - 10;
    let altura = div.offsetHeight - 10;
    div.style.width = largura + "px";
    div.style.height = altura + "px";
}