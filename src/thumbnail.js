import data from "./Data/productos"

const product = data.productos[0].fotos;
const principalContainer = document.getElementById('producto');
const imageContainer = document.createElement('div');
imageContainer.classList.add('producto__thumbs');

const ImagenPrincipal = document.querySelector('.producto__contenedor-imagen').querySelector('img');

const tennisNegros = document.createElement('img');

tennisNegros.classList.add('producto__thumb-img');

tennisNegros.alt = "";

tennisNegros.src = "./img/thumbs/negro.jpg";

product.forEach((p,index)=>{
    if(index <4){
        const image = document.createElement('img');
        image.classList.add('producto__thumb-img');
        image.alt = ""
        image.src = p;

        imageContainer.append(image);
        imageContainer.prepend(tennisNegros)
    }
    
});

principalContainer.prepend(imageContainer)

imageContainer.addEventListener(('click'),(e)=>{

    if(e.target.closest('img')){
        const imagen = e.target.getAttribute("src");
        ImagenPrincipal.src = imagen.replace('thumbs','tennis');
    }
});


/**evento click en los thumbnails, cuando yo le de click, pos tomar la propiedad src y pasarselo a la imagen principal */