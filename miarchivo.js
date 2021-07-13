//Existen 3 maneras de definir eventos, esta es la mas utilizada
/*
function mostrar(){
    console.log("hola");
}

let boton1 = document.getElementById("id1")
boton1.addEventListener("click", mostrar)

class Producto{
    constructor(nombre, apellido,mail){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mail=mail
    }
}
const Lista = []
function crearProducto(){
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const mail = document.getElementById("mail").value

    const nuevoObjeto =new Producto(nombre,apellido,mail);
    Lista.push(nuevoObjeto)
    console.log(Lista);
}

const btnGuardar=document.getElementById
*/
//Entidades----------------------------------------------------
class Producto {
    constructor(categoria, marca, cantidad, precio){
        this.categoria = categoria,
        this.marca = marca,
        this.cantidad = cantidad,
        this.precio = precio,
        this.disponible = true
    }
    sumarIva(){
        return this.precio * 1.21;
    }
}
//Array de productos-----------------------------------------------------
const arrayProductos = []

//Funciones-----------------------------------------------------
function crearProducto(){
    const categoria = document.getElementById("categoria").value
    const marca = document.getElementById("marca").value
    const cantidad = document.getElementById("cantidad").value
    const precio = document.getElementById("precio").value

    const nuevoObjeto = new Producto(categoria, marca, cantidad, precio)
    arrayProductos.push(nuevoObjeto)
    console.log(arrayProductos);
}



function imprimirProductos(){
    const mostrarLista = document.getElementById("mostrarLista")
    arrayProductos.forEach(e => {
        mostrarLista.innerHTML += `
            <form>
            <p>${e.categoria}</p>
            <p>${e.marca}</p>
            <p>${e.cantidad}</p>
            <p>${e.precio}</p>
            </form>
            `
    });
}
const botonGuardar = document.getElementById("guardar")
botonGuardar.addEventListener("click", crearProducto)

const botonImp = document.getElementById("imp")
botonImp.addEventListener("click", imprimirProductos)
