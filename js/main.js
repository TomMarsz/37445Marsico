/**
 * Ecomerce
 */

/**Constructor de productos */
class Producto {
	constructor(id, nombre, precio) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.vendido = false;
	}
	resumen() {
		console.log(
			`El producto ${this.id}- ${this.nombre} cuesta $${this.precio}`
		);
	}
	// sumaIva() {
	// 	this.precio = this.precio * 1.21;
	// 	pagarCarrito = parseInt(
	// 		prompt(`El producto ${this.nombre} cuesta con IVA $${this.precio}`)
	// 	);
	// }
}
/** Arrays */
const productos = [];
const carrito = [];
/** Push de productos al array "productos" */
const producto1 = productos.push(new Producto("1", "Pikachu", "1300"));
const producto2 = productos.push(new Producto("2", "Charmander", "1100"));
const producto3 = productos.push(new Producto("3", "Espeon", "1000"));
const producto4 = productos.push(new Producto("4", "Eevee", "980"));
console.log(productos);

/** Entrada para mostrar catálogo*/
let entrada1 = parseInt(
	prompt("Bienvenido\n ¿Quiere ver nuestro catálogo?\n 1(SI) 2(NO)")
);

if (entrada1 == 1) {
	for (const producto of productos) {
		producto.resumen();
	}
} else if (entrada1 == 2) {
	alert("Gracias por su visita");
} else {
	alert("Debe ingresar una entrada válida");
	entrada1 = parseInt(
		prompt("Bienvenido\n ¿Quiere ver nuestro catálogo?\n 1(SI) 2(NO)")
	);
}

/** Entrada para comprar producto */
let entrada2 = parseInt(
	prompt(
		`¿Qué producto desea comprar?\n 1- ${productos[0].nombre} $${productos[0].precio}\n 2- ${productos[1].nombre} $${productos[1].precio}\n 3- ${productos[2].nombre} $${productos[2].precio}\n 4- ${productos[3].nombre} $${productos[3].precio}\n`
	)
);

if (entrada2 == 1) {
	carrito.push = productos[0];
	alert(
		`Usted va a comprar 1 ${productos[0].nombre} cuyo precio es $${productos[0].precio}`
	);
	console.log(carrito);
} else if (entrada2 == 2) {
	carrito.push = productos[1];
	alert(
		`Usted va a comprar 1 ${productos[1].nombre} cuyo precio es $${productos[1].precio}`
	);
	console.log(carrito);
} else if (entrada2 == 3) {
	carrito.push = productos[2];
	alert(
		`Usted va a comprar 1 ${productos[2].nombre} cuyo precio es $${productos[2].precio}`
	);
	console.log(carrito);
} else if (entrada2 == 4) {
	carrito.push = productos[3];
	alert(
		`Usted va a comprar 1 ${productos[3].nombre} cuyo precio es $${productos[3].precio}`
	);
	console.log(carrito);
} else {
	alert("Debe ingresar una entrada válida");
	entrada2 = parseInt(prompt("¿Qué producto desea comprar?\n "));
}
