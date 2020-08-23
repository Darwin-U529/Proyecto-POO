<?php
    class Usuario {
        private $idUsuario;
        private $nombre;
        private $apellido;
        private $correo;
        private $contrasena;
        private $fechaNacimiento;

        public function __construct(
            $idUsuario,
            $nombre,
            $apellido,
            $correo,
            $contrasena,
            $fechaNacimiento
        ){
            $this->idUsuario = $idUsuario;
            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->correo = $correo;
            $this->contrasena = $contrasena;
            $this->fechaNacimiento = $fechaNacimiento;
        }

        public static function obtenerUsuarios() {
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');

            echo $contenidoArchivoUsuarios;
        }

        public static function obtenerUsuario($idUsuario) {
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);

            $usuario = array();

            for ($i=0; $i < sizeof($usuarios); $i++) { 
                if ($usuarios[$i]["idUsuario"] == $idUsuario) {
                    $usuario[] = $usuarios[$i];
                }
            }

            echo json_encode($usuario);
        }

        public function guardarUsuario() {
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);

            $usuarios[] = array(
                "idUsuario" => $this->idUsuario, 
                "nombre" => $this->nombre, 
                "apellido" => $this->apellido, 
                "correo" => $this->correo, 
                "contrasena" => $this->contrasena, 
                "fechaNacimiento" => $this->fechaNacimiento 
            );

            $archivo = fopen('../data/usuarios.json', 'w');
            fwrite($archivo, json_encode($usuarios));
            fclose($archivo);

            echo '{"codigoResultado":1,"mensaje":"Usuarios Guardado con exito"}';  
        } 

        public static function verificarUser($email, $password) {
            $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
            $usuarios = json_decode($contenidoArchivoUsuarios, true);

            for ($i=0; $i < sizeof($usuarios); $i++) { 
                if ($usuarios[$i]["correo"] == $email && $usuarios[$i]["contrasena"] == $password) {
                    return $usuarios[$i];
                }
            }
            return null;
        }

        /**
         * Get the value of nombre
         */ 
        public function getNombre()
        {
                return $this->nombre;
        }

        /**
         * Set the value of nombre
         *
         * @return  self
         */ 
        public function setNombre($nombre)
        {
                $this->nombre = $nombre;

                return $this;
        }

        /**
         * Get the value of apellido
         */ 
        public function getApellido()
        {
                return $this->apellido;
        }

        /**
         * Set the value of apellido
         *
         * @return  self
         */ 
        public function setApellido($apellido)
        {
                $this->apellido = $apellido;

                return $this;
        }

        /**
         * Get the value of correo
         */ 
        public function getCorreo()
        {
                return $this->correo;
        }

        /**
         * Set the value of correo
         *
         * @return  self
         */ 
        public function setCorreo($correo)
        {
                $this->correo = $correo;

                return $this;
        }

        /**
         * Get the value of contrasena
         */ 
        public function getContrasena()
        {
                return $this->contrasena;
        }

        /**
         * Set the value of contrasena
         *
         * @return  self
         */ 
        public function setContrasena($contrasena)
        {
                $this->contrasena = $contrasena;

                return $this;
        }

        /**
         * Get the value of fechaNacimiento
         */ 
        public function getFechaNacimiento()
        {
                return $this->fechaNacimiento;
        }

        /**
         * Set the value of fechaNacimiento
         *
         * @return  self
         */ 
        public function setFechaNacimiento($fechaNacimiento)
        {
                $this->fechaNacimiento = $fechaNacimiento;

                return $this;
        }
    }
?>