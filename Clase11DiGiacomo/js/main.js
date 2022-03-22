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

function sacarIdMaximo(){

    let idMax = producto.map((e) => e.idProducto);

    let idNuevo = ((Math.max.apply(null, idMax)));

    return idNuevo;
}

/*-------------------------------------------------------------------------------------------------------*/
//Eventos
/*-------------------------------------------------------------------------------------------------------*/

const listProduct = document.getElementById(`listProduct`);

listProduct.onclick = () => {

    if (document.getElementById(`idListNum0`)) {
        console.log("hola");

        producto.forEach(function(producto,index){
            let lista = document.getElementById(`idListNum${index}`);
            lista.remove();
        });

    }else{

        producto.forEach(function(producto,index){
            
            const newProduct = document.createElement(`p`);

            newProduct.setAttribute(`id`,`idListNum${index}`);

            newProduct.innerText = `Zapatilla: ${producto.nombre}\nPrecio: $${producto.precio}\nStock:${producto.cantidad}`;

            const listaProducto = document.getElementById(`listaProductos`);

            listaProducto.appendChild(newProduct);
        });
    }
}

const newProduct = document.getElementById(`newProduct`);

newProduct.onclick = () => {
    
    let nuevoNombre = prompt("Ingrese el nombre del nuevo Producto:\n\n  - Nombre del Producto:\n  - Precio:\n  - Cantidad:");
           
    let nuevoPrecio = verificarRespuestaInt(parseInt(prompt(`Ingrese el Precio:\n\n  - Nombre del Producto: ${nuevoNombre}\n  - Precio:\n  - Cantidad:`)),100000);
    
    let nuevoStock = verificarRespuestaInt(parseInt(prompt(`Ingrese la Cantidad:\n\n  - Nombre del Producto: ${nuevoNombre}\n  - Precio: $${nuevoPrecio}\n  - Cantidad:`)),100);
    
    alert(`Se agrego el nuevo Producto con exito!!\n\n  - Nombre del Producto: ${nuevoNombre}\n  - Precio: $${nuevoPrecio}\n  - Cantidad: ${nuevoStock}\n\nPresione 'Aceptar' para volver al Menu`)
    
    producto.push(new Productos(sacarIdMaximo() + 1, nuevoNombre, nuevoPrecio, nuevoStock));
    
}

stock.onclick = () => {

    if (document.getElementById(`stockSum`)) {

        let textStock = document.getElementById(`stockSum`);
        textStock.remove();

    } else {

        const newStock = document.createElement(`p`); 

        newStock.setAttribute(`id`,`stockSum`);
    
        newStock.innerText = `Hay ${producto.length} productos distintos en total.`;
    
        const textGame = document.getElementById(`listaProductos`);
    
        textGame.appendChild(newStock);

    }
}

