'use strict';

var data = {
    productos :[
        {
            id: '1',
            nombre: "Tennis Converse Standard.",
            descripcion: "Lorem ipsum dolor sit amet.",
            precio: 500.0,
            colores : ['negro','rojo','amarillo'],
            size: ['1,5','2','2,5','3','3,5','4'],
            fotos:
            [
                './img/thumbs/1.jpg',
                './img/thumbs/2.jpg',
                './img/thumbs/3.jpg',
                './img/thumbs/4.jpg',
                './img/tennis/amarillo.jpg',
                './img/tennis/negro.jpg',
                './img/tennis/rojo.jpg'
            ]
        }
    ]
};

const product = data.productos[0].fotos;
const principalContainer = document.getElementById('producto');
const imageContainer = document.createElement('div');
imageContainer.classList.add('producto__thumbs');

const ImagenPrincipal$1 = document.querySelector('.producto__contenedor-imagen').querySelector('img');

const tennisNegros = document.createElement('img');

tennisNegros.classList.add('producto__thumb-img');

tennisNegros.alt = "";

tennisNegros.src = "./img/thumbs/negro.jpg";

product.forEach((p,index)=>{
    if(index < 4){
        const image = document.createElement('img');
        image.classList.add('producto__thumb-img');
        image.alt = "";
        image.src = p;

        imageContainer.append(image);
        imageContainer.prepend(tennisNegros);
    }
    
});

principalContainer.prepend(imageContainer);

imageContainer.addEventListener(('click'),(e)=>{

    if(e.target.closest('img')){
        const imagen = e.target.getAttribute("src");
        ImagenPrincipal$1.src = imagen.replace('thumbs','tennis');
    }
});


/**evento click en los thumbnails, cuando yo le de click, pos tomar la propiedad src y pasarselo a la imagen principal */

/**hacer una condicion que cuando clickee los input de los colores, pos que traiga la imagen segun el color */
const colorsContainer = document.querySelector('#propiedad-color');
const ImagenPrincipal = document.querySelector('.producto__contenedor-imagen').querySelector('img');

colorsContainer.addEventListener('click',(e)=>{

    if(e.target.closest('input')){
        if(e.target.closest('input').value === 'negro'){
            ImagenPrincipal.src = "./img/tennis/negro.jpg";
            //console.log("You click black color");
        }else if(e.target.closest('input').value === 'rojo'){
            ImagenPrincipal.src = "./img/tennis/rojo.jpg";
        }else if(e.target.closest('input').value === 'amarillo'){
            ImagenPrincipal.src = "./img/tennis/amarillo.jpg";
        }
    }

});

/**tomar el ultimo div donde esta la cantidad */

const container$1 = document.querySelectorAll('.producto__contenedor-propiedad')[3];

let cantidad = parseInt(container$1.querySelector('#cantidad').value);
let tagCantidad = container$1.querySelector('#cantidad');
container$1.addEventListener('click',(e)=>{
    if(e.target.closest('button')){
        
        if(e.target.closest('button').id === "disminuir-cantidad"){
            if(cantidad > 1){
                cantidad = cantidad - 1;
                tagCantidad.value = cantidad.toString();
            }
            
        }else if(e.target.closest('button').id === "incrementar-cantidad"){
            cantidad = cantidad + 1;
            tagCantidad.value = cantidad.toString();
        }
    }
});

const container = document.querySelector('.header__menu');

const carrito = document.getElementById("carrito");

carrito.querySelector('.carrito__body').querySelector('.carrito__aviso-sin-productos');

const botonAgregar = document.getElementById('agregar-al-carrito');

const producto = document.getElementById('producto');

const totalTag = document.querySelector('.carrito__total');

const footer = document.getElementById('mas-informacion');

const tabs = footer.querySelector('.tabs');

const carritoC = [];

const formatoMoneda = new Intl.NumberFormat('es-DO', {
  style: 'currency',
  currency: 'DOP'
});


/**Mario, tienes que usar mas funciones. tu tira ese codigo asi plain xD */

const abrirCarrito = ()=>{
    carrito.classList.add("carrito--active");

    const productosAnteriores = document.querySelectorAll('.carrito__producto');

    productosAnteriores.forEach((p)=>p.remove());

        const mensaje = document.querySelector('.carrito__aviso-sin-productos');
        const hideDiv = document.querySelector('.carrito__contenedor-total');
        const showDiv = document.querySelector('.carrito__contenedor-btn-regresar');

        if (carritoC.length > 0){
            mensaje.style.display = "none";
            hideDiv.style.display = "flex";
            showDiv.style.display = "none";
        }else {
            mensaje.style.display = "block";
            hideDiv.style.display = "none";
            showDiv.style.display = "flex";
        }

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

        carrito.querySelector('.carrito__body').appendChild(contenedorProducto);

        let total = 0;

        carritoC.forEach((p)=>{
            total = total + (parseInt(p.cantidad) * producto.precio);
        });
        
        totalTag.innerHTML = `${formatoMoneda.format(total)}`;
    });
};

const cerrarCarrito = ()=>{
    carrito.classList.remove("carrito--active");
};

container.addEventListener('click',(e)=>{
    if(e.target.dataset.accion === "abrir-carrito"){
        abrirCarrito();
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
    const nombre = document.querySelector('.producto__nombre').innerHTML;
    const color = document.querySelector('#propiedad-color input:checked').value;
    const size = document.querySelector('#propiedad-tamaño input:checked').value;
    const imagenActiva = document.querySelector('.producto__imagen').getAttribute('src');

    const notificacion = document.getElementById('notificacion');

    notificacion.addEventListener('click',(e)=>{
        const boton = e.target.closest('.notificacion__link');

        if(boton && boton.dataset.accion === "abrir-carrito"){
           abrirCarrito();
        }
    });

    const imagenNoti = notificacion.querySelector('.notificacion__thumb');

    notificacion.classList.add('notificacion--active');

    imagenNoti.src= imagenActiva;

    //console.log(notificacion);

    setTimeout(()=>{
        notificacion.classList.remove('notificacion--active');
    },5000);

    const exist = carritoC.find(c=>c.id == idProducto && c.color == color && c.tamanio == size);

    if(exist === undefined){
        carritoC.push({
        id:idProducto,
        nombre:nombre,
        cantidad:cantidadProd,
        color:color,
        tamanio:size,
        imagen:imagenActiva
        });
    }else {
        exist.cantidad = parseInt(cantidadProd) + parseInt(exist.cantidad);
    }
});

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
        }    }
});

tabs.addEventListener('click',(e)=>{
    const tab = e.target.closest('button');

    if(tab){
        const tabCaracteristica = document.getElementById("caracteristicas");

        const tabResenias = document.getElementById("reseñas");

        const tabEnvio = document.getElementById("envio");

        switch (tab.dataset.tab) {
            case 'caracteristicas':
                //tab.classList.add('tabs__button--active');
                tabCaracteristica.classList.add('tab--active');
                tabResenias.classList.remove('tab--active');
                tabEnvio.classList.remove('tab--active');
                break;
            case 'reseñas':
                //tab.classList.add('tabs__button--active');

                tabCaracteristica.classList.remove('tab--active');
                tabResenias.classList.add('tab--active');
                tabEnvio.classList.remove('tab--active');
                break;
            case 'envio':
                //tab.classList.add('tabs__button--active');

                tabCaracteristica.classList.remove('tab--active');
                tabResenias.classList.remove('tab--active');
                tabEnvio.classList.add('tab--active');
                break;
        }
    }

});
