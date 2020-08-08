var Usuario = [
    {
        nombre: "Christofer",
        apellido: "Alfonso",
        educacion: "Ingenieria en Sistemas",
        li_estudio: "UNAH",
        estado_civil: "Soltero",
        ubicacion: "Tegucigalpa, Honduras",
        lu_naciento: "Comayaguela, Francisco Morazan, Honduras",
        ingreso: "noviembre de 2010",
        img_perfil: "img/perfil.jpg",
        fecha_nacimiento: "25 de agosto 1997",
        telefono: "8524-2567",
        correo: "programacion@mail.com",
        trabajo: "Facebook",
        sexo: "Masculino",
        intereses: "Mujeres",
        idiomas: "Español",
        imagenes:["img/1.webp","img/2.webp","img/portada.jpg", "img/4.webp","img/portada.jpg", "img/6.webp","img/amigos.jpg", "img/8.webp", "img/9.webp","img/amigos.jpg", "img/11.webp","img/12.webp",],
        amigos: [
            {
                name: "Ricardo Antonio",
                img: "img/amigos.jpg",
                ami: "335"
            },
            {
                name: "Jorge Varela",
                img: "img/1.webp",
                ami: "436"
            },
            {
                name: "Denis Sevilla",
                img: "img/2.webp",
                ami: "987"
            },
            {
                name: "Isaac Ramirez",
                img: "img/portada.jpg",
                ami: "764"
            },    
        ]

    }
]

let contador = 1;
/*for (let g = 0; g < array.length; g++) {
    
}*/
function genInfo() {
    for (let i = 0; i < Usuario.length; i++) {
        document.getElementById('picPerfil').innerHTML = 
        `<p style="top: 16rem; left: 17rem;position: absolute; color: white; font-size: 2rem; font-weight: bold;">${Usuario[i].nombre + " " + Usuario[i].apellido}</p>
        <img style="background-color: white; padding: 4px;max-width: 200px; min-width: 200px; position: absolute; top: 160px; left: 50px; border-radius: 50%;" src="${Usuario[i].img_perfil}" alt="">`;
        
        document.getElementById('place').innerHTML = 
        `<input style="width: 30rem;" type="text" class="form-control" placeholder="${Usuario[i].nombre + " " + Usuario[i].apellido}" aria-label="Recipient's username" aria-describedby="button-addon2">`;

        document.getElementById('pic_nav').innerHTML = 
        `<img style="background-color: white; max-width: 35px; min-width: 35px; border-radius: 50%;" src="${Usuario[i].img_perfil}" alt="">   `;

        document.getElementById('user_nav').innerHTML = 
        `<p style="margin: 0 px; color: white; font-size: 13px; margin-left: .5rem;">${Usuario[i].nombre + " " + Usuario[i].apellido}</p> `;
    }
}

genInfo();

