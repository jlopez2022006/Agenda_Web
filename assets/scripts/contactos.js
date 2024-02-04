//Aqui lo que hacemos es agregar los nombres de contactos predefinidos//
var contactosPredefinidos = [
  { nombre: 'Ivan' },
  { nombre: 'Engie' },
  { nombre: 'Maeda' },
  { nombre: 'Pedro' },
  { nombre: 'Matias' },
];

//Dirigimos a la pagina favoritos//
function irAFavoritos() {
  window.location.href = '../pages/favoritos.html';
}

//Con esta función cargamos los contactos predefinidos al cargar la página//
window.onload = function () {
  cargarContactosPredefinidos();
};

function cargarContactosPredefinidos() {
  var contactTable = document.getElementById('contactTable');
  var tbody = contactTable.getElementsByTagName('tbody')[0];

  contactosPredefinidos.forEach(function (contacto) {
    var newRow = document.createElement('tr');
    var nombreCell = document.createElement('td');
    var nombreLink = document.createElement('a');

    nombreLink.href = 'listaDatos.html?nombre=' + encodeURIComponent(contacto.nombre);
    nombreLink.textContent = contacto.nombre;

    nombreCell.appendChild(nombreLink);
    newRow.appendChild(nombreCell);
    tbody.appendChild(newRow);
  });
}

//Aqui agregamos los datos del usuario predefinidamente//
var datosPerfil = {
  nombre: 'Usuario Ejemplo',
  email: 'usuario@example.com',
  telefono: '1234-5678',
  edad: 25,
  pais: 'EjemploLand',
};

// Función para mostrar los datos del perfil
function mostrarPerfil() {
  var perfilDatos = document.getElementById('perfilDatos');
  var btnPerfil = document.getElementById('btnPerfil');

  // Alternar la visibilidad del contenedor de perfil
  perfilDatos.classList.toggle('oculto');

  // Mostrar u ocultar el texto del botón según el estado del contenedor
  if (perfilDatos.classList.contains('oculto')) {
    btnPerfil.textContent = 'Perfil';
  } else {
    btnPerfil.textContent = 'Cerrar Perfil';
    // Cargar y mostrar los datos del perfil
    cargarDatosPerfil();
  }
}

// Función para cargar los datos del perfil en el contenedor
function cargarDatosPerfil() {
  var perfilDatos = document.getElementById('perfilDatos');
  perfilDatos.innerHTML = '';

  // Crear elementos de lista para cada dato del perfil
  agregarDatoPerfil('Nombre: ' + datosPerfil.nombre);
  agregarDatoPerfil('Email: ' + datosPerfil.email);
  agregarDatoPerfil('Teléfono: ' + datosPerfil.telefono);
  agregarDatoPerfil('Edad: ' + datosPerfil.edad);
  agregarDatoPerfil('País: ' + datosPerfil.pais);
}

// Función para agregar un elemento de lista al contenedor del perfil
function agregarDatoPerfil(dato) {
  var perfilDatos = document.getElementById('perfilDatos');
  var listItem = document.createElement('div');
  listItem.textContent = dato;
  perfilDatos.appendChild(listItem);
}


// Función para que nos lleve a la página agregar//
function irANuevosContactos() {
  window.location.href = '../pages/agregar.html';
}

// Funcion para ir a la página pendientes//
function irAPendientes() {
  window.location.href = 'pendientes.html';
}

function irAPerfil() {
  window.location.href = '../pages/perfil.html';
}