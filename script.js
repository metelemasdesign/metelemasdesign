document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      MENÚ HAMBURGUESA
    =========================================*/

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    if (hamburger && menu) {

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

        menu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                menu.classList.remove("active");
            });

        });

    }


    /*=========================================
      SLIDER DEL PORTAFOLIO
    =========================================*/

    const grupos = document.querySelectorAll(".grupo");

    const btnNext = document.getElementById("next");
    const btnPrev = document.getElementById("prev");

    let pagina = 0;

    function mostrarPagina(indice){

        grupos.forEach(grupo=>{
            grupo.classList.remove("activo");
        });

        grupos[indice].classList.add("activo");

    }

    if(btnNext && btnPrev && grupos.length){

        btnNext.addEventListener("click",()=>{

            pagina++;

            if(pagina >= grupos.length){
                pagina = 0;
            }

            mostrarPagina(pagina);

        });

        btnPrev.addEventListener("click",()=>{

            pagina--;

            if(pagina < 0){
                pagina = grupos.length - 1;
            }

            mostrarPagina(pagina);

        });

    }


    /*=========================================
      LIGHTBOX
    =========================================*/

    const lightbox = document.getElementById("lightbox");

    const imagenGrande = document.getElementById("imagenGrande");

    const cerrar = document.getElementById("cerrar");

    const siguiente = document.getElementById("siguiente");

    const anterior = document.getElementById("anterior");

    const imagenes = document.querySelectorAll(
    ".foto-portafolio, .servicio-img"
);

    let indiceActual = 0;

    function abrirLightbox(indice){

        indiceActual = indice;

        imagenGrande.src = imagenes[indiceActual].src;

        lightbox.classList.add("activo");

    }

    function cerrarLightbox(){

        lightbox.classList.remove("activo");

    }

    function siguienteImagen(){

        indiceActual++;

        if(indiceActual >= imagenes.length){
            indiceActual = 0;
        }

        imagenGrande.src = imagenes[indiceActual].src;

    }

    function anteriorImagen(){

        indiceActual--;

        if(indiceActual < 0){
            indiceActual = imagenes.length - 1;
        }

        imagenGrande.src = imagenes[indiceActual].src;

    }


    imagenes.forEach((imagen, indice)=>{

        imagen.addEventListener("click",()=>{

            abrirLightbox(indice);

        });

    });


    if(cerrar){

        cerrar.addEventListener("click", cerrarLightbox);

    }

    if(siguiente){

        siguiente.addEventListener("click", siguienteImagen);

    }

    if(anterior){

        anterior.addEventListener("click", anteriorImagen);

    }


    lightbox.addEventListener("click",(e)=>{

        if(e.target === lightbox){

            cerrarLightbox();

        }

    });


    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("activo")) return;

        if(e.key==="Escape"){

            cerrarLightbox();

        }

        if(e.key==="ArrowRight"){

            siguienteImagen();

        }

        if(e.key==="ArrowLeft"){

            anteriorImagen();

        }

    });

});