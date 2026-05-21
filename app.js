const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function procesarTicket(e) {
    e.preventDefault();
    
<<<<<<< HEAD
    const nuevoTicket = { id: 1, usuario: "Antony", estado: "Abierto" };
    localStorage.setItem("ticket_reciente", JSON.stringify(nuevoTicket));
=======
    const tabla = document.getElementById("cuerpo-tabla");
    tabla.innerHTML += <tr><td>1</td><td>Luis</td><td>Abierto</td></tr>;
>>>>>>> upstream/main
});