document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('Gabriel Romero', {delay: 900}).delete(14).type('Web Designer', {delay: 900}) 
    
    .go()
});

var hamburguer = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburguer.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})
