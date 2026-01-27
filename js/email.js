const btn = document.getElementById('button');
const form = document.getElementById('form');
const mensajeExito = document.getElementById('message-success');

// Asegúrate de que el mensaje esté oculto inicialmente
mensajeExito.style.display = 'none';

form.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';
  btn.disabled = true; // Deshabilitar botón durante envío

  const serviceID = 'default_service';
  const templateID = 'template_pjhn85o';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // Éxito
      btn.value = 'Send Email';
      btn.disabled = false;
      
      // Mostrar mensaje de éxito
      mensajeExito.style.display = 'block';
      mensajeExito.textContent = 'Gracias por tu mensaje. Nos comunicaremos en la brevedad posible.';
      
      // Limpiar formulario
      form.reset();
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        mensajeExito.style.display = 'none';
      }, 3000);
    }, (err) => {
      // Error
      btn.value = 'Send Email';
      btn.disabled = false;
      
      // Mostrar mensaje de error
      mensajeExito.style.display = 'block';
      mensajeExito.textContent = 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.';
      mensajeExito.style.color = '#ff4444'; // Color rojo para error
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        mensajeExito.style.display = 'none';
        mensajeExito.style.color = ''; // Restaurar color por defecto
      }, 5000);
    });
});