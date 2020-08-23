<?php

    header("Content-Type: application/json");

    include_once("../class/class-publicacion.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':    
            
            $publicacion = new Publicacion(
                $_POST["codigoPublic"],
                $_POST["codigoUser"],
                $_POST["contenidoPublic"],
                $_POST["likes"],
                $_POST["imagen"]
            );
                
            $publicacion->agregarPublicacion();  
        break;

        case 'GET':
            if (isset($_GET['idUsuario'])) {

                Publicacion::obtenerPublicacionesUser($_GET['idUsuario']);

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