function registrarse() {
    validarCampoVacio('nombre');
    validarCampoVacio('apellido');
    validarCampoVacio('numero&correo');
    validarCampoVacio('newPassword');
    validarCampoVacio('fechaNacimiento');
    validateEmail('correo');
}

function validarCampoVacio(id) {
    let campo = document.getElementById(id);

    if (campo.value == '') {
        campo.classList.remove('input-success');
        campo.classList.add('input-error');
    } else {
        campo.classList.remove('input-error');
        campo.classList.add('input-success');
    }
}

function validateEmail(id) {
    let campo = document.getElementById(id);
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(campo.value)) {
        campo.classList.remove('input-success');
        campo.classList.add('input-error');
    } else {
        campo.classList.remove('input-error');
        campo.classList.add('input-success');
    }
}
