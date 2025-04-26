'use strict';

var data = {
    productos :[
        {
            id: 1,
            nombre: "Tennis Converse Standard.",
            descripcion: "Lorem ipsum dolor sit amet.",
            precio: 500.00,
            colores : ['Negro','Rojo','Amarillo'],
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

const carrito$1 = document.getElementById("carrito");

const carritoBody$1 = carrito$1.querySelector('.carrito__body').querySelector('.carrito__aviso-sin-productos');

/**Mario, tienes que usar mas funciones. tu tira ese codigo asi plain xD */

const abrirCarrito = ()=>{
    carrito$1.classList.add("carrito--active");
    carritoBody$1.style.display = 'block';
};

const cerrarCarrito = ()=>{
    carrito$1.classList.remove("carrito--active");
};

container.addEventListener('click',(e)=>{
    if(e.target.dataset.accion === "abrir-carrito"){
        abrirCarrito();
    }
});

carrito$1.addEventListener('click',(e)=>{
    if(e.target.closest('button').dataset.accion === "cerrar-carrito"){
        cerrarCarrito();
    }
});

function mostrarDataCarrito(nombre,cantidad,color,size,imagenActiva,precio){
    const body = `<div class="carrito__producto">
							<div class="carrito__producto-info">
								<img src="${imagenActiva}" alt="" class="carrito__thumb" />
								<div>
									<p class="carrito__producto-nombre">
										<span class="carrito__producto-cantidad">${cantidad} x </span>${nombre}
									</p>
									<p class="carrito__producto-propiedades">
										Tamaño:<span>${size}</span> Color:<span>${color}</span>
									</p>
								</div>
							</div>
							<div class="carrito__producto-contenedor-precio">
								<button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
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
								<p class="carrito__producto-precio">$${precio}</p>
							</div>
						</div>`;

    return body;
}

const id = parseInt(document.getElementById('producto').dataset.productoId);
const objeto = data.productos.find(obj=>obj.id === id);
document.querySelector('.producto__precio').innerHTML =  `$${objeto.precio.toFixed(2)}`;
const botonAgregar = document.getElementById('agregar-al-carrito');
const carritoBody = document.querySelector('.carrito__body');
const pMessage = document.querySelector('.carrito__aviso-sin-productos');
const carrito = [];


botonAgregar.addEventListener('click',()=>{
    const nombre = document.querySelector('.producto__nombre').innerHTML;
    const color = document.querySelector('#propiedad-color input:checked').value;
    const size = document.querySelector('#propiedad-tamaño input:checked').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = objeto.precio;
    const imagenActiva = document.querySelector('.producto__imagen').getAttribute('src');
    const notificacion = document.getElementById('notificacion');
    const imagenNoti = notificacion.querySelector('img');

    const linkCarrito = document.querySelector('.notificacion__link');

    carrito.push({
        Id:id,
        Nombre:nombre,
        Color:color,
        Size:size,
        Cantidad:cantidad,
        Precio:precio,
        Imagen:imagenActiva
    });
    
    const ultimoProducto = carrito[carrito.length - 1];

    const {Id,Nombre,Color,Size,Cantidad,Precio,Imagen} = ultimoProducto;
    
    const body = mostrarDataCarrito(Nombre,Cantidad,Color,Size,Imagen,Precio);
    if(carrito.length >0){
        pMessage.style.display = 'none';
    }
    
    carritoBody.innerHTML += body;


    notificacion.classList.add('notificacion--active');
    imagenNoti.src = Imagen;
    setTimeout(() => {
        notificacion.classList.remove('notificacion--active');
        notificacion.classList.add('notificacion');
    }, 7000);
    //abrirCarrito();

    linkCarrito.addEventListener('click',()=>{
        abrirCarrito();
    });

    //console.log(carrito.length);
    //console.log(carrito);

    /**Destructurar ultimoProducto y usar el metodo de mostrarDataCarrito */
    //mostrarData(ultimoProducto);
});
