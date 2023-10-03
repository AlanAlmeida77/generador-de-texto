function generarTexto() {
    const palabrasFuturo = obtenerPalabras("palabraFuturo");
    const palabrasOpuestoFuturo = obtenerPalabras("palabraOpuestoFuturo");
    const palabrasEmpiezanConFu = obtenerPalabras("palabraEmpiezanConFu");
    const palabrasTerminanConRo = obtenerPalabras("palabraTerminanConRo");

    if (
        palabrasFuturo.length !== 5 ||
        palabrasOpuestoFuturo.length !== 5 ||
        palabrasEmpiezanConFu.length !== 5 ||
        palabrasTerminanConRo.length !== 5
    ) {
        alert("Por favor, ingresa exactamente 5 palabras en cada categoría.");
        return;
    }

    const textoGenerado = generarTextoCoherente(
        palabrasFuturo,
        palabrasOpuestoFuturo,
        palabrasEmpiezanConFu,
        palabrasTerminanConRo
    );

    document.getElementById("textoGenerado").textContent = textoGenerado;
}

function obtenerPalabras(idPrefix) {
    const palabrasInput = document.getElementById(idPrefix).value.trim().split(/\s*,\s*/);
    return palabrasInput.length === 5 ? palabrasInput : [];
}

function generarTextoCoherente(palabrasFuturo, palabrasOpuestoFuturo, palabrasEmpiezanConFu, palabrasTerminanConRo) {
    const conectores = [
        "En un futuro,",
        "Por otro lado,",
        "Mientras tanto,",
        "Con el tiempo,",
        "De repente,",
        "Bajo el cielo estrellado,",
        "En la era venidera,",
        "Antes de que todo cambie,",
        "En un mundo próximo,",
        "En medio de la tormenta,",
    ];

    const oracionFuturo = generarOracion(palabrasFuturo, conectores);
    const oracionOpuestoFuturo = generarOracion(palabrasOpuestoFuturo, conectores);
    const oracionEmpiezanConFu = generarOracion(palabrasEmpiezanConFu, conectores);
    const oracionTerminanConRo = generarOracion(palabrasTerminanConRo, conectores);

    const textoGenerado = `${oracionFuturo} ${oracionEmpiezanConFu} ${oracionOpuestoFuturo} ${oracionTerminanConRo}`;

    return textoGenerado;
}

function generarOracion(palabras, conectores) {
    const palabrasAleatorias = shuffleArray(palabras); // Mezcla las palabras para dar variedad
    let oracion = "";
    for (let i = 0; i < palabrasAleatorias.length; i++) {
        // Elegir un conector aleatorio
        const conector = obtenerConectorAleatorio(conectores);
        oracion += `${conector} ${palabrasAleatorias[i]}${i < palabrasAleatorias.length - 1 ? "," : "."} `;
    }
    return oracion.trim();
}

function obtenerConectorAleatorio(conectores) {
    return conectores[Math.floor(Math.random() * conectores.length)];
}

// Función para mezclar un array de palabras
function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
