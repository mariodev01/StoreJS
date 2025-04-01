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
        })
    }
})