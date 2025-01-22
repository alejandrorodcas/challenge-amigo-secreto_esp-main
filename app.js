// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista nombres de los amigos 
const amigos = [];

// Aregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar entrada vacía
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista. Por favor, ingresa un nombre distinto.");
        return;
    }

    // Agregar nombre a la lista de amigos
    amigos.push(nombre);

    // Actualizar la lista visible en la página
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    input.value = "";
}

// Actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar contenido previo

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.setAttribute("role", "listitem");
        li.setAttribute("aria-label", `Amigo ${index + 1}: ${amigo}`);
        listaAmigos.appendChild(li);
    });
}

// Realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo para realizar el sorteo.");
        return;
    }

    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</li>`;
}

