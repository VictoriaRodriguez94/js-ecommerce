// Variables
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
const abrirCarritoBtn = document.querySelector('#abrirCarrito');
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function abrirCarrito(){
     if ($("#carrito").hasClass("hidden")) {
          $("#carrito").removeClass("hidden");
          $("#carrito").addClass("show");
     }
     else if ($("#carrito").hasClass("show")) {
          $("#carrito").removeClass("show");
          $("#carrito").addClass("hidden");
     }
}


function cargarEventListeners() {

     abrirCarritoBtn.addEventListener('click',abrirCarrito);

     // Dispara cuando se presiona "Agregar Producto"
     listaProductos.addEventListener('click', agregarProducto);

     // Cuando se elimina un producto del carrito
     carrito.addEventListener('click', eliminarProducto);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);


// Falta procesar carrito 


     document.addEventListener('DOMContentLoaded', () => {
          articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []  ;
          // console.log(articulosCarrito);
          carritoHTML();
     });
}


// Función que añade el producto al carrito
function agregarProducto(e) {
     e.preventDefault();
     if(e.target.classList.contains('agregar-carrito')) {
          const producto = e.target.parentElement.parentElement;

          // Envio el producto seleccionado para tomar info
          leerDatosProducto(producto);
     }
}

// Lee los datos del producto
function leerDatosProducto(producto) {
     const infoProducto = {
          imagen: producto.querySelector('img').src,
          titulo: producto.querySelector('h4').textContent,
          precio: producto.querySelector('.precio').textContent,
          id: producto.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( producto => producto.id === infoProducto.id ) ) { 
          const productos = articulosCarrito.map( producto => {
               if( producto.id === infoProducto.id ) {
                    let cantidad = parseInt(producto.cantidad);
                    cantidad++
                    producto.cantidad =  cantidad;
                    return producto;
               } else {
                    return producto;
               }
          })
          articulosCarrito = [...productos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoProducto];
     }


     carritoHTML();
}

// Elimina el producto del carrito en el DOM
function eliminarProducto(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-producto') ) {
          const producto = e.target.parentElement.parentElement;
          const productoId = producto.querySelector('a').getAttribute('data-id');
          
          articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

          carritoHTML();
     }
}


// Muestra el producto seleccionado en el Carrito
function carritoHTML() {

     $("#lista-carrito tbody").html("")
     articulosCarrito.forEach(producto => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${producto.imagen}" width=100>
               </td>
               <td>${producto.titulo}</td>
               <td>${producto.precio}</td>
               <td>${producto.cantidad} </td>
               <td>
                    <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

    
     sincronizarStorage();

}


function sincronizarStorage() {
     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
     console.log(articulosCarrito);
}

// Elimina los producto del carrito en el DOM
function vaciarCarrito() {
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
     articulosCarrito = [];
     localStorage.clear();
}
