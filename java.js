document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario
  
    // Verificar las credenciales ingresadas
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Ejemplo de verificación de credenciales (usuario: admin, contraseña: password)
    if (username === "admin" && password === "password") {
      // Redirigir a la página de destino si las credenciales son correctas
      window.location.href = "index.html"; // Reemplaza con la URL o ruta relativa de tu página de destino
    } else {
      alert("Credenciales incorrectas. Por favor, intenta nuevamente.");
    }
  });