function genBajoPerfil() {
    for (let i = 0; i < Usuario.length; i++) {
        document.getElementById('bajoPerfil').innerHTML = 
            `<div class="col-5" style="padding: 0;">                 <!-- Col para zona de Informacion-->
            <div class="card">
                <div class="card-body" style="margin: 0;"><!--#4263aa-->
                    <div class="row" style="margin-bottom: 1rem;">
                        <i style="color: white; background-color: #4a6fc0; border-radius: 50%; padding: 5px; margin: 0 1rem;" class="fas fa-globe-americas"></i>
                        Detalles
                    </div>
                    <div class="row" style="margin-left: .1rem; font-size: .8rem;">
                        <table>
                            <tr>
                                <th>
                                    <i class="fas fa-graduation-cap"></i>
                                </th>
                                <th>
                                    <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Estudia ${Usuario[i].educacion} en <a href="">${Usuario[i].li_estudio}</a></p>
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div class="row" style="margin-left: .1rem; margin-top: .5rem; font-size: .8rem;">
                        <table>
                            <tr>
                                <th>
                                    <i class="fas fa-home"></i>
                                </th>
                                <th>
                                    <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Vive en  <a href="">${Usuario[i].ubicacion}</a></p>
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div class="row" style="margin-left: .2rem; margin-top: .5rem; font-size: .8rem;">
                        <table>
                            <tr>
                                <th>
                                    <i class="fas fa-map-marker-alt"></i>
                                </th>
                                <th>
                                    <p style="margin-bottom: 0; font-weight: normal; margin-left: .6rem;"> De <a href="">${Usuario[i].lu_naciento}</a></p>
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div class="row" style="margin-left: .1rem; margin-top: .5rem; font-size: .8rem;">
                        <table>
                            <tr>
                                <th>
                                    <i class="far fa-heart"></i>
                                </th>
                                <th>
                                    <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">${Usuario[i].estado_civil}</p>
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div class="row" style="margin-left: .1rem; margin-top: .5rem; font-size: .8rem;">
                        <table>
                            <tr>
                                <th>
                                    <i class="far fa-clock"></i>
                                </th>
                                <th>
                                    <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Se unió en ${Usuario[i].ingreso}</p>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body" style="padding: 0;"><!--#4263aa-->
                    <div class="row" style="margin: 1rem;">
                        <i style="color: white; background-color: #46ec62; border-radius: 50%; padding: 5px; margin: 0 1rem;" class="fas fa-image"></i>
                        Fotos
                    </div>
                    <div class="row" id="gesFotos" style="margin: 0;">
                        
                    </div>
                </div>
            </div>
        </div>
            <div class="col-7" style="padding: 0; padding-left: 1rem;">     <!-- Col para zona de publicaciones-->
            <div class="card text-center">
                <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                    <a class="nav-link active" href="#"><i class="fas fa-pencil-alt"></i> Crear publicación</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-camera"></i> Foto/vídeo</a>
                    </li>
                </ul>
                </div>
                <div class="card-body">
                    <div class="row">
                        <table style="margin-left: 25px;">
                            <tr>
                                <th>
                                    <img style="max-width: 50px; min-width: 50px; border-radius: 50%;" src="${Usuario[i].img_perfil}">
                                </th>
                                <th>
                                    <input class="pensando" type="text" style="border: none; margin-left: 15px; width: 30rem;" placeholder="¿Que estas pensando?">
                                </th>
                            </tr>
                        </table>
                        
                    </div>
                    <div class="row" style="margin: .1rem;">
                        <hr style="width: 100%;text-align:left;margin-left:0">
                    </div>
                    <div class="row">
                        <button class="pic" style="border-radius: 50px; margin-left: 1rem; background-color: #f0f0f0; border: none; padding: .3rem 20px;">
                            <i style="font-size: 20px;" class="fas fa-image"></i>
                            Foto/video
                        </button>
                        <button style="margin-right: 1rem; background-color: #4a6fc0; color: white; border-radius: 5px; outline: none; padding: 0 20px; font-weight: bold; font-size: .8rem;" class="ml-auto">Publicar</button>
                    </div>
                </div>
            </div>
        </div>`;
        
    }
}
genBajoPerfil();

function genFotos() {
    for (let i = 0; i < Usuario.length; i++) {
        for (let k = 0; k <= 8; k++) {
            document.getElementById('gesFotos').innerHTML += 
            `<div style="padding: 0;" class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-1" id="genFotos">
                <img style="margin-bottom: 3px; margin-left: 3px; min-width: 150px; max-width: 150px;; height: 7rem; object-fit: cover;" src="${Usuario[i].imagenes[k]}">
            </div>`;
            
        }
    }   
}
genFotos();

function genAmigos() {
    for (let i = 0; i < Usuario.length; i++) {
        for (let g = 0; g < Usuario[i].amigos.length; g++) {
            document.getElementById('amigos').innerHTML += 
            `<div class="col-xl-6 col-md-6 col-sm-l2" style="padding: 1rem;">
            <div style="border: 1px solid #e2e1e1;">
                <table>
                    <tr>
                        <th>
                            <img style="max-width: 150px; min-width: 150px;" src="${Usuario[i].amigos[g].img}" alt="">
                        </th>
                        <th>
                            <p style="margin-left: 1rem;"><a href="">${Usuario[i].amigos[g].name}</a></p>
                            <p style="margin-left: 1rem; color: grey; font-size: 70%;">${Usuario[i].amigos[g].ami} amigos</p>
                        </th>
                        <th>
                            <button style="border: 1px solid #afaeae; background-color: #e2e2e2bb; border-radius: 3px; margin-left: 7rem;">
                                <i class="fas fa-check"></i>
                                Amigos
                            </button>
                        </th>
                    </tr>
                </table>
            </div>
        </div> `;
            
        }
    }        
}
genAmigos();

