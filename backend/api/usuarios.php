<?php

    header("Content-Type: application/json");

    include_once("../class/class-usuario.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':    
            
            $usuario = new Usuario(
                $_POST["idUsuario"],
                $_POST["nombre"],
                $_POST["apellido"],
                $_POST["correo"],
                $_POST["contrasena"],
                $_POST["fechaNacimiento"]
            );
                
            $usuario->guardarUsuario();  
        break;

        case 'GET':
            if (isset($_GET['idUsuario'])){
                
                Usuario::obtenerUsuario($_GET['idUsuario']);

            }else{

                Usuario::obtenerUsuarios(); 
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