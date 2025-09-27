import { type Persona, type Compra } from './Ejercicio_2_interfaces';

function mostrarPersona(persona: Persona): string {
    return `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Email: ${persona.email}`;
}

function mostrarCompra(compra: Compra): string {
    return `Producto: ${compra.producto}, Precio: ${compra.precio}, Cantidad: ${compra.cantidad}`;
}

export { mostrarPersona, mostrarCompra };