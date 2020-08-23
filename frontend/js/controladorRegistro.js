var idUser;


function registrarse() {
    validarCampoVacio('nombre');
    validarCampoVacio('apellido');
    validarCampoVacio('numero&correo');
    validarCampoVacio('newPassword');
    validarCampoVacio('fechaNacimiento');
    
    
    /*validarCampoVacio('correoUser');
    validarCampoVacio('passwordUser');*/
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

function guardarUser(){
    axios({
        method: 'GET',
        url: '../backend/api/usuarios.php',
        responseType: 'json'
    }).then(res=>{
        console.log(res);
        var temp = (res.data.length)+1;

        if (document.getElementById('nombre').value == '' || document.getElementById('apellido').value == '' || document.getElementById('numero&correo').value == '' || document.getElementById('newPassword').value == '' || document.getElementById('fechaNacimiento').value == '') {
            registrarse();
        } else {
            var user = {
                idUsuario: temp,
                nombre: document.getElementById('nombre').value,
                apellido: document.getElementById('apellido').value,
                correo: document.getElementById('numero&correo').value,
                contrasena: document.getElementById('newPassword').value,
                fechaNacimiento: document.getElementById('fechaNacimiento').value
              };
            
              axios({
                method: 'POST',
                url: '../backend/api/usuarios.php',
                responseType: 'json',
                data: user
            }).then(res=>{
        
                console.log("Se guardo con exito");
                registrarse();
    
                alert("Bienvenido a Facebook, ya puedes ingresar con tus credenciales Correo: "+document.getElementById('numero&correo').value+"y Contraseña: "+document.getElementById('newPassword').value);
    
                document.getElementById('nombre').value = '';
                document.getElementById('apellido').value = '';
                document.getElementById('numero&correo').value = '';
                document.getElementById('newPassword').value = '';
                document.getElementById('fechaNacimiento').value = '';
            
            }).catch(error=>{
                console.error(error);
            });   
        }

    }).catch(error=>{
        console.error(error);
    });
}

function ingresarUser() {
    var user = {
        correo: document.getElementById('emailUser').value,
        contrasena: document.getElementById('passwordUser').value,
    };

    axios({
        method: 'POST',
        url: '../backend/api/login.php',
        responseType: 'json',
        data: user
    }).then(res=>{

        console.log(res);
    
    }).catch(error=>{
        console.error(error);
    });
}
