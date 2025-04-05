import mostrarDataCarrito from "./mostrarDataCarrito";
import { abrirCarrito } from "./abrirCarrito";

import data from "./Data/productos";


//console.log(mostrarDataCarrito("Mario",2,2.5,rojo));
/**Agregar producto al carrito */

/**Nombre
 * cantidad
 * tamaño
 * color
 * precio total, dos veces
 */

const productContainer = document.querySelector('.producto__contenedor-info');
const id = document.getElementById("producto").dataset.productoId;

//console.log(id);
const res = data.productos.find(obj=> obj.id == id);

const precio = document.querySelector('.producto__precio');

precio.innerHTML = `$${res.precio.toFixed(2)}`;

const nombreProducto = document.querySelector('.producto__nombre').innerHTML;
const cantProducto = document.querySelector('#cantidad');
const colores = document.getElementsByName('color');
const sizes = document.getElementsByName('tamaño');
const imagenActual = document.querySelector('.producto__imagen');
const notificacion = document.getElementById('notificacion');
const imagenNoti = notificacion.querySelector('img');

const total = document.querySelector('.carrito__total');


const linkCarrito = document.querySelector('.notificacion__link');


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
                size = s.value
            }
        });

    const body = mostrarDataCarrito(nombreProducto,cantProducto.value,color,size,imagenActual.src,res.precio.toFixed(2));
    //console.log(body);

    carritoBody.innerHTML = body

    notificacion.classList.add('notificacion--active');
    imagenNoti.src = imagenActual.src;

    setTimeout(() => {
        notificacion.classList.remove('notificacion--active');
        notificacion.classList.add('notificacion');
    }, 7000);
    //abrirCarrito();

    const totalPrecio = parseInt(cantProducto.value) * res.precio.toFixed(2);
    total.innerHTML = `$${totalPrecio.toFixed(2)}`;

    linkCarrito.addEventListener('click',()=>{
        abrirCarrito();
    })
    /**tengo que hacer la logica de cuando sea un color diferente pos que se agregue otro producto y no se sobreescriba el que ya esta,
     * agregar tambien el precio de la data, y que se calcule por la cantidad
     */
    }
})