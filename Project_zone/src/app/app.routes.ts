import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { CarComponent } from './pages/car/car';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    },
    {
        path: 'car',
        component: CarComponent
    }
];
