const submenus = document.querySelectorAll('.submenu');

submenus.forEach(submenu => {
  submenu.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

const contactForm = document.getElementById('contact-form');

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Aquí puedes agregar tu lógica de validación y envío del formulario
    // Por ejemplo, puedes utilizar JavaScript para validar los campos antes de enviarlos
  
    // Luego, puedes enviar el formulario utilizando AJAX o realizar cualquier otra acción necesaria
    // Puedes agregar tu código aquí para procesar el envío del formulario
  });
  