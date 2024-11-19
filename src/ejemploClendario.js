const diaEjemplo = document.getElementById('diaEjemplo');
const popup = document.createElement('div');


popup.id = 'popup';
popup.innerHTML = `
    <span class="botonCerrar">&times;</span>
    <h3 class="tituloEventoCal" >Terminar TP Final</h3>
     <strong>Evento:</strong> ToDo<br>
    <strong>Materia:</strong> Programación<br>
    <strong>Fecha:</strong> 15-11-2024<br>
    <strong>Hora:</strong> 08:00<br> 
`;


document.body.appendChild(popup);


diaEjemplo.addEventListener('click', () => {
    popup.style.display = 'block';
});


popup.querySelector('.botonCerrar').addEventListener('click', () => {
    popup.style.display = 'none';
});

