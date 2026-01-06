const modalBtns = document.querySelectorAll('.open-modal-btn'); // Selecciona todos los botones
const videoModal = document.getElementById('videoModal');
const closeModal = document.querySelector('.close-btn');
const videoPlayer = document.getElementById('videoPlayer');

// Recorremos cada botón para asignarle el evento
modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 1. Obtenemos la ruta del video desde el atributo data-video del botón presionado
        const videoSrc = btn.getAttribute('data-video');
        
        // 2. Asignamos esa ruta al video dentro del modal
        videoPlayer.src = videoSrc;
        
        // 3. Mostramos el modal y reproducimos
        videoModal.style.display = 'flex';
        videoPlayer.play();
    });
});

// Función para cerrar y limpiar el video
const hideModal = () => {
    videoModal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.src = ""; // Limpiamos el src para que el video deje de cargar
};

closeModal.addEventListener('click', hideModal);

window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        hideModal();
    }
});