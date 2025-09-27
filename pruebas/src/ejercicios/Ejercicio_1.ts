// Ejercicio implementar la interfaz.
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    roles: string[];
    direccion?: {
        ciudad: string;
        pais: string;
    };
    saludar: () => string;
    actualizarEmail: (nuevoEmail: string) => void;
}

const usuario1: Usuario = {
    id: 1,
    nombre: "Ana Pérez",
    email: "ana@example.com",
    activo: true,
    roles: ["admin", "editor"],
    direccion: {
        ciudad: "Bogotá",
        pais: "Colombia",
    },
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    },
    actualizarEmail(nuevoEmail: string) {
        this.email = nuevoEmail;
    }
};

console.log(usuario1);
console.log(usuario1.saludar());
usuario1.actualizarEmail("hola@example.com");
console.log(usuario1.email);

export {};