document.addEventListener('DOMContentLoaded', function() {
    // Tu código JavaScript va aquí
    console.log('¡Hola desde JavaScript!');
});



const menuToggle= document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', function (){
menu.classList.toggle('active');
menuToggle.classList.toggle('active');    
});
