window.onload = function () {
    cargarDatosPerfil();
};

var datosPerfil = {
    nombre: 'Ivan',
    email: 'ivan@gmail.com',
    telefono: '1234-5678',
    edad: 25,
    pais: 'Guatemala',
};

function cargarDatosPerfil() {
    var perfilDatos = document.getElementById('perfilDatos');
    perfilDatos.innerHTML = '';

    agregarDatoPerfil('Nombre: ' + datosPerfil.nombre);
    agregarDatoPerfil('Email: ' + datosPerfil.email);
    agregarDatoPerfil('Teléfono: ' + datosPerfil.telefono);
    agregarDatoPerfil('Edad: ' + datosPerfil.edad);
    agregarDatoPerfil('País: ' + datosPerfil.pais);
}

function agregarDatoPerfil(dato) {
    var perfilDatos = document.getElementById('perfilDatos');
    var listItem = document.createElement('div');
    listItem.textContent = dato;
    perfilDatos.appendChild(listItem);
}

function irAContactos() {
    window.location.href = '../pages/contactos.html';
}