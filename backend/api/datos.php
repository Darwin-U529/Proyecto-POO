<?php

    header("Content-Type: application/json");

    include_once("../class/class-datosUsuario.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':    

        break;

        case 'GET':
            if (isset($_GET['idUsuario'])) {

                Datos::ObtenerDatosUsuario($_GET['idUsuario']);

            }else{

                //Usuario::obtenerUsuarios(); 
            } 
        break;

        case 'PUT':
            // Actualizar                      
        break;

        case 'DELETE':
            // Eliminar
        break;
    }
?>  