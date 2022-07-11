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
let infoText = document.getElementById("infoText");

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
let carrito = 0;

/** Push de productos al array "productos" */
productos.push(new Producto("1", "Pikachu", 1300));
productos.push(new Producto("2", "Charmander", 1100));
productos.push(new Producto("3", "Espeon", 1000));
productos.push(new Producto("4", "Eevee", 980));

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
	infoText.innerText = "Usted agrego el producto Pikachu";
	let producto1 = JSON.parse(localStorage.getItem("1"));
	carrito += producto1.precio;
	console.log(carrito);
	let tr = document.createElement("tr");
	tr.innerHTML = `<td>${producto1.nombre}</td>
	<td>${producto1.precio}</td>`;
	tablePokemon.appendChild(tr);
	totalCarrito.innerText = `Total: $${carrito}`;
}

// Agregar a charmander al carrito
function addCharmanderCarrito() {
	infoText.innerText = "Usted agrego el producto Charmander";
	let producto2 = JSON.parse(localStorage.getItem("2"));
	carrito += producto2.precio;
	console.log(carrito);
	let tr = document.createElement("tr");
	tr.innerHTML = `<td>${producto2.nombre}</td>
	<td>${producto2.precio}</td>`;
	tablePokemon.appendChild(tr);
	totalCarrito.innerText = `Total: $${carrito}`;
}

// Agregar a espeon al carrito
function addEspeonCarrito() {
	infoText.innerText = "Usted agrego el producto Espeon";
	let producto3 = JSON.parse(localStorage.getItem("3"));
	carrito += producto3.precio;
	console.log(carrito);
	let tr = document.createElement("tr");
	tr.innerHTML = `<td>${producto3.nombre}</td>
	<td>${producto3.precio}</td>`;
	tablePokemon.appendChild(tr);
	totalCarrito.innerText = `Total: $${carrito}`;
}

// Agregar a eevee al carrito
function addEeveeCarrito() {
	infoText.innerText = "Usted agrego el producto Eevee";
	let producto4 = JSON.parse(localStorage.getItem("4"));
	carrito += producto4.precio;
	console.log(carrito);
	let tr = document.createElement("tr");
	tr.innerHTML = `<td>${producto4.nombre}</td>
	<td>${producto4.precio}</td>`;
	tablePokemon.appendChild(tr);
	totalCarrito.innerText = `Total: $${carrito}`;
}

function vaciarCarrito() {
	if (carrito !== 0) {
		Swal.fire({
			title: "Estás seguro?",
			text: "Esta acción no podrá ser revertida!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			cancelButtonText: "Cancelar",
			confirmButtonText: "Si, vaciar carrito!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Vaciado!",
					text: "El carrito fue vaciado con éxito!",
					icon: "success",
					confirmButtonColor: "#3085d6",
				});
				carrito = 0;
				tablePokemon.innerHTML = "";
				totalCarrito.innerText = "Total: $0";
			}
		});
		infoText.innerText = "Usted vacio el carrito";
	} else {
		infoText.innerText = "¡El carrito está vacío!";
		Swal.fire({
			icon: "error",
			title: "¡El carrito está vacío!",
			showConfirmButton: false,
			timer: 1500,
		});
	}
}

function comprarCarrito() {
	if (carrito <= 0) {
		infoText.innerText = "¡El carrito está vacío!";
		Swal.fire({
			icon: "error",
			title: "¡El carrito está vacío!",
			showConfirmButton: false,
			timer: 1500,
		});
	} else {
		infoText.innerText = "¡Usted compro el carrito!";
		Swal.fire({
			icon: "success",
			title: "¡Usted compro el carrito!",
			showConfirmButton: false,
			timer: 1500,
		});
		carrito = 0;
		tablePokemon.innerHTML = "";
		totalCarrito.innerText = "Total: $0";
	}
}
