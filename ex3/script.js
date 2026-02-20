let estaClicando = false;

function criarPonto(x, y, permanente = false) {
    const ponto = document.createElement("div");
    ponto.className = "rastro";

    ponto.style.left = (x - 3) + "px";
    ponto.style.top = (y - 3) + "px";

    document.body.appendChild(ponto);

    if (!permanente) {
        setTimeout(() => {
            ponto.remove();
        }, 1000);
    }
}

// Detecta quando o botão do mouse é pressionado
window.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
        estaClicando = true;
    }
});

// Detecta quando o botão do mouse é solto
window.addEventListener("mouseup", () => {
    estaClicando = false;
});

// O rastro temporário só aparece se o mouse estiver se movendo E clicado
window.addEventListener("mousemove", (event) => {
    if (estaClicando) {
        criarPonto(event.pageX, event.pageY, false);
    }
});