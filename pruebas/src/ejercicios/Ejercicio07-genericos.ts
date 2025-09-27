/*
{
    status: boolean;
    message: string;
    statusCode: number;
    result: [usuarios]
}
*/

function verTipo<T>(argument: T): T {
    return argument;
}

interface Mamiferos {
    tipo: string;
    genero: string;
    edad: number;
}

const vaca: Mamiferos = {
    tipo: "bovino",
    genero: "hembra",
    edad: 5
}

let prueba1 = verTipo("Pedro");
let prueba2 = verTipo(true);
let prueba3 = verTipo(3);
let prueba4 = verTipo(vaca);4

console.log(prueba1.toUpperCase());
console.log(prueba2);
console.log(prueba3);

export {};