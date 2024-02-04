function agregarContacto(event) {
  event.preventDefault();  // Evitar que el formulario se envíe y recargue la página

  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;

  // Validar que se ingresen datos
  if (nombre && email && telefono) {
    // Crear una nueva fila para la tabla
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td>' + nombre + '</td><td>' + email + '</td><td>' + telefono + '</td>';

    // Agregar la nueva fila a la tabla en la página actual (contactos.html)
    var contactTable = window.opener.document.getElementById('contactTable');
    contactTable.getElementsByTagName('tbody')[0].appendChild(newRow);

    // Limpiar los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';

    // Regresar a la página de contactos.html
    window.history.back();
  } else {
    alert('Por favor, completa todos los campos.');
  }
}