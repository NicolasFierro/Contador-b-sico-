// Configuración del Evento
window.addEventListener('keydown', (e) => {
    // Verifica si la tecla presionada es el signo "+"
    if (e.key === "+") {
        incremento();
    } 
    // Verifica si la tecla presionada es el signo "-"
    else if (e.key === "-") {
        decremento();
    }
});

// Inicialización de Variables y Elementos
let contador = 0;
const valor = document.getElementById("valor");

// Función de Incremento
function incremento() {
    // Aumenta la variable 'contador' en 1
    contador += 1;
    // Actualiza el contenido del elemento HTML con el ID "valor" para mostrar el nuevo valor
    valor.innerHTML = contador;
}

// Función de Decremento
function decremento() {
    // Verifica si 'contador' es mayor que 0
    if (contador > 0) {
        // Reduce 'contador' en 1 y actualiza el elemento HTML
        contador -= 1;
        valor.innerHTML = contador;
    } 
    // Si 'contador' es 0, lo mantiene en 0 y actualiza el elemento HTML
    else {
        contador = 0;
        valor.innerHTML = contador;
    }
}

// Función de Reinicio
function resetear() {
    // Restablece 'contador' a 0 y actualiza el elemento HTML
    contador = 0;
    valor.innerHTML = contador;
}
