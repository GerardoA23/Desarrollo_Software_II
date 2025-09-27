function crearCaja<T>(argument: T): {contenido: T} {
    return {contenido: argument};
}

let caja1 = crearCaja("Hola");
let caja2 = crearCaja(3);
let caja3 = crearCaja(true);
let caja4 = crearCaja({nombre: "Pedro", edad: 30});

console.log(caja1);
console.log(caja2);
console.log(caja3);
console.log(caja4);