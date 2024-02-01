function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aquí puedes agregar lógica de validación, como enviar los datos a un servidor y verificar la autenticación.

    if (username === 'usuario' && password === 'contraseña') {
        // Redirigir a la página deseada después de la validación exitosa
        window.location.href = '../assets/pages/contactos.html';
    } else {
        alert('Error en el inicio de sesión. Verifica tu usuario y contraseña.');
    }
}