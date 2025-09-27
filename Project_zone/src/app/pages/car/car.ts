import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './car.html'
})
export class CarComponent {
    brand = signal('Toyota');
    year= signal(2020);
    student = signal('cristian');

    getCarDescription(){
        return `${this.brand()} - ${this.year()}`;
    }

    changeCar(){
        this.brand.update((Value: string): string => Value = 'Kia');
        this.year.update((Value: number): number => Value = 2021);
    }
    
    resetForm(){
        this.brand.update((Value: string): string => Value = 'Renault');
        this.year.update((Value: number): number => Value = 2020);
    }

    changeYear(){
        this.year.update((Value: number): number => Value = 2025);
    }
}