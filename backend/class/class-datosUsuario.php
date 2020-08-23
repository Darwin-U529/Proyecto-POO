<?php
    class Datos {


        public function __construct(

        ){

        }

        public static function ObtenerDatosUsuario($idUsuario) {
            $contenidoArchivoPublic = file_get_contents('../data/publicaciones.json');
            $publicaciones = json_decode($contenidoArchivoPublic, true);

            $contenidoArchivoUsuario = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuario, true);

            $contenidoArchivoDatos = file_get_contents('../data/datosUsuarios.json');
            $datos = json_decode($contenidoArchivoDatos, true);
            
            $contenidoArchivoAmigos = file_get_contents('../data/amigos.json');
            $amigos = json_decode($contenidoArchivoAmigos, true);
            
            $contenidoArchivoFotos = file_get_contents('../data/imagenes.json');
            $fotos = json_decode($contenidoArchivoFotos, true);

            $usuarios[$idUsuario]["publicaciones"] = array();
            $usuarios[$idUsuario]["datos"] = array();
            $usuarios[$idUsuario]["amigos"] = array();
            $usuarios[$idUsuario]["imagenes"] = array();

            for ($i=0; $i < sizeof($publicaciones); $i++) { 
                if ($publicaciones[$i]["codigoUser"] == $usuarios[$idUsuario]["idUsuario"]) {
                    $usuarios[$idUsuario]["publicaciones"][] = $publicaciones[$i];
                }
            }
            
            for ($i=0; $i < sizeof($datos); $i++) { 
                if ($datos[$i]["idUsuario"] == $usuarios[$idUsuario]["idUsuario"]) {
                    $usuarios[$idUsuario]["datos"][] = $datos[$i];
                }
            }

            for ($i=0; $i < sizeof($amigos); $i++) { 
                if ($amigos[$i]["idUsuario"] == $usuarios[$idUsuario]["idUsuario"]) {
                    $usuarios[$idUsuario]["amigos"][] = $amigos[$i];
                }
            }

            for ($i=0; $i < sizeof($fotos); $i++) { 
                if ($fotos[$i]["idUsuario"] == $usuarios[$idUsuario]["idUsuario"]) {
                    $usuarios[$idUsuario]["imagenes"][] = $fotos[$i];
                }
            }

            echo json_encode($usuarios[$idUsuario]);
        }
    }    
?>