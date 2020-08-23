<?php

    header("Content-Type: application/json");

    include_once("../class/class-usuario.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':    

            $usuario = Usuario::verificarUser($_POST['correo'], $_POST['contrasena']);
            if ($usuario) {
                echo '{"codigoResultado":1, "mensaje":"Usuario autenticado"}';
            } else {
                echo '{"codigoResultado":0, "mensaje":"Usuario no autenticado"}';
            }

        break;

        case 'GET':

        break;

        case 'PUT':
            // Actualizar                      
        break;

        case 'DELETE':
            // Eliminar
        break;
    }
?>  