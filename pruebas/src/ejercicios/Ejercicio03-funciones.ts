
function sumar(a: number, b: number): number {
    return 2;
}

const result = sumar(3,2);
console.log({result});

const sumar2 = (n1: number, n2: number): number => {
    return n1 + n2;
}

const result2 = sumar2(3,4);
console.log({result2});

// Los opcionales se ponen al final.
function multiplicar(primerNumero: number, base: number = 4, segundoNumero?: number): number {
    return primerNumero * base;
}

////////////////////////////////////////////////////////////////////////

interface PersonajeInterface {
    nombre: string;
    vida: number;
    mostrarDetalle: () => void;
}

const porcentajeVida = (personaje: PersonajeInterface, vida: number) => {
    personaje.vida += vida;
}

const persona1: PersonajeInterface = {
    nombre: 'Juan',
    vida: 20,
    mostrarDetalle() {
        console.log(`Nombre -> ${this.nombre}, Vida -> ${this.vida}`);
    }
}

console.log(persona1);
porcentajeVida(persona1, 50);
console.log(persona1);

persona1.mostrarDetalle();

const res: number = multiplicar(7);
console.log({res});

export {};