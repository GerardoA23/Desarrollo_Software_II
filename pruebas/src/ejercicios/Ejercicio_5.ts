interface Libro {
    titulo: string;
    autor?: { nombre?: string, pais?: string}
    anioPublicacion?: number;
}

function mostrarLibro(libro: Libro){
    const titulo = libro.titulo;
    const nombreAutor = libro.autor?.nombre ?? 'Autor Desconocido';
    const paisAutor = libro.autor?.pais ?? 'País Desconocido';
    const anio = libro.anioPublicacion ?? 'Año no disponible';

    console.log(`Título: ${titulo}`);
    console.log(`Autor: ${nombreAutor}`);
    console.log(`País del Autor: ${paisAutor}`);
    console.log(`Año de Publicación: ${anio}`);
    return '';
}

const libro1: Libro = {
    titulo: 'El Principito',
    autor: { nombre: 'Antoine de Saint-Exupéry', pais: 'Francia' },
    anioPublicacion: 1943
};

const libro2: Libro = {
    titulo: '1984',
    anioPublicacion: 1949
};

const libro3: Libro = {
    titulo: 'Cien Años de Soledad',
    autor: { nombre: 'Gabriel García Márquez', pais: 'Colombia' }
};

console.log(mostrarLibro(libro1));
console.log(mostrarLibro(libro2));
console.log(mostrarLibro(libro3));