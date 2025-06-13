const container = document.querySelector('.header__menu');

const carrito = document.getElementById("carrito");

const carritoBody = carrito.querySelector('.carrito__body').querySelector('.carrito__aviso-sin-productos');

const botonAgregar = document.getElementById('agregar-al-carrito');

const producto = document.getElementById('producto');

const carritoC = [];

import data from "./Data/productos";

const formatoMoneda = new Intl.NumberFormat('es-DO', {
  style: 'currency',
  currency: 'DOP'
});


/**Mario, tienes que usar mas funciones. tu tira ese codigo asi plain xD */

const abrirCarrito = ()=>{
    carrito.classList.add("carrito--active");

    const productosAnteriores = document.querySelectorAll('.carrito__producto');

    productosAnteriores.forEach((p)=>p.remove());

    carritoC.forEach((c)=>{

        const producto = data.productos.find((obj=>obj.id == c.id));

        const precioPorCantidad = producto.precio * parseInt(c.cantidad);

        const contenedorProducto = document.createElement('div');

        const plantillaProducto = `							
            <div class="carrito__producto-info">
                <img src="${c.imagen}" alt="" class="carrito__thumb" />
                <div>
                    <p class="carrito__producto-nombre">
                        <span class="carrito__producto-cantidad">${c.cantidad} x </span>${c.nombre}
                    </p>
                    <p class="carrito__producto-propiedades">
                        Tamaño:<span>${c.tamanio}</span> Color:<span>${c.color}</span>
                    </p>
                </div>
            </div>
            <div class="carrito__producto-contenedor-precio">
                <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito" data-id=${c.id}
                data-size=${c.tamanio} data-color=${c.color}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                        />
                    </svg>
                </button>
                <p class="carrito__producto-precio">${formatoMoneda.format(precioPorCantidad)}</p>
            </div>
        `;

        contenedorProducto.classList.add('carrito__producto');

        contenedorProducto.innerHTML = plantillaProducto;

        
        carrito.querySelector('.carrito__body').appendChild(contenedorProducto)

    })
};

const cerrarCarrito = ()=>{
    carrito.classList.remove("carrito--active");
}

container.addEventListener('click',(e)=>{
    if(e.target.dataset.accion === "abrir-carrito"){
        abrirCarrito();
        const mensaje = document.querySelector('.carrito__aviso-sin-productos');
        const hideDiv = document.querySelector('.carrito__contenedor-total');
        const showDiv = document.querySelector('.carrito__contenedor-btn-regresar');
        //console.log(carritoC);

        if (carritoC.length > 0){
            mensaje.style.display = "none";
            hideDiv.style.display = "flex";
            showDiv.style.display = "none";
        }else{
            mensaje.style.display = "block";
            hideDiv.style.display = "none";
            showDiv.style.display = "flex";
        }

    }
});

carrito.addEventListener('click',(e)=>{
    const closestDiv = e.target.closest('div');
    const closestButton = e.target.closest('button');

    if((closestDiv && closestDiv.dataset.accion === "cerrar-carrito") || (closestButton && closestButton.dataset.accion === "cerrar-carrito") ){
        cerrarCarrito();
    }
});

botonAgregar.addEventListener('click',()=>{
    const idProducto = producto.dataset.productoId;
    const cantidadProd = producto.querySelector('#cantidad').value;
    const nombre = document.querySelector('.producto__nombre').innerHTML
    const color = document.querySelector('#propiedad-color input:checked').value
    const size = document.querySelector('#propiedad-tamaño input:checked').value
    const imagenActiva = document.querySelector('.producto__imagen').getAttribute('src');

    const exist = carritoC.find(c=>c.id == idProducto && c.color == color && c.tamanio == size)

    if(exist === undefined){
        carritoC.push({
        id:idProducto,
        nombre:nombre,
        cantidad:cantidadProd,
        color:color,
        tamanio:size,
        imagen:imagenActiva
        });
    }else{
        exist.cantidad = parseInt(cantidadProd) + parseInt(exist.cantidad);
    }
})

carrito.addEventListener('click',(e)=>{
    const eliminarItem = e.target.closest('button');

    if(eliminarItem && eliminarItem.dataset.accion === "eliminar-item-carrito"){

        const id = eliminarItem.dataset.id;
        const size = eliminarItem.dataset.size;
        const color = eliminarItem.dataset.color;

        const exists = carritoC.find(obj=>obj.tamanio == size && obj.color == color && obj.id == id);

        if(exists !== undefined){
            const index = carritoC.indexOf(exists);
            carritoC.splice(index,1);
            abrirCarrito();
        }else{
            console.log("No existe elemento para borrar");
        }
        //const datos = e.target.closest('p .carrito__producto-propiedades')

        //console.log(datos);
    }
});