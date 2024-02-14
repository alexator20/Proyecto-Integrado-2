import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TestComponent } from './views/test/test.component';
import { CastoresComponent } from './views/castores/castores.component';
import { ManadaComponent } from './views/manada/manada.component';
import { TropaComponent } from './views/tropa/tropa.component';
import { EscoltaComponent } from './views/escolta/escolta.component';
import { ClanComponent } from './views/clan/clan.component';
import { ScoutersComponent } from './views/scouters/scouters.component';

export const routes: Routes = [
    { path: 'home', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'test', component: TestComponent},
    { path: 'castores', component: CastoresComponent},
    { path: 'manada', component: ManadaComponent},
    { path: 'tropa', component: TropaComponent},
    { path: 'escolta', component: EscoltaComponent},
    { path: 'clan', component: ClanComponent},
    { path: 'scouters', component: ScoutersComponent},
];

