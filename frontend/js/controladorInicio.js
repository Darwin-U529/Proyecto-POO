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

function genInfo() {
    for (let i = 0; i < Usuario.length; i++) {
        document.getElementById('place').innerHTML = 
        `<input style="width: 30rem;" type="text" class="form-control" placeholder="${Usuario[i].nombre + " " + Usuario[i].apellido}" aria-label="Recipient's username" aria-describedby="button-addon2">`;

        document.getElementById('pic_nav').innerHTML = 
        `<img style="background-color: white; max-width: 35px; min-width: 35px; border-radius: 50%;" src="${Usuario[i].img_perfil}" alt="">  `;

        document.getElementById('user_nav').innerHTML = 
        `<p style="margin: 0 px; color: white; font-size: 13px; margin-left: .5rem;">${Usuario[i].nombre + " " + Usuario[i].apellido}</p> `;

        document.getElementById('user_lnav').innerHTML = 
        `<img style="background-color: white; max-width: 37px; min-width: 35px; border-radius: 50%;" src="${Usuario[i].img_perfil}" alt=""> 
        <p style="margin-left: 1rem; padding-top: 7px;">${Usuario[i].nombre + " " + Usuario[i].apellido}</p>`;

        document.getElementById('img_crearPu').innerHTML = 
        `<img style="max-width: 50px; min-width: 50px; border-radius: 50%;" src="${Usuario[i].img_perfil}" alt="">`;

        document.getElementById('imgP_public').innerHTML = 
        `<img style="max-width: 55px; min-width: 50px; border-radius: 50%;" src="${Usuario[i].img_perfil}" alt="">`;

        document.getElementById('user_public').innerHTML = 
        `<a style="margin-left: 1rem; color: #4a6fc0;" href="">${Usuario[i].nombre + " " + Usuario[i].apellido}</a>`;

        document.getElementById('img_public').innerHTML = 
        `<img style="max-width: 45.5rem; min-width: rem;" src="img/amigos.jpg" alt="">`;
    }
}

genInfo();