const container = document.querySelector('.header__menu');

const carrito = document.getElementById("carrito");

const carritoBody = carrito.querySelector('.carrito__body').querySelector('.carrito__aviso-sin-productos');

/**Mario, tienes que usar mas funciones. tu tira ese codigo asi plain xD */

const abrirCarrito = ()=>{
    carrito.classList.add("carrito--active");
    carritoBody.style.display = 'block';
};

const cerrarCarrito = ()=>{
    carrito.classList.remove("carrito--active");
}

container.addEventListener('click',(e)=>{
    if(e.target.dataset.accion === "abrir-carrito"){
        abrirCarrito();
    }
});

carrito.addEventListener('click',(e)=>{
    if(e.target.closest('button').dataset.accion === "cerrar-carrito"){
        cerrarCarrito();
    }
});

export {abrirCarrito};