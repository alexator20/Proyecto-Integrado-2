import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TestComponent } from './views/test/test.component';
import { CastoresComponent } from './views/castores/castores.component';
import { ManadaComponent } from './views/manada/manada.component';
import { TropaComponent } from './views/tropa/tropa.component';
import { EscultaComponent } from './views/esculta/esculta.component';
import { ClanComponent } from './views/clan/clan.component';
import { ScoutersComponent } from './views/scouters/scouters.component';
import { BadenPowellComponent } from './views/baden-powell/baden-powell.component';
import { CronologiaComponent } from './views/cronologia/cronologia.component';

export const routes: Routes = [
    { path: 'home', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'test', component: TestComponent},
    { path: 'castores', component: CastoresComponent},
    { path: 'manada', component: ManadaComponent},
    { path: 'tropa', component: TropaComponent},
    { path: 'esculta', component: EscultaComponent},
    { path: 'clan', component: ClanComponent},
    { path: 'scouters', component: ScoutersComponent},
    { path: 'badenpowell', component: BadenPowellComponent},
    { path: 'cronologia', component: CronologiaComponent}
];

