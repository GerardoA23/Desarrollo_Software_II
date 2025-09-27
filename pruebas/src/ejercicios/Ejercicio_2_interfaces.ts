interface Persona {
    nombre: string;
    edad: number;
    email: string;
}

interface Compra {
    producto: string;
    precio: number;
    cantidad: number;
}

export { type Persona, type Compra };