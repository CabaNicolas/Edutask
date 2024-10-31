let menuHamburguesa = document.querySelector('#menuIcon');
let nav = document.querySelector('.headerIniciarSesion nav');
let headerIniciarSesion = document.querySelector('.headerIniciarSesion');

function cambiarMenu(){
    if (!window.matchMedia("(min-width: 1025px)").matches){
        
            if(headerIniciarSesion.style.height == '10vh'){
                nav.classList.toggle('show');
                headerIniciarSesion.style.height = '4.5vh';
            }else{
                nav.classList.toggle('show');
                headerIniciarSesion.style.height = '10vh';
            }
            
    
    }
}

menuHamburguesa.addEventListener('click', () => {
    cambiarMenu();
})

window.addEventListener('resize', () => {
    if (window.matchMedia("(min-width: 1024px)").matches){
        nav.classList.remove('show');
        headerIniciarSesion.style.height = '100vh';
    }else{
        cambiarMenu()
    }
})


