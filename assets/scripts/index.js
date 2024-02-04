function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Comprobar las credenciales
    if (username === 'Ivan' && password === '123') {
      alert('¡Login exitoso!\nUsuario: ' + username);
      window.location.href = './assets/pages/contactos.html'; 
    } else {
      alert('Error en las credenciales. Inténtalo de nuevo.');
    }
  }