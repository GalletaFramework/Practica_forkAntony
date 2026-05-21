const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function procesarTicket(e) {
    e.preventDefault();
    
    const tabla = document.getElementById("cuerpo-tabla");
    tabla.innerHTML += <tr><td>1</td><td>Luis</td><td>Abierto</td></tr>;
});