function genFotoscard() {
    for (let i = 0; i < Usuario.length; i++) {
        for (let h = 0; h < Usuario[i].imagenes.length; h++) {
            document.getElementById('fotos').innerHTML += 
            `<div style="margin-top: .5rem;" class="col-xl-3 col-md-6 col-sm-12">
            <img style="max-width: 250px; min-width: 150px;" src="${Usuario[i].imagenes[h]}" alt="">
            </div>`;
            
        }
        
    }
}
genFotoscard();

function genClickBajoPerfil() {
    document.getElementById('cardFotos').innerHTML = '';
    document.getElementById('cardFriends').innerHTML = '';
    document.getElementById('cardInfo').innerHTML = '';
    document.getElementById('bajoPerfil').innerHTML = 
    `<div class="col-5" style="padding: 0;">                 <!-- Col para zona de Informacion-->
    <div class="card">
        <div class="card-body" style="margin: 0;"><!--#4263aa-->
            <div class="row" style="margin-bottom: 1rem;">
                <i style="color: white; background-color: #4a6fc0; border-radius: 50%; padding: 5px; margin: 0 1rem;" class="fas fa-globe-americas"></i>
                Detalles
            </div>
            <div class="row" style="margin-left: .1rem; font-size: .8rem;">
                <table>
                    <tr>
                        <th>
                            <i class="fas fa-graduation-cap"></i>
                        </th>
                        <th>
                            <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Estudia Ingenieria en Sistemas en <a href="">UNAH</a></p>
                        </th>
                    </tr>
                </table>
            </div>
            <div class="row" style="margin-left: .1rem; margin-top: .5rem; font-size: .8rem;">
                <table>
                    <tr>
                        <th>
                            <i class="fas fa-home"></i>
                        </th>
                        <th>
                            <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Vive en  <a href="">Tegucigalpa, Honduras</a></p>
                        </th>
                    </tr>
                </table>
            </div>
            <div class="row" style="margin-left: .2rem; margin-top: .5rem; font-size: .8rem;">
                <table>
                    <tr>
                        <th>
                            <i class="fas fa-map-marker-alt"></i>
                        </th>
                        <th>
                            <p style="margin-bottom: 0; font-weight: normal; margin-left: .6rem;"> De <a href="">Comayaguela, Francisco Morazan, Honduras</a></p>
                        </th>
                    </tr>
                </table>
            </div>
            <div class="row" style="margin-left: .1rem; margin-top: .5rem; font-size: .8rem;">
                <table>
                    <tr>
                        <th>
                            <i class="far fa-heart"></i>
                        </th>
                        <th>
                            <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Soltero</p>
                        </th>
                    </tr>
                </table>
            </div>
            <div class="row" style="margin-left: .1rem; margin-top: .5rem; font-size: .8rem;">
                <table>
                    <tr>
                        <th>
                            <i class="far fa-clock"></i>
                        </th>
                        <th>
                            <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Se unió en noviembre de 2010</p>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="card mt-3">
        <div class="card-body" style="padding: 0;"><!--#4263aa-->
            <div class="row" style="margin: 1rem;">
                <i style="color: white; background-color: #46ec62; border-radius: 50%; padding: 5px; margin: 0 1rem;" class="fas fa-image"></i>
                Fotos
            </div>
            <div class="row" id="gesFotos" style="margin: 0;">
                
            </div>
        </div>
    </div>
</div>
    <div class="col-7" style="padding: 0; padding-left: 1rem;">     <!-- Col para zona de publicaciones-->
    <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#"><i class="fas fa-pencil-alt"></i> Crear publicación</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fas fa-camera"></i> Foto/vídeo</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
            <div class="row">
                <table style="margin-left: 25px;">
                    <tr>
                        <th>
                            <img style="max-width: 50px; min-width: 50px; border-radius: 50%;" src="img/perfil.jpg" alt="">
                        </th>
                        <th>
                            <input class="pensando" type="text" style="border: none; margin-left: 15px; width: 30rem;" placeholder="¿Que estas pensando?">
                        </th>
                    </tr>
                </table>
                <!-- <img style="background-color: white; padding: 4px;max-width: 200px; min-width: 200px; position: absolute; top: 160px; left: 50px; border-radius: 50%;" src="img/perfil.jpg" alt=""> -->
                
                <!-- <i style="color: white; background-color: #4a6fc0; border-radius: 50%; padding: 5px; margin: 0 1rem; font-size: 5rem;" class="fas fa-globe-americas"></i> -->
                
            </div>
            <div class="row" style="margin: .1rem;">
                <hr style="width: 100%;text-align:left;margin-left:0">
            </div>
            <div class="row">
                <button class="pic" style="border-radius: 50px; margin-left: 1rem; background-color: #f0f0f0; border: none; padding: .3rem 20px;">
                    <i style="font-size: 20px;" class="fas fa-image"></i>
                     Foto/video
                </button>
                <button style="margin-right: 1rem; background-color: #4a6fc0; color: white; border-radius: 5px; outline: none; padding: 0 20px; font-weight: bold; font-size: .8rem;" class="ml-auto">Publicar</button>
            </div>
        </div>
      </div>
</div>`;

    genFotos();
}

