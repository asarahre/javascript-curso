function toggle() {
    const img = document.getElementById("myImage")
    const btn = document.getElementById("btn")

    if (img.src.endsWith("desligado.gif")) {
        img.src = "ligado.gif";
        btn.innerHTML = "Desligar";
    } else {
        img.src = "desligado.gif";
        btn.innerHTML = "Ligar";
    }

}