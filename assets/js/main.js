// Al realizar clic mostrará o esconderá la información de las cards
$('.c-ti').click(function(){
    $('.cards-toggle').slideToggle(400);
  });

window.addEventListener("scroll", function (){

    document.querySelector("nav").classList.toggle("bg-light", window.scrollY < 20);
    document.querySelector("nav").classList.toggle("bg-black", window.scrollY >=20);
    

document.querySelector("#btn-up").classList.toggle("d-none", window.scrollY <= 50);
    })
    
document.querySelector("#btn-up").classList.toggle("click", function (){
    window.scrollTo(0,0);
    })