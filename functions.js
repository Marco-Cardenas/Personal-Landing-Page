document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('form-suscriptor');
  
  formulario.addEventListener('submit', async (event) => {
    console.log('peticion de suscripcion enviada a la bd')
    // Prevenir el envío tradicional del formulario
    event.preventDefault();

    // 1. Recopilar los datos del formulario
    const email = document.getElementById('form-suscriptor-email').value;
    
    // 2. Crear un objeto JavaScript con los datos
    const datosAEnviar = { email: email };

    //Endpoint a donde llegaran los datos
    const URL_ENDPOINT = 'https://backend-lp-liard.vercel.app/api/crear_suscriptor';

    try {
      const respuesta = await fetch(URL_ENDPOINT, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(datosAEnviar) // Convertir el objeto JS a cadena JSON
      });

      if (respuesta.ok) {
        const datosRespuesta = await respuesta.json(); // Leer la respuesta JSON del servidor
        formulario.reset(); // Opcional: limpiar el formulario
      } else {
        // Si hay un error en la respuesta HTTP (ej. 400, 500)
        const errorData = await respuesta.json(); // Intentar leer el mensaje de error del servidor
      }
    } catch (error) {
      console.error('Error en la solicitud Fetch:', error);
    }
  });
});