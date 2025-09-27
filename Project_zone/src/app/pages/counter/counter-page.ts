import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.html',
    styleUrl: './counter-page.css',
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CounterPageComponent {
    counter: number = 0;
    counterSignal = signal(0);

    constructor() {
        setInterval(() => {
            // this.counter += 1;
            this.counterSignal.update((currentValue: number): number => currentValue + 1);
            console.log("Se actualizo");
        }, 1000);
    }

    add(value: number) {
        this.counter += value;
        this.counterSignal.update((currentValue: number): number => currentValue + value);
    }
    sub(value:number){
        this.counter -= value;
        this.counterSignal.update((currentValue: number): number => currentValue - value);
    }
    reset(){
        this.counter = 0;
        this.counterSignal.set(0);
    }
}