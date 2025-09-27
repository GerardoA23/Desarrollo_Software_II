import {type Persona, type Compra} from './Ejercicio_2_interfaces';
import {mostrarPersona, mostrarCompra} from './Ejercicio_2_funcion';

const persona: Persona = {
    nombre: 'Cristian Alvarado',
    edad: 21,
    email: 'cegar.2003@gmail.com'
};

const compra: Compra = {
    producto: 'Lego',
    precio: 60,
    cantidad: 2
}

const Persona = mostrarPersona(persona);
const Compra = mostrarCompra(compra);

console.log(Persona);
console.log(Compra);