function genCardFriends() {
    document.getElementById('cardFotos').innerHTML = '';
    document.getElementById('bajoPerfil').innerHTML = '';
    document.getElementById('cardInfo').innerHTML = '';
    document.getElementById('cardFriends').innerHTML = 
    `<div style="width: 100%;">
    <div class="card ">
        <div class="card-header">
            <div class="row" style="margin: .5rem;">
                <i style="margin-right: 1rem; font-size: 1.7rem; color: grey;" class="fas fa-user-friends"></i>
                <p style="margin: 0; font-weight: bolder; font-size: 1.3rem;">Amigos</p>
            </div>
        </div>
        
        <div class="row" style="padding: 1.3rem;" id="amigos">
                        
        </div>
            
      </div>
    </div>`;
    genAmigos();
}

function genCardInfo() {
    document.getElementById('cardFriends').innerHTML = '';
    document.getElementById('cardFotos').innerHTML = '';
    document.getElementById('bajoPerfil').innerHTML = '';
    for (let i = 0; i < Usuario.length; i++) {
        document.getElementById('cardInfo').innerHTML = 
    `<div style="width: 100%;">
    <div class="card ">
        <div class="card-header">
            <div class="row" style="margin: .5rem;">
                <i style="margin-right: 1rem; font-size: 1.7rem; color: grey;" class="fas fa-user"></i>
                <p style="margin: 0; font-weight: bolder; font-size: 1.3rem;">Información</p>
            </div>
        </div>

            <div class="row">
                <div class="col-4">
                    <table>
                        <tr>
                            <div style="margin: 1.5rem;">
                                <input onclick="infoGen()" class="infor" type="button" value="Información general">
                            </div>
                        </tr>
                        <tr>
                            <div style="margin: 1.5rem; color: grey;">
                                <input onclick="traFA()" class="infor" type="button" value="Trabajo y formación académica">
                            </div>
                        </tr>
                        <tr>
                            <div style="margin: 1.5rem; color: grey;">
                                <input onclick="luRes()" class="infor" type="button" value="Lugares de residencia">
                            </div>
                        </tr>
                        <tr>
                            <div style="margin: 1.5rem; color: grey;">
                                <input onclick="infoBas()" class="infor" type="button" value="información básica y de contacto">
                            </div>
                        </tr>
                    </table>
                </div>
                <div class="col-8" id="informacion" >
                <div class="row">
                <div class="col-8">
                    <table style="margin-top: 3rem;">
                        <tr>
                            <th>
                                <i style="font-size: 2rem;" class="fas fa-graduation-cap"></i>
                            </th>
                            <th>
                                <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Estudia ${Usuario[i].educacion} en <a href="">${Usuario[i].li_estudio}</a></p>
                            </th>
                        </tr>
                    </table>
            
                    <div class="row" style="margin: .1rem;">
                        <hr style="width: 100%;text-align:left;margin-left:0">
                    </div>
                    
                    <table style="margin-left: .5rem;">
                        <tr>
                            <th>
                                <i style="font-size: 2rem; margin-right: .5rem;" class="fas fa-map-marker-alt"></i>
                            </th>
                            <th>
                                <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Vive en  <a href="">${Usuario[i].ubicacion}</a></p>
                                <p style="margin-bottom: 0; font-weight: normal; margin-left: .6rem;"> De <a href="">${Usuario[i].lu_naciento}</a></p>
                            </th>
                        </tr>
                    </table>
            
                </div>
                <div class="col-4" style="padding: 2rem;">
                    <div class="row">
                        <table>
                            <tr>
                                <td>
                                    <i class="fas fa-mobile-alt"></i>
                                </td>
                                <td>
                                    <p style="margin: 0; margin-left: 1rem;">${Usuario[i].telefono}</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="row" style="margin-top: .7rem;">
                        <table>
                            <tr>
                                <td>
                                    <i class="fas fa-birthday-cake"></i>
                                </td>
                                <td>
                                    <p style="margin: 0; margin-left: 1rem;">${Usuario[i].fecha_nacimiento}</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
                </div>
              </div>
      </div>
</div>`;
        
    }
}

