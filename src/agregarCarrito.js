import data from "./Data/productos"

const id = parseInt(document.getElementById('producto').dataset.productoId);
const objeto = data.productos.find(obj=>obj.id === id);
const precioHTML = document.querySelector('.producto__precio').innerHTML =  `$${objeto.precio.toFixed(2)}`;
const botonAgregar = document.getElementById('agregar-al-carrito');

botonAgregar.addEventListener('click',()=>{
    const nombre = document.querySelector('.producto__nombre').innerHTML
    const color = document.querySelector('#propiedad-color input:checked').value
    const size = document.querySelector('#propiedad-tamaño input:checked').value
    const cantidad = parseInt(document.getElementById('cantidad').value)
    const precio = objeto.precio
    const imagenActiva = document.querySelector('.producto__imagen').getAttribute('src')


    /**Agregar funcionalidad de agregar al carrito y mostrarlo */
    
})