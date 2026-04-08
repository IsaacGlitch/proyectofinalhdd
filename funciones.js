function agregarCarrito(producto) {
    alert(producto + " agregado al carrito 🛒");
}

function abrirLogin() {
    document.getElementById("modalLogin").style.display = "block";
}

function cerrarLogin() {
    document.getElementById("modalLogin").style.display = "none";
}

function iniciarSesion() {
    let user = document.getElementById("usuario").value;

    if (user === "") {
        alert("Por favor ingresa un usuario");
    } else {
        alert("Bienvenido " + user + " 🎮");
        cerrarLogin();
    }
}