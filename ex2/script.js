const input = document.getElementById('campo-bloqueado');

input.addEventListener('keydown', function(event) {
    const tecla = event.key.toLowerCase();

    if (tecla === 'q' || tecla === 'w' || tecla === 'y') {
        event.preventDefault();
    }
});