function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Aquí puedes agregar lógica de autenticación, por ejemplo, comparar con credenciales predefinidas
    if (username === "usuario" && password === "contrasena") {
        // Inicio de sesión exitoso, redirige a la nueva página
        window.location.href = "../assets/pages/contactos.html";
    } else {
        errorMessage.innerHTML = "Credenciales incorrectas. Intenta de nuevo.";
        errorMessage.style.color = "#ff0000";
    }
}