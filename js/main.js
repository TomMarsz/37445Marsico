/**
 * Ecomerce
 */

/**Constructor de productos */
class Producto {
	constructor(id, nombre, precio) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
	}
	resumen() {
		console.log(`El producto ${this.nombre} cuesta $${this.precio}`);
	}
}
/** Arrays */
const productos = [];
/** Push de productos al array "productos" */
const producto1 = productos.push(new Producto("1", "Pikachu", "1300"));
const producto2 = productos.push(new Producto("2", "Charmander", "1100"));
const producto3 = productos.push(new Producto("3", "Espeon", "1000"));
const producto4 = productos.push(new Producto("4", "Eevee", "980"));
for (const producto of productos) {
	producto.resumen();
}

let articulosCarrito = [];
let carritoHTML = document.getElementById("carritoHTML");

/**Agregar Pikachu al carrito */
let btnAddPikachu = document.getElementById("btnAddPikachu");
btnAddPikachu.addEventListener("click", agregarPikachu);
function agregarPikachu() {
	//sumo un objeto al array
	articulosCarrito.push(new Producto("1", "Pikachu", "1300"));
	//creo el elemento
	let addPikachuCarrito = document.createElement("div");
	//modifico su innerHTML
	addPikachuCarrito.innerHTML = `<h5>Pikachu</h5>
		<p>$1300</p>`;
	//lo agrego al div cuyo ID es carritoHTML
	carritoHTML.append(addPikachuCarrito);
}

// Los demás idem al de arriba

/**Agregar Charmander al carrito */
let btnAddCharmander = document.getElementById("btnAddCharmander");
btnAddCharmander.addEventListener("click", agregarCharmander);
function agregarCharmander() {
	articulosCarrito.push(new Producto("2", "Charmander", "1100"));
	let addCharmanderCarrito = document.createElement("div");
	addCharmanderCarrito.innerHTML = `<h5>Charmander</h5>
		<p>$1100</p>`;
	carritoHTML.append(addCharmanderCarrito);
}
/**Agregar Espeon al carrito */
let btnAddEspeon = document.getElementById("btnAddEspeon");
btnAddEspeon.addEventListener("click", agregarEspeon);
function agregarEspeon() {
	articulosCarrito.push(new Producto("3", "Espeon", "1000"));
	let addEspeonCarrito = document.createElement("div");
	addEspeonCarrito.innerHTML = `<h5>Espeon</h5>
		<p>$1000</p>`;
	carritoHTML.append(addEspeonCarrito);
}
/**Agregar Eevee al carrito */
let btnAddEevee = document.getElementById("btnAddEevee");
btnAddEevee.addEventListener("click", agregarEevee);
function agregarEevee() {
	articulosCarrito.push(new Producto("4", "Eevee", "980"));
	let addEeveeCarrito = document.createElement("div");
	addEeveeCarrito.innerHTML = `<h5>Eevee</h5>
		<p>$980</p>`;
	carritoHTML.append(addEeveeCarrito);
}
