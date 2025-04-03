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

    const body = mostrarDataCarrito(nombreProducto,cantProducto.value,color,size);
    //console.log(body);

    carritoBody.innerHTML = body
    abrirCarrito();

    }
})