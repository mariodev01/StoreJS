import { abrirCarrito } from "./abrirCarrito";
import data from "./Data/productos";
import mostrarDataCarrito from "./mostrarDataCarrito";

const id = parseInt(document.getElementById('producto').dataset.productoId);
const objeto = data.productos.find(obj=>obj.id === id);
const precioHTML = document.querySelector('.producto__precio').innerHTML =  `$${objeto.precio.toFixed(2)}`;
const botonAgregar = document.getElementById('agregar-al-carrito');
const carritoBody = document.querySelector('.carrito__body');
const pMessage = document.querySelector('.carrito__aviso-sin-productos');
const carrito = [];
let total = 0;

const totalTag = document.querySelector('.carrito__total');

botonAgregar.addEventListener('click',()=>{
    const nombre = document.querySelector('.producto__nombre').innerHTML
    const color = document.querySelector('#propiedad-color input:checked').value
    const size = document.querySelector('#propiedad-tamaño input:checked').value
    const cantidad = parseInt(document.getElementById('cantidad').value)
    const precio = objeto.precio
    const imagenActiva = document.querySelector('.producto__imagen').getAttribute('src');
    const notificacion = document.getElementById('notificacion');
    const imagenNoti = notificacion.querySelector('img');

    const linkCarrito = document.querySelector('.notificacion__link');

    const ultimoProducto = carrito[carrito.length - 1];


    const carritoitem = carrito.find(c=>c.Color === ultimoProducto.Color && c.Size == ultimoProducto.Size);

    if(!carritoitem){
        carrito.push({
            Id:id,
            Nombre:nombre,
            Color:color,
            Size:size,
            Cantidad:cantidad,
            Precio:precio,
            Imagen:imagenActiva
        }); 

        const {Id,Nombre,Color,Size,Cantidad,Precio,Imagen} = ultimoProducto;
        total = total + (Cantidad * Precio);

        //Asignar la variable total al html tag de total

        totalTag.innerHTML = `$${total.toFixed(2)}`;

        const body = mostrarDataCarrito(Nombre,Cantidad,Color,Size,Imagen,Precio);
        if(carrito.length >0){
            pMessage.style.display = 'none';
        }
        
        carritoBody.innerHTML += body

        notificacion.classList.add('notificacion--active');
        imagenNoti.src = Imagen;
        setTimeout(() => {
            notificacion.classList.remove('notificacion--active');
            notificacion.classList.add('notificacion');
        }, 10000);
        //abrirCarrito();

        linkCarrito.addEventListener('click',()=>{
            abrirCarrito();
        });
    };
    //console.log(carritoitem);

    
    

    /**tengo que comparar dos productos, si son iguales pos que se sumen la cantidad. entonces
     * por la forma que tengo de saber que son productos iguakes es si tienen mismo nombre,color y size
     */


    /**Verificar la forma de agregar, ese carrito porque se tan agregando todo de nuevo y no uno por uno */

    
});








