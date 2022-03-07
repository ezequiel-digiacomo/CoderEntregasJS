let bandera = true;

class Productos{
    constructor(idProducto, nombre, precio, cantidad){
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

}

const producto = [];
producto.push(new Productos(415, "Nike Air Max 90", 25999, 15));
producto.push(new Productos(416, "Nike Blazer Low '77 Vintage", 18999, 10));
producto.push(new Productos(417, "Nike Waffle One", 22499, 5));
producto.push(new Productos(418, "Nike Air Max 2090", 27199, 15));
producto.push(new Productos(419, "Nike Air Force 1", 17399, 23));
producto.push(new Productos(420, "Nike Crater Impact", 22599, 10));
producto.push(new Productos(421, "Nike Air Max 97", 39999, 3));

function verificarRespuestaInt(valor, maximoValor) {

    while (valor <= 0 || (valor > maximoValor)){
        valor = parseInt(prompt(`Error! El valor '${valor}' es incorrecto, vuelva a intentarlo.\n\nValores aceptables:\n  Min: 1 - Max: ${maximoValor}`));
    };

    return valor;
}

function menuUsuario(){
    let menu;

    do {
        
        menu = verificarRespuestaInt(parseInt(prompt("Menu\n \n  1. Ver listado de productos.\n  2. Ingresar nuevo producto.\n  3. Borrar un producto por ID.\n  4. Consultar cantidad total de modelos.\n  5. Abandonar Menu.")),5);

    } while ((menu <= 0) || (menu > 5));

    return menu;
}

function sacarIdMaximo(){

    let idMax = producto.map((e) => e.idProducto);

    let idNuevo = ((Math.max.apply(null, idMax)));

    return idNuevo;
}

do {

    let respuesta = menuUsuario();

    switch (respuesta) {

        case 1:

            let lista = ""

            producto.forEach(function(producto,index){
                let productosTexto = `${producto.idProducto}. Zapatilla: ${producto.nombre} Precio: $${producto.precio} Stock:${producto.cantidad}`;
                lista = lista.concat(` ${productosTexto}\n`);
                
            });
            alert(`Lista de Productos:\n\n${lista}`);

            break;
    
        case 2:

            let nuevoNombre = prompt("Ingrese el nombre del nuevo Producto:\n\n  - Nombre del Producto:\n  - Precio:\n  - Cantidad:");
           
            let nuevoPrecio = verificarRespuestaInt(parseInt(prompt(`Ingrese el Precio:\n\n  - Nombre del Producto: ${nuevoNombre}\n  - Precio:\n  - Cantidad:`)),100000);
            
            let nuevoStock = verificarRespuestaInt(parseInt(prompt(`Ingrese la Cantidad:\n\n  - Nombre del Producto: ${nuevoNombre}\n  - Precio: $${nuevoPrecio}\n  - Cantidad:`)),100);
            
            alert(`Se agrego el nuevo Producto con exito!!\n\n  - Nombre del Producto: ${nuevoNombre}\n  - Precio: $${nuevoPrecio}\n  - Cantidad: ${nuevoStock}\n\nPresione 'Aceptar' para volver al Menu`)

            producto.push(new Productos(sacarIdMaximo() + 1, nuevoNombre, nuevoPrecio, nuevoStock));

            break;
           
        case 3:
            
            let indexID;
            let valorABorrar = verificarRespuestaInt(parseInt(prompt("Ingrese el ID del producto a borrar:")),sacarIdMaximo());
            
            producto.forEach(function(producto,index){
                if(producto.idProducto == valorABorrar){
                    indexID = index; 
                }
            });

            producto.splice(indexID,1)

            break;
        
        case 4:

            alert(`Hay ${producto.length} productos distintos en total. Presione 'Aceptar' para volver al Menu`);
            break;

        case 5:

            bandera = false;
            alert("Proceso terminado...");
            break;
    }
    
} while (bandera);