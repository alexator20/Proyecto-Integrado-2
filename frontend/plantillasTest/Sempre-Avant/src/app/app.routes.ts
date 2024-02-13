import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    { path: 'home', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent}
];
