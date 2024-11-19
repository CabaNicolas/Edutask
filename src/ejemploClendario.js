const diaEjemplo = document.getElementById('diaEjemplo');
const popup = document.createElement('div');

// Crear el contenido del popup
popup.id = 'popup';
popup.innerHTML = `
    <span class="botonCerrar">&times;</span>
    <h3 class="tituloEventoCal" >Terminar TP Final</h3>
     <strong>Evento:</strong> ToDo<br>
    <strong>Materia:</strong> Programación<br>
    <strong>Fecha:</strong> 15-11-2024<br>
    <strong>Hora:</strong> 08:00<br> 
`;

// Agregar el popup al body (oculto inicialmente)
document.body.appendChild(popup);

// Mostrar el popup al hacer clic en el día
diaEjemplo.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Ocultar el popup al hacer clic en la "X"
popup.querySelector('.botonCerrar').addEventListener('click', () => {
    popup.style.display = 'none';
});

// Opcional: Cerrar el popup al hacer clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});