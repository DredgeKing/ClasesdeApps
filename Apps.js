//Botòn copia textos
document.addEventListener('DOMContentLoaded', function() {
    var copyButtons = document.querySelectorAll('.copyButton');
    copyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var boxContent = this.parentElement.querySelector('.box').innerText;
            copyToClipboard(boxContent);
            mostrarAlerta(this);
        });
    });

    function copyToClipboard(text) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});
//Alert con mensajito de copiar texto
function mostrarAlerta(boton) {
    var alerta = document.createElement("div");
    alerta.className = "alert";
    alerta.textContent = "Copiado :)";
    
    // Calcular la posición del botón
    var botonRect = boton.getBoundingClientRect();
    var left = botonRect.left + (botonRect.width / 2) - (alerta.offsetWidth / 2);
    var top = botonRect.top - alerta.offsetHeight - 50; // 20px más arriba del botón
    
    // Establecer la posición del alerta
    alerta.style.left = left + "px";
    alerta.style.top = top + "px";
    
    document.body.appendChild(alerta);
    
    setTimeout(function() {
        document.body.removeChild(alerta);
    }, 490); // 1000 ms es el tiempo de espera antes de ocultar la alerta
}
//funciones de mierda, bueno basicamente es así,
//la palabra "function" espacio "nombre de la funcion"(id)
//y copiar el nombre del id al costado de la funcion
//funcion(id)
//funcion(id)
//funcion(id)
//funcion(id)//funcion(id)
//funcion(id)//funcion(id)
//funcion(id) hasta el cansancio la ptm!!!
function abrirDescripcion(id) {
    // Mostrar el contenedor del mensaje
    document.getElementById(id).style.display = "block";
}
function cerrarDescripcion(id) {
    // Ocultar el contenedor del mensaje
    document.getElementById(id).style.display = "none";
}