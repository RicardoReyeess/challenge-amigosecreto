let amigos = []; // Array para almacenar los nombres

// Capturar el valor del campo de entrada
function obtenerNombre() {
    return document.getElementById("amigo").value.trim();
}

// Validar la entrada
function validarNombre(nombre) {
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return false;
    }
    return true;
}

// Actualizar el array de amigos
function actualizarArray(nombre) {
    amigos.push(nombre);
}

// Limpiar el campo de entrada
function limpiarInput() {
    document.getElementById("amigo").value = "";
}

// Obtener el elemento de la lista
function obtenerLista() {
    return document.getElementById("listaAmigos");
}

// Limpiar la lista existente
function limpiarLista() {
    let lista = obtenerLista();
    lista.innerHTML = ""; // Borra el contenido actual
}

// Iterar sobre el arreglo de amigos y agregarlos a la lista
function iterarArreglo() {
    let lista = obtenerLista();
    for (let i = 0; i < amigos.length; i++) {
        agregarElementoLista(amigos[i], lista);
    }
}

// Agregar elementos a la lista
function agregarElementoLista(nombre, lista) {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);
}

// Función principal para agregar un amigo
function agregarAmigo() {
    let nombre = obtenerNombre();
    if (!validarNombre(nombre)) return;

    actualizarArray(nombre);
    limpiarInput();

    limpiarLista();  // Asegura que la lista no tenga duplicados
    iterarArreglo(); // Muestra la lista actualizada
}

// Obtener el elemento donde se mostrará el resultado
function obtenerElementoResultado() {
    return document.getElementById("resultado");
}

// Validar que haya amigos antes de sortear
function validarSorteo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return false;
    }
    return true;
}

// Generar un índice aleatorio
function generarIndiceAleatorio() {
    return Math.floor(Math.random() * amigos.length);
}

// Obtener el nombre sorteado
function obtenerNombreSorteado() {
    let indice = generarIndiceAleatorio();
    return amigos[indice];
}

// Mostrar el resultado en la lista de sorteos
function mostrarResultado(nombreSorteado) {
    let resultadoElemento = obtenerElementoResultado();
    resultadoElemento.innerHTML = `<li>🎉 Amigo secreto: <strong>${nombreSorteado}</strong></li>`;
}

// Función principal para sortear un amigo
function sortearAmigo() {
    if (!validarSorteo()) return;

    let nombreSorteado = obtenerNombreSorteado();
    mostrarResultado(nombreSorteado);
}