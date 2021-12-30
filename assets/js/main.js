// Al realizar clic mostrará o esconderá la información de las cards
$('.c-ti').click(function(){
    $('.cards-toggle').slideToggle(400);
  });

// Escuchador para el scroll de la ventana
window.addEventListener("scroll", function (){

// clases del nav
    document.querySelector("nav").classList.toggle("bg-info", window.scrollY < 20);
    document.querySelector("nav").classList.toggle("bg-light", window.scrollY >=20);
 
document.querySelector("#btn-up").classList.toggle("d-none", window.scrollY <= 50);
    })

// boton to top
document.querySelector("#btn-up").addEventListener("click", function (){
    window.scrollTo(0,0);
    })
    