function genCardFotos() {
    document.getElementById('cardFriends').innerHTML = '';
    document.getElementById('bajoPerfil').innerHTML = '';
    document.getElementById('cardInfo').innerHTML = '';
    document.getElementById('cardFotos').innerHTML = 
    `<div style="width: 100%;">
    <div class="card ">
        <div class="card-header">
            <div class="row" style="margin: .5rem;">
                <i style="margin-right: 1rem; font-size: 1.7rem; color: grey;" class="far fa-images"></i>
                <p style="margin: 0; font-weight: bolder; font-size: 1.3rem;">Fotos</p>
            </div>
        </div>
        <div class="row" style="padding: .5rem;" id="fotos">
            
        </div>    
    </div>
    </div>`;
    genFotoscard();
}

function infoGen() {
    document.getElementById('informacion').innerHTML = '';
    for (let i = 0; i < Usuario.length; i++) {
        document.getElementById('informacion').innerHTML = 
    `<div class="row">
    <div class="col-8">
        <table style="margin-top: 3rem;">
            <tr>
                <th>
                    <i style="font-size: 2rem;" class="fas fa-graduation-cap"></i>
                </th>
                <th>
                    <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Estudia ${Usuario[i].educacion} en <a href="">${Usuario[i].li_estudio}</a></p>
                </th>
            </tr>
        </table>

        <div class="row" style="margin: .1rem;">
            <hr style="width: 100%;text-align:left;margin-left:0">
        </div>
        
        <table style="margin-left: .5rem;">
            <tr>
                <th>
                    <i style="font-size: 2rem; margin-right: .5rem;" class="fas fa-map-marker-alt"></i>
                </th>
                <th>
                    <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Vive en  <a href="">${Usuario[i].ubicacion}</a></p>
                    <p style="margin-bottom: 0; font-weight: normal; margin-left: .6rem;"> De <a href="">${Usuario[i].lu_naciento}</a></p>
                </th>
            </tr>
        </table>

    </div>
    <div class="col-4" style="padding: 2rem;">
        <div class="row">
            <table>
                <tr>
                    <td>
                        <i class="fas fa-mobile-alt"></i>
                    </td>
                    <td>
                        <p style="margin: 0; margin-left: 1rem;">${Usuario[i].telefono}</p>
                    </td>
                </tr>
            </table>
        </div>
        <div class="row" style="margin-top: .7rem;">
            <table>
                <tr>
                    <td>
                        <i class="fas fa-birthday-cake"></i>
                    </td>
                    <td>
                        <p style="margin: 0; margin-left: 1rem;">${Usuario[i].fecha_nacimiento}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>`;
        
    }
}

function traFA() {
    document.getElementById('informacion').innerHTML = '';
    for (let h = 0; h < Usuario.length; h++) {
        document.getElementById('informacion').innerHTML =  
    `<div>
    <p style="margin: 0; color: grey; font-weight: bold; position: absolute; top: 1.5rem;">TRABAJO</p>

    <div class="row" style="margin: .1rem; margin-top: 2rem;">
        <hr style="width: 90%;text-align:left;margin-left:0">
    </div>

    <table style="margin-top: rem; margin-bottom: 2.3rem;">
        <tr>
            <th>
                <i style="font-size: 2rem;" class="fas fa-briefcase"></i>
            </th>
            <th>
                <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Empresarial <a href="">${Usuario[h].trabajo}</a></p>
            </th>
        </tr>
    </table>

    <p style="margin: 0; color: grey; font-weight: bold; position: absolute; top: 8.4rem;">FORMACIÓN ACADÉMICA</p>

    <div class="row" style="margin: .1rem;">
        <hr style="width: 90%;text-align:left;margin-left:0">
    </div>
    
    <table style="margin-bottom: 2rem;">
        <tr>
            <th>
                <i style="font-size: 2rem;" class="fas fa-graduation-cap"></i>
            </th>
            <th>
                <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">Estudia ${Usuario[h].educacion} en <a href="">${Usuario[h].li_estudio}</a></p>
            </th>
        </tr>
    </table>

</div>`;
        
    }
}

function luRes() {
    document.getElementById('informacion').innerHTML = '';
    for (let k = 0; k < Usuario.length; k++) {
        document.getElementById('informacion').innerHTML =  
    `<div>
    <p style="margin: 0; color: grey; font-weight: bold; position: absolute; top: 1.5rem;">CIUDAD ACTUAL Y LOCALIDAD NATAL</p>

    <div class="row" style="margin: .1rem; margin-top: 2rem;">
        <hr style="width: 90%;text-align:left;margin-left:0">
    </div>

    <table style="margin-top: rem;">
        <tr>
            <th>
                <i style="font-size: 2rem;" class="fas fa-home"></i>
            </th>
            <th>
                <h1 style="font-size: 1.2rem; font-weight: bold; margin-left: .3rem;"><a style="color: #4a6fc0" href="">${Usuario[k].ubicacion}</a></h1>
                <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem; color: grey;">Ciudad actual</p>
            </th>
        </tr>
    </table>

    <div class="row" style="margin: .1rem;">
        <hr style="width: 90%;text-align:left;margin-left:0">
    </div>
    
    <table style="margin-bottom: 2rem; margin-left: .5rem;">
        <tr>
            <th>
                <i style="font-size: 2rem;" class="fas fa-map-marker-alt"></i>
            </th>
            <th>
                <h1 style="font-size: 1.2rem; font-weight: bold; margin-left: .3rem;"><a style="color: #4a6fc0" href="">${Usuario[k].lu_naciento}</a></h1>
                <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem; color: grey;">Localidad natal</p>
            </th>
        </tr>
    </table>

</div>`;
        
    }
}

function infoBas() {
    document.getElementById('informacion').innerHTML = '';
    for (let q = 0; q < Usuario.length; q++) {
        document.getElementById('informacion').innerHTML =  
    `<div>
    <p style="margin: 0; color: grey; font-weight: bold; position: absolute; top: 1.5rem;">INFORMACIÓN DE CONTACTO</p>

    <div class="row" style="margin: .1rem; margin-top: 2rem;">
        <hr style="width: 90%;text-align:left;margin-left:0">
    </div>

    <table style="margin-top: rem; margin-bottom: 3rem;">
        <tr>
            <th>
                <i class="fas fa-mobile-alt"></i>
            </th>
            <th>
                <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">${Usuario[q].telefono}</p>
            </th>
            <th>
                <i style="margin-left: 7rem;" class="fas fa-at"></i>
            </th>
            <th>
                <p style="margin-bottom: 0; font-weight: normal; margin-left: .5rem;">${Usuario[q].correo}</p>
            </th>
        </tr>
    </table>

    <p style="margin: 0; color: grey; font-weight: bold; position: absolute; top: 8.4rem;">INFORMACIÓN BÁSICA</p>

    <div class="row" style="margin: .1rem;">
        <hr style="width: 90%;text-align:left;margin-left:0">
    </div>
    
    <table style="margin-bottom: 2rem;">
        <tr>
            <th>
                <p style="margin: 0; color: grey; font-weight: normal;">Fecha de nacimiento</p>
            </th>
            <th class="lad">
                <p style="margin-bottom: 0; font-weight: normal; margin-left: 7rem;">${Usuario[q].fecha_nacimiento}</p>
            </th>
        </tr>

        <tr>
            <th>
                <p style="margin: 0; color: grey; font-weight: normal;">Sexo</p>
            </th>
            <th>
                <p style="margin-bottom: 0; font-weight: normal; margin-left: 7rem;">${Usuario[q].sexo}</p>
            </th>
        </tr>
        
        <tr>
            <th>
                <p style="margin: 0; color: grey; font-weight: normal;">Intereses</p>
            </th>
            <th>
                <p style="margin-bottom: 0; font-weight: normal; margin-left: 7rem;">${Usuario[q].intereses}</p>
            </th>
        </tr>

        <tr>
            <th>
                <p style="margin: 0; color: grey; font-weight: normal;">Idiomas</p>
            </th>
            <th>
                <p style="margin-bottom: 0; font-weight: normal; margin-left: 7rem;">${Usuario[q].idiomas}</p>
            </th>
        </tr>

        
    </table>

</div>`;
        
    }
}

function mostrarModal() {
    $('#botonModal').modal('show');
}

function quitarModal() {
    $('#botonModal').modal('hide');
}
