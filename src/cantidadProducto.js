/**tomar el ultimo div donde esta la cantidad */

const container = document.querySelectorAll('.producto__contenedor-propiedad')[3]

let cantidad = parseInt(container.querySelector('#cantidad').value);
let tagCantidad = container.querySelector('#cantidad');
container.addEventListener('click',(e)=>{
    if(e.target.closest('button')){
        
        if(e.target.closest('button').id === "disminuir-cantidad"){
            if(cantidad > 1){
                cantidad = cantidad - 1;
                tagCantidad.value = cantidad.toString()
            }
            
        }else if(e.target.closest('button').id === "incrementar-cantidad"){
            cantidad = cantidad + 1;
            tagCantidad.value = cantidad.toString()
        }
    }
});