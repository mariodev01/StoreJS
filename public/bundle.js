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

const carritoBody = carrito.querySelector('.carrito__body').querySelector('.carrito__aviso-sin-productos');

/**Mario, tienes que usar mas funciones. tu tira ese codigo asi plain xD */

const abrirCarrito = ()=>{
    carrito.classList.add("carrito--active");
    carritoBody.style.display = 'block';
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

/**Agregar producto al carrito */

/**Nombre
 * cantidad
 * tamaño
 * color
 * precio total, dos veces
 */


const productContainer = document.querySelector('.producto__contenedor-info');

const nombreProducto = document.querySelector('.producto__nombre').innerHTML;
const cantProducto = parseInt(document.querySelector('#cantidad').value);
const colores = document.getElementsByName('color');
const sizes = document.getElementsByName('tamaño');


productContainer.addEventListener('click',(e)=>{
    if(e.target.closest('#agregar-al-carrito')){
        console.log(nombreProducto);
        console.log(cantProducto);
        colores.forEach((color)=>{
            if(color.checked === true){
                console.log(color.value);
            }
        });

        sizes.forEach((size)=>{
            if(size.checked === true){
                console.log(size.value);
            }
        });
    }
});
