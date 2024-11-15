// Seleccionar los elementos
let botonPDF = document.getElementById("botonPDF");
let botonWord = document.getElementById("botonWord");
let botonNota = document.getElementById("botonNota");
let botonImagen = document.getElementById("botonImagen");

let popUpArchivos = document.getElementById("subirArchivosDiv");
let popUpNotas = document.getElementById("subirNotasDiv");

let cerrarArchivo = document.getElementById("cerrarArchivo");
let cerrarNota = document.getElementById("cerrarNota");

function abrirPopUp(popUp) {
    popUp.classList.remove("ocultar");
}

function cerrarPopUp(popUp) {
    popUp.classList.add("ocultar");
}

botonPDF.addEventListener("click", () => abrirPopUp(popUpArchivos));
botonWord.addEventListener("click", () => abrirPopUp(popUpArchivos));
botonImagen.addEventListener("click", () => abrirPopUp(popUpArchivos));
botonNota.addEventListener("click", () => abrirPopUp(popUpNotas));

// Eventos para cerrar los pop-ups
cerrarArchivo.addEventListener("click", () => cerrarPopUp(popUpArchivos));
cerrarNota.addEventListener("click", () => cerrarPopUp(popUpNotas));
