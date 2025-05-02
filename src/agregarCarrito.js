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

        if(carrito.length<=0){
            carrito.push({
                Id:id,
                Nombre:nombre,
                Color:color,
                Size:size,
                Cantidad:cantidad,
                Precio:precio,
                Imagen:imagenActiva
            });
                    
        
        /**la logica es simple, si no existe ningun producto en el carrito entonces insertalo
         * si existe un producto en el carrito primero evalua a ver si ya hay uno igual,si hay uno igual
         * queda modificar el existente, sino entonces agregalo aparte
         */


        const ultimoProducto = carrito[carrito.length - 1];

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

    }else{
        const isExist = carrito.find(c=>c.Color === color);

        if(isExist === undefined){
            console.log("No existe, por lo tanto se puede insertar");
            carrito.push({
                Id:id,
                Nombre:nombre,
                Color:color,
                Size:size,
                Cantidad:cantidad,
                Precio:precio,
                Imagen:imagenActiva
            });
                    
        
        /**la logica es simple, si no existe ningun producto en el carrito entonces insertalo
         * si existe un producto en el carrito primero evalua a ver si ya hay uno igual,si hay uno igual
         * queda modificar el existente, sino entonces agregalo aparte
         */


        const ultimoProducto = carrito[carrito.length - 1];

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
        }else{
            console.log("existe, asi que hay que modificar");
            console.log(isExist);
            isExist.Cantidad = cantidad + isExist.Cantidad;
            console.log("Se modifico, verifica");

            console.log(isExist);
        }
    }
});








