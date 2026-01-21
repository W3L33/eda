const floatingButton = document.getElementById('floating-button');
const floatingBox = document.getElementById('floating-box');
const closeBox = document.getElementById('close-box');

// Mostrar/ocultar cuadro flotante al hacer clic en el botón
floatingButton.addEventListener('click', () => {
  floatingBox.style.display = floatingBox.style.display === 'flex' ? 'none' : 'flex';
});

// Cerrar cuadro flotante
closeBox.addEventListener('click', () => {
  floatingBox.style.display = 'none';
});
