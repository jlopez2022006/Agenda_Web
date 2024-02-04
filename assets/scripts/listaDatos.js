
window.onload = function () {
    cargarDatosContacto();
};

var contactosPredefinidos = [
    { nombre: 'Ivan', datos: ['Email: ivan@gmail.com', 'Teléfono: 7456-7890', 'Edad: 23', 'País: Guatemala'] },
    { nombre: 'Engie', datos: ['Email: engie@gmail.com', 'Teléfono: 7456-7890', 'Edad: 34', 'País: Guatemala'] },
    { nombre: 'Maeda', datos: ['Email: maeda@gmail.com', 'Teléfono: 7456-7890', 'Edad: 32', 'País: Guatemala'] },
    { nombre: 'Pedro', datos: ['Email: pedro@gmail.com', 'Teléfono: 7456-7890', 'Edad: 22', 'País: Guatemala'] },
    { nombre: 'Matias', datos: ['Email: matias@gmail.com', 'Teléfono: 7456-7890', 'Edad: 26', 'País: Guatemala'] },
];

function cargarDatosContacto() {
    var urlParams = new URLSearchParams(window.location.search);
    var nombre = urlParams.get('nombre');

    if (nombre) {
        var contacto = contactosPredefinidos.find(function (contacto) {
            return contacto.nombre === nombre;
        });

        if (contacto) {
            var datosList = document.getElementById('datosList');
            datosList.innerHTML = '';

            contacto.datos.forEach(function (dato) {
                agregarDatoLista(dato);
            });
        } else {
            alert('Contacto no encontrado.');
            window.location.href = 'contactos.html';
        }
    } else {
        alert('Nombre de contacto no proporcionado.');
        window.location.href = 'contactos.html';
    }
}

function agregarDatoLista(dato) {
    var datosList = document.getElementById('datosList');
    var listItem = document.createElement('li');
    listItem.textContent = dato;
    datosList.appendChild(listItem);
}

function regresarAContactos() {
    window.location.href = 'contactos.html';  
}