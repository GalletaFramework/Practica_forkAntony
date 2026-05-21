const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function procesarTicket(e) {
    e.preventDefault();
    
    const nuevoTicket = { id: 1, usuario: "Antony", estado: "Abierto" };
    localStorage.setItem("ticket_reciente", JSON.stringify(nuevoTicket));
});