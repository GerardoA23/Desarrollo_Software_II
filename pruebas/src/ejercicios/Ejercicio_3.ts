interface Comida {
    nombre: string;
    calorias: number;
    esVegana: boolean;
}

const pizza: Comida = {
    nombre: 'Pizza',
    calorias: 400,
    esVegana: false
};

const ensalada: Comida = {
    nombre: 'Ensalada',
    calorias: 150,
    esVegana: true
};

const hamburguesa: Comida = {
    nombre: 'Hamburguesa',
    calorias: 500,
    esVegana: false
}

class ComidaService {
    constructor(
        public comida: Comida
    ){}
    
    mostrarInfo(comida: Comida){
        const { nombre, calorias: calorias, esVegana } = comida;
        console.log("Nombre: " + nombre + ", Calorias: " + calorias + ", ¿Vegana?: " + esVegana);
    }

    modificarCalorias(comida: Comida, nuevasCalorias: number){
        const { nombre, esVegana} = comida;
        const comidaModificada: Comida = {
            nombre,
            calorias: nuevasCalorias,
            esVegana
        }
        return comidaModificada;
    }
}

class NotificadorComida {
    constructor(
        public ComidaService: ComidaService
    ){}

    notificar(comida: Comida){
        console.log("Notificando comida...");
        this.ComidaService.mostrarInfo(comida);
    }
}

const pizzaService = new ComidaService(pizza);
const notificadorpizza = new NotificadorComida(pizzaService);
notificadorpizza.notificar(pizza);

const ensaladaService = new ComidaService(ensalada);
const notificadorensalada = new NotificadorComida(ensaladaService);
notificadorensalada.notificar(ensalada);

const hamburguesaService = new ComidaService(hamburguesa);
const notificadorhamburguesa = new NotificadorComida(hamburguesaService);
notificadorhamburguesa.notificar(hamburguesa);

const newPizzaService = new ComidaService(pizzaService.modificarCalorias(pizza, 350));
const newNotificadorPizza = new NotificadorComida(newPizzaService);
newNotificadorPizza.notificar(newPizzaService.comida);