
let caracteristicas: string[] = ["Alto", "Moreno", "Ojos cafes"];

interface Personainterfce {
    nombre: string;
    edad: number;
    // ? es para que sea opcional.
    caracteristicas?: string[];
}

const persona: Personainterfce = {
    nombre: 'Juan0',
    edad: 15,
    caracteristicas: caracteristicas
}

export {};