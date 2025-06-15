//Objetos de pruebas
const proyectos = [
  {
    foto:'front.jpeg',
    name: "Desarrollo Web Frontend",
    topic: "Frontend"
  },
  {
    foto:'backend.png',
    name: "Desarrollo Web Backend",
    topic: "Backend"
  },
  {
    foto:'kotlin.jpg',
    name: "Desarrollo de Aplicacion en Andorid",
    topic: "Desarrollo Movil"
  },
  {
    foto:'TSF.png',
    name: "Uso de tensorflow",
    topic: "Python"
  },
  {
    foto:'ia.webp',
    name: "Backpropagation",
    topic: "Python"
  }
];

// 2. Obtener el contenedor donde se cargarán los objetos
const contenedor = document.getElementById('contenedor-proyectos');

// 3. Iterar sobre la lista de objetos y crear los elementos HTML
proyectos.forEach(objeto => {
    // Crear el div principal para cada objeto (la tarjeta)
    const tarjetaObjeto = document.createElement('div');
    tarjetaObjeto.classList.add('tarjeta-objeto'); // Añadir una clase para estilos

    const divIMG = document.createElement('div');
    divIMG.classList.add('tarjeta-img'); // Añadir una clase para estilos
    // Crear el elemento de la imagen
    const img = document.createElement('img');
    img.src = objeto.foto;
    img.alt = ""; // Importante para accesibilidad

    // Crear el div para el contenido de la tarjeta
    const tarjetaContenido = document.createElement('div');
    tarjetaContenido.classList.add('tarjeta-contenido');

    // Crear el título
    const titulo = document.createElement('h4');
    titulo.textContent = objeto.name;

    // Crear la etiqueta
    const etiqueta = document.createElement('span');
    etiqueta.classList.add('tarjeta-etiqueta');
    etiqueta.textContent = objeto.topic;

    divIMG.appendChild(img);
    // Anidar los elementos:
    // Imagen dentro de la tarjeta
    tarjetaObjeto.appendChild(divIMG);

    // Título y etiqueta dentro del div de contenido
    tarjetaContenido.appendChild(titulo);
    tarjetaContenido.appendChild(etiqueta);

    // Contenido dentro de la tarjeta
    tarjetaObjeto.appendChild(tarjetaContenido);

    // Añadir la tarjeta completa al contenedor principal
    contenedor.appendChild(tarjetaObjeto);
});
var chg = false;
const header2 = document.getElementById('header2');
const header_alt = document.getElementById('header-alt');
document.getElementById('menu_adaptable').addEventListener('click', () => {
  header_alt.style.display = 'none';
  header2.style.display = 'flex';
  header2.style.flexDirection = 'column';
  header2.style.position = 'absolute';
  header2.style.left = '50%';
  header2.style.zIndex = '100';
  chg = true;
});

document.getElementById('boton-sec-sobre-mi').addEventListener('click', () => {
  location.href='#sec-sobre-mi';
  if(chg) {
    header2.style.display = 'none';
    header_alt.style.display = 'block';
  }
});
document.getElementById('boton-sec-servicios').addEventListener('click', () => {
  location.href='#sec-servicios';
  if(chg) {
    header2.style.display = 'none';
    header_alt.style.display = 'block';
  }
});
document.getElementById('boton-sec-portafolio').addEventListener('click', () => {
  location.href='#sec-portafolio';
  if(chg) {
    header2.style.display = 'none';
    header_alt.style.display = 'block';
  }
});
document.getElementById('boton-sec-contactame').addEventListener('click', () => {
  location.href='#sec-contacto';
  if(chg) {
    header2.style.display = 'none';
    header_alt.style.display = 'block';
  }
});