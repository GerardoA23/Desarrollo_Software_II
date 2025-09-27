import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    selector: 'app-car',
    imports: [
        UpperCasePipe
    ],
    templateUrl: './car.html'
})
export class CarComponent {
    brand = signal('Toyota');
    year= signal(2020);
    student = signal('cristian');
    getCarDescription = computed(()=> `${this.brand()} - ${this.year()}`)
    capitalizedStudent = computed(()=> `${this.student().toUpperCase()}`)

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