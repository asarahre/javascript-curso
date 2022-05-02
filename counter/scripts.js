function incrementa() {
    const e = document.getElementById("contador");

    let valor = parseInt(e.innerHTML);

    valor++

    e.innerHTML = valor

    if (valor >= 0) {
        e.classList.remove("negativo")
    }

}
function reseta() {
    const e = document.getElementById("contador");

    let valor = 0

    e.innerHTML = valor

    e.classList.remove("negativo")

}
function descrementa() {
    const e = document.getElementById("contador");

    let valor = parseInt(e.innerHTML);

    valor--

    e.innerHTML = valor

    if (valor < 0) {
        e.classList.add("negativo")
    }
}