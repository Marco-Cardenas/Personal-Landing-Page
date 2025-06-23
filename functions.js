document.addEventListener('DOMContentLoaded', async () => {
  const formulario = document.getElementById('form-suscriptor');
  
  formulario.addEventListener('submit', async (event) => {
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
        formulario.reset(); // Limpiar el formulario
      } else {
        const errorData = await respuesta.json(); // Intentar leer el mensaje de error del servidor
        formulario.reset(); // Limpiar el formulario
      }
    } catch (error) {
      console.error('Error en la solicitud Fetch:', error);
    }
  });


  const formulario2 = document.getElementById('form-contacto');
  
  formulario2.addEventListener('submit', async (event) => {
    
    // Prevenir el envío tradicional del formulario
    event.preventDefault();

    // 1. Recopilar los datos del formulario
    const name = document.getElementById('form-contacto-name').value;
    const email = document.getElementById('form-contacto-email').value;
    const message = document.getElementById('form-contacto-message').value;
    
    // 2. Crear un objeto JavaScript con los datos
    const datosAEnviar = { name: name, email: email, message: message };

    //Endpoint a donde llegaran los datos
    const URL_ENDPOINT = 'https://backend-lp-liard.vercel.app/api/crear_contacto';

    try {
      const respuesta = await fetch(URL_ENDPOINT, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(datosAEnviar) // Convertir el objeto JS a cadena JSON
      });

      if (respuesta.ok) {
        const datosRespuesta = await respuesta.json(); // Leer la respuesta JSON del servidor
        formulario2.reset(); // Limpiar el formulario
      } else {
        const errorData = await respuesta.json(); // Intentar leer el mensaje de error del servidor
        formulario2.reset(); // Limpiar el formulario
      }
    } catch (error) {
      console.error('Error en la solicitud Fetch:', error);
    }
  });

  const URL_ENDPOINT = 'https://backend-lp-liard.vercel.app/api/obtener_proyectos';

  try {
    const respuesta = await fetch(URL_ENDPOINT, {
      method: 'GET'
    });

    if (respuesta.ok) {
      const proyectos = await respuesta.json(); // Leer la respuesta JSON del servidor
      document.getElementById('p1').innerHTML = proyectos['proyectos'][0]['name'];
      document.getElementById('p2').innerHTML = proyectos['proyectos'][1]['name'];
      document.getElementById('p3').innerHTML = proyectos['proyectos'][2]['name'];

      document.getElementById('p1url').href = proyectos['proyectos'][0]['name'];
      document.getElementById('p2url').href = proyectos['proyectos'][1]['name'];
      document.getElementById('p3url').href = proyectos['proyectos'][2]['name'];

      document.getElementById('p1txt').innerHTML = proyectos['proyectos'][0]['descripcion'];
      document.getElementById('p2txt').innerHTML = proyectos['proyectos'][1]['descripcion'];
      document.getElementById('p3txt').innerHTML = proyectos['proyectos'][2]['descripcion'];

      document.getElementById('p1img').src = proyectos['proyectos'][0]['img'];
      document.getElementById('p2img').src = proyectos['proyectos'][1]['img'];
      document.getElementById('p3img').src = proyectos['proyectos'][2]['img'];
    } else {
      const errorData = await respuesta.json(); // Intentar leer el mensaje de error del servidor
      console.log(errorData);
    }
  } catch (error) {
    console.error('Error en la solicitud Fetch:', error);
  }
});