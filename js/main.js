/**
 * @PokeStore: Este script contiene funcionalidades para la compra de articulos Pokemón
 *
 * @version: v1.0.0
 * @author: Tomás Mársico
 *
 * History:
 *  - v1.0.0 – Primera entrega
 *
 */

/** ELEMENTOS */
let btnAddPikachu = document.getElementById("btnAddPikachu");
btnAddPikachu.addEventListener("click", addPikachuCarrito);

let btnAddCharmander = document.getElementById("btnAddCharmander");
btnAddCharmander.addEventListener("click", addCharmanderCarrito);

let btnAddEspeon = document.getElementById("btnAddEspeon");
btnAddEspeon.addEventListener("click", addEspeonCarrito);

let btnAddEevee = document.getElementById("btnAddEevee");
btnAddEevee.addEventListener("click", addEeveeCarrito);

let btnComprar = document.getElementById("btnComprar");
btnComprar.addEventListener("click", comprarCarrito);

let btnVaciar = document.getElementById("btnVaciar");
btnVaciar.addEventListener("click", vaciarCarrito);

let tablePokemon = document.getElementById("tablePokemon");
let totalCarrito = document.getElementById("totalCarrito");

/** CONSTRUCTOR DE PRODUCTOS */
class Producto {
	constructor(id, nombre, precio) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
	}
}

/** ARRAY */
const productos = [];
let carrito = [];

/** Push de productos al array "productos" */
productos.push(new Producto("1", "Pikachu", "1300"));
productos.push(new Producto("2", "Charmander", "1100"));
productos.push(new Producto("3", "Espeon", "1000"));
productos.push(new Producto("4", "Eevee", "980"));

/** Almacenamiento del array dentro del Storage */
const guardarLocal = (clave, valor) => {
	localStorage.setItem(clave, valor);
};
for (const producto of productos) {
	guardarLocal(producto.id, JSON.stringify(producto));
}
guardarLocal();

/** LOGICA */

// Agregar a pikachu al carrito
function addPikachuCarrito() {
	let producto1 = JSON.parse(localStorage.getItem("1"));
	carrito.push(producto1);
	console.log(carrito);
	let tr = document.createElement("tr");
	tr.innerHTML = `<td>${producto1.nombre}</td>
	<td>${producto1.precio}</td>`;
	tablePokemon.appendChild(tr);
}

// Agregar a charmander al carrito
function addCharmanderCarrito() {
	let producto2 = JSON.parse(localStorage.getItem("2"));
	carrito.push(producto2);
	let tr = document.createElement("tr");
	tr.innerHTML = `<td>${producto2.nombre}</td>
	<td>${producto2.precio}</td>`;
	tablePokemon.appendChild(tr);
}

// Agregar a espeon al carrito
function addEspeonCarrito() {
	let producto3 = JSON.parse(localStorage.getItem("3"));
	carrito.push(producto3);
	let tr = document.createElement("tr");
	tr.innerHTML = `<td>${producto3.nombre}</td>
	<td>${producto3.precio}</td>`;
	tablePokemon.appendChild(tr);
}

// Agregar a eevee al carrito
function addEeveeCarrito() {
	let producto4 = JSON.parse(localStorage.getItem("4"));
	carrito.push(producto4);
	let tr = document.createElement("tr");
	tr.innerHTML = `<td>${producto4.nombre}</td>
	<td>${producto4.precio}</td>`;
	tablePokemon.appendChild(tr);
}

function vaciarCarrito() {
	tablePokemon.innerHTML = "";
	totalCarrito.innerText = "Total: ";
}

function comprarCarrito() {
	alert(`Usted compro `);
}
