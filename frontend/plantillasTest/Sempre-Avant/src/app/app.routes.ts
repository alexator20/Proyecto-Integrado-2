import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TestComponent } from './views/test/test.component';

export const routes: Routes = [
    { path: 'home', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'test', component: TestComponent}
    
];
