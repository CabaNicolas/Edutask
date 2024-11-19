const showPopupButton = document.getElementById('showPopup');
const popup = document.getElementById('eventoPopup');
const closePopupButton = document.getElementById('closePopup');

showPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});
