var pendientes = [];

window.onload = function () {
    cargarPendientesPredefinidos();
};

function cargarPendientesPredefinidos() {
    var pendientesTable = document.getElementById('pendientesTable');
    var storedPendientes = JSON.parse(localStorage.getItem('pendientes'));

    pendientes = storedPendientes || [];
    ordenarPorPrioridad();
    actualizarTabla();
}

function agregarPendiente() {
    var nombre = document.getElementById('nombre').value;
    var prioridad = document.getElementById('prioridad').value;

    if (nombre) {
        var nuevoPendiente = { nombre: nombre, prioridad: prioridad };
        pendientes.push(nuevoPendiente);
        localStorage.setItem('pendientes', JSON.stringify(pendientes));
        ordenarPorPrioridad();
        actualizarTabla();
        limpiarFormulario();
    }
}

function ordenarPorPrioridad() {
    pendientes.sort(function (a, b) {
        var prioridadOrden = { alta: 1, media: 2, baja: 3 };
        return prioridadOrden[a.prioridad] - prioridadOrden[b.prioridad];
    });
}

function actualizarTabla() {
    var pendientesTable = document.getElementById('pendientesTable');
    var tbody = pendientesTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    pendientes.forEach(function (pendiente, index) {
        var row = tbody.insertRow();
        var cellNombre = row.insertCell(0);
        var cellPrioridad = row.insertCell(1);
        var cellAcciones = row.insertCell(2);

        cellNombre.innerHTML = pendiente.nombre;
        cellPrioridad.innerHTML = pendiente.prioridad;

        var editarButton = document.createElement('button');
        editarButton.innerText = 'Editar';
        editarButton.className = 'editar';
        editarButton.onclick = function () {
            editarPendiente(index);
        };

        var eliminarButton = document.createElement('button');
        eliminarButton.innerText = 'Eliminar';
        eliminarButton.className = 'eliminar';
        eliminarButton.onclick = function () {
            eliminarPendiente(index);
        };

        cellAcciones.appendChild(editarButton);
        cellAcciones.appendChild(eliminarButton);

        row.className = 'prioridad-' + pendiente.prioridad;
    });
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('prioridad').value = 'alta';
}

function eliminarPendiente(index) {
    pendientes.splice(index, 1);
    localStorage.setItem('pendientes', JSON.stringify(pendientes));
    ordenarPorPrioridad();
    actualizarTabla();
}

function editarPendiente(index) {
    var pendiente = pendientes[index];
    document.getElementById('nombre').value = pendiente.nombre;
    document.getElementById('prioridad').value = pendiente.prioridad;

    eliminarPendiente(index);
}

function irAContactos() {
    window.location.href = '../pages/contactos.html';
}