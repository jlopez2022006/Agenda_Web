var favoritos = [
    { nombre: 'Engie', datos: ['Email: engie@example.com', 'Teléfono: 1234-5678', 'Edad: 25', 'País: México'] },
    { nombre: 'Pedro', datos: ['Email: pedro@example.com', 'Teléfono: 1111-2222', 'Edad: 35', 'País: España'] },
    // Agrega más contactos favoritos según sea necesario
];

window.onload = function () {
    cargarFavoritos();
};

function cargarFavoritos() {
    var favoritosTable = document.getElementById('favoritosTable');
    var tbody = favoritosTable.getElementsByTagName('tbody')[0];

    favoritos.forEach(function (contacto) {
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

function irAContactos() {
    window.location.href = '../pages/contactos.html';
}