
document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // ELEMENTOS PRINCIPALES
    // ======================================

    const intro = document.getElementById("intro");
    const login = document.getElementById("login");

    const tabLogin = document.getElementById("tabLogin");
    const tabRegistro = document.getElementById("tabRegistro");

    const formLogin = document.getElementById("formLogin");
    const formRegistro = document.getElementById("formRegistro");

    const irRegistro = document.getElementById("irRegistro");
    const irLogin = document.getElementById("irLogin");

    // ======================================
    // ANIMACIÓN DE ENTRADA
    // ======================================

    setTimeout(() => {
        intro.classList.add("ocultar");
        login.classList.add("mostrar");
    }, 2500);

    // ======================================
    // CAMBIAR ENTRE LOGIN Y REGISTRO
    // ======================================

    function mostrarLogin() {
        formLogin.classList.remove("oculto");
        formRegistro.classList.add("oculto");

        tabLogin.classList.add("activa");
        tabRegistro.classList.remove("activa");

        limpiarMensajes();
    }

    function mostrarRegistro() {
        formRegistro.classList.remove("oculto");
        formLogin.classList.add("oculto");

        tabRegistro.classList.add("activa");
        tabLogin.classList.remove("activa");

        limpiarMensajes();
    }

    tabLogin.addEventListener("click", mostrarLogin);
    tabRegistro.addEventListener("click", mostrarRegistro);

    irRegistro.addEventListener("click", (event) => {
        event.preventDefault();
        mostrarRegistro();
    });

    irLogin.addEventListener("click", (event) => {
        event.preventDefault();
        mostrarLogin();
    });

    // ======================================
    // MOSTRAR / OCULTAR CONTRASEÑA
    // ======================================

    document.querySelectorAll(".ojo").forEach((boton) => {

        boton.addEventListener("click", () => {

            const id = boton.dataset.password;
            const campo = document.getElementById(id);

            if (!campo) return;

            if (campo.type === "password") {
                campo.type = "text";
                boton.textContent = "◎";
                boton.setAttribute("aria-label", "Ocultar contraseña");
            } else {
                campo.type = "password";
                boton.textContent = "◉";
                boton.setAttribute("aria-label", "Mostrar contraseña");
            }

        });

    });

    // ======================================
    // MENSAJES
    // ======================================

    function limpiarMensajes() {
        document.getElementById("mensajeLogin").textContent = "";
        document.getElementById("mensajeRegistro").textContent = "";
    }

    // ======================================
    // ENVÍO DEL LOGIN (DEMO VISUAL)
    // ======================================

    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();

        const correo = document.getElementById("correo").value.trim();
        const password = document.getElementById("password").value;

        if (!correo || !password) return;

        document.getElementById("mensajeLogin").textContent =
            "Interfaz de demostración: todavía no hay autenticación conectada.";
    });

    // ======================================
    // ENVÍO DEL REGISTRO (DEMO VISUAL)
    // ======================================

    formRegistro.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correoRegistro").value.trim();
        const password = document.getElementById("passwordRegistro").value;

        if (!nombre || !correo || !password) return;

        document.getElementById("mensajeRegistro").textContent =
            "Formulario de demostración: todavía no se guardan cuentas.";
    });

});
