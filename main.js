
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Datos de ejemplo
    const user = "admin";
    const pass = "1234";

    if (username === user && password === pass) {
    message.textContent = "¡Login exitoso!";
    message.className = "success";
    } else {
    message.textContent = "Usuario o contraseña incorrectos";
    message.className = "error";
    }
}