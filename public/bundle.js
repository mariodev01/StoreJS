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

const carrito = document.getElementById("carrito");

const carritoBody$1 = carrito.querySelector('.carrito__body').querySelector('.carrito__aviso-sin-productos');

/**Mario, tienes que usar mas funciones. tu tira ese codigo asi plain xD */

const abrirCarrito = ()=>{
    carrito.classList.add("carrito--active");
    carritoBody$1.style.display = 'block';
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
    if(e.target.closest('button').dataset.accion === "cerrar-carrito"){
        cerrarCarrito();
    }
});

function mostrarDataCarrito(nombre,cantidad,color,size){
    const body = `<div class="carrito__producto">
							<div class="carrito__producto-info">
								<img src="./img/tennis/1.jpg" alt="" class="carrito__thumb" />
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
								<p class="carrito__producto-precio">$500.00</p>
							</div>
						</div>`;

    return body;
}

//console.log(mostrarDataCarrito("Mario",2,2.5,rojo));
/**Agregar producto al carrito */

/**Nombre
 * cantidad
 * tamaño
 * color
 * precio total, dos veces
 */


const productContainer = document.querySelector('.producto__contenedor-info');

const nombreProducto = document.querySelector('.producto__nombre').innerHTML;
const cantProducto = document.querySelector('#cantidad');
const colores = document.getElementsByName('color');
const sizes = document.getElementsByName('tamaño');

const carritoBody = document.querySelector('.carrito__body');

productContainer.addEventListener('click',(e)=>{
    if(e.target.closest('#agregar-al-carrito')){
        let color;
        let size;
        colores.forEach((c)=>{
            if(c.checked === true){
                color = c.value;
            }
        });

        sizes.forEach((s)=>{
            if(s.checked === true){
                size = s.value;
            }
        });

    const body = mostrarDataCarrito(nombreProducto,cantProducto.value,color,size);
    //console.log(body);

    carritoBody.innerHTML = body;
    abrirCarrito();

    }
});
