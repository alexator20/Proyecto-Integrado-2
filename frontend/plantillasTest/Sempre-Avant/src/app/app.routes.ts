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
import { HomeCastComponent } from './views/home-cast/home-cast.component';
import { CastoresCastComponent } from './views/castores-cast/castores-cast.component';
import { ManadaCastComponent } from './views/manada-cast/manada-cast.component';
import { TropaCastComponent } from './views/tropa-cast/tropa-cast.component';
import { EscultaCastComponent } from './views/esculta-cast/esculta-cast.component';
import { ClanCastComponent } from './views/clan-cast/clan-cast.component';
import { ScoutersCastComponent } from './views/scouters-cast/scouters-cast.component';
import { BadenpowellCastComponent } from './views/badenpowell-cast/badenpowell-cast.component';

export const routes: Routes = [
    { path: 'home', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'home-cast', component: HomeCastComponent},
    { path: 'test', component: TestComponent},
    { path: 'castores', component: CastoresComponent},
    { path: 'castores-cast', component: CastoresCastComponent},
    { path: 'manada', component: ManadaComponent},
    { path: 'manada-cast', component: ManadaCastComponent},
    { path: 'tropa', component: TropaComponent},
    { path: 'tropa-cast', component: TropaCastComponent},
    { path: 'esculta', component: EscultaComponent},
    { path: 'esculta-cast', component: EscultaCastComponent},
    { path: 'clan', component: ClanComponent},
    { path: 'clan-cast', component: ClanCastComponent},
    { path: 'scouters', component: ScoutersComponent},
    { path: 'badenpowell', component: BadenPowellComponent},
    { path: 'cronologia', component: CronologiaComponent},
    { path: 'scouters-cast', component: ScoutersCastComponent},
    { path: 'badenpowell', component: BadenPowellComponent},
    { path: 'badenpowell-cast', component: BadenpowellCastComponent}
];

