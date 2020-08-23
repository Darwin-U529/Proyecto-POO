<?php
    class Publicacion {
        private $codigoPublic;
        private $codigoUser;
        private $contenidoPublic;
        private $likes;
        private $imagen;

        public function __construct(
            $codigoPublic,
            $codigoUser,
            $contenidoPublic,
            $likes,
            $imagen
        ){
            $this->codigoPublic = $codigoPublic;
            $this->codigoUser = $codigoUser;
            $this->contenidoPublic = $contenidoPublic;
            $this->likes = $likes;
            $this->imagen = $imagen;
        }

        public static function obtenerPublicacionesUser($idUsuario) {
            $contenidoArchivoPublic = file_get_contents('../data/publicaciones.json');
            $publicaciones = json_decode($contenidoArchivoPublic, true);

            $contenidoArchivoUsuario = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuario, true);

            $usuarios[$idUsuario]["publicaciones"] = array();

            for ($i=0; $i < sizeof($publicaciones); $i++) { 
                if ($publicaciones[$i]["codigoUser"] == $usuarios[$idUsuario]["idUsuario"]) {
                    $usuarios[$idUsuario]["publicaciones"][] = $publicaciones[$i];
                }
            }

            echo json_encode($usuarios[$idUsuario]);
        }

        public function agregarPublicacion() {
            $contenidoArchivoPublic = file_get_contents('../data/publicaciones.json');
            $publicaciones = json_decode($contenidoArchivoPublic, true);

            $publicaciones[] = array(
                "codigoPublic" => $this->codigoPublic, 
                "codigoUser" => $this->codigoUser, 
                "contenidoPublic" => $this->contenidoPublic, 
                "likes" => $this->likes, 
                "imagen" => $this->imagen 
            );

            $archivo = fopen('../data/publicaciones.json', 'w');
            fwrite($archivo, json_encode($publicaciones));
            fclose($archivo);

            echo '{"codigoResultado":1,"mensaje":"Publicacion Guardada con exito"}';  
        }

        /**
         * Get the value of codigoPublic
         */ 
        public function getCodigoPublic()
        {
                return $this->codigoPublic;
        }

        /**
         * Set the value of codigoPublic
         *
         * @return  self
         */ 
        public function setCodigoPublic($codigoPublic)
        {
                $this->codigoPublic = $codigoPublic;

                return $this;
        }

        /**
         * Get the value of codigoUser
         */ 
        public function getCodigoUser()
        {
                return $this->codigoUser;
        }

        /**
         * Set the value of codigoUser
         *
         * @return  self
         */ 
        public function setCodigoUser($codigoUser)
        {
                $this->codigoUser = $codigoUser;

                return $this;
        }

        /**
         * Get the value of contenidoPublic
         */ 
        public function getContenidoPublic()
        {
                return $this->contenidoPublic;
        }

        /**
         * Set the value of contenidoPublic
         *
         * @return  self
         */ 
        public function setContenidoPublic($contenidoPublic)
        {
                $this->contenidoPublic = $contenidoPublic;

                return $this;
        }

        /**
         * Get the value of likes
         */ 
        public function getLikes()
        {
                return $this->likes;
        }

        /**
         * Set the value of likes
         *
         * @return  self
         */ 
        public function setLikes($likes)
        {
                $this->likes = $likes;

                return $this;
        }

        /**
         * Get the value of comentarios
         */ 
        public function getComentarios()
        {
                return $this->comentarios;
        }

        /**
         * Set the value of comentarios
         *
         * @return  self
         */ 
        public function setComentarios($comentarios)
        {
                $this->comentarios = $comentarios;

                return $this;
        }
    }
?>