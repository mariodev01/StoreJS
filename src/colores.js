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


