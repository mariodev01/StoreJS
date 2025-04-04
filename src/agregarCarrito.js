import mostrarDataCarrito from "./mostrarDataCarrito";
import { abrirCarrito } from "./abrirCarrito";
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
const imagenActual = document.querySelector('.producto__imagen');
const notificacion = document.getElementById('notificacion');
const imagenNoti = notificacion.querySelector('img');

const linkCarrito = document.querySelector('.notificacion__link');
//console.log(notificacion);

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

    const body = mostrarDataCarrito(nombreProducto,cantProducto.value,color,size,imagenActual.src);
    //console.log(body);

    carritoBody.innerHTML = body

    notificacion.classList.add('notificacion--active');
    imagenNoti.src = imagenActual.src;

    setTimeout(() => {
        notificacion.classList.remove('notificacion--active');
        notificacion.classList.add('notificacion');
    }, 7000);
    //abrirCarrito();

    linkCarrito.addEventListener('click',()=>{
        abrirCarrito();
    })
    /**tengo que hacer la logica de cuando sea un color diferente pos que se agregue otro producto y no se sobreescriba el que ya esta,
     * agregar tambien el precio de la data, y que se calcule por la cantidad
     */
    }
})