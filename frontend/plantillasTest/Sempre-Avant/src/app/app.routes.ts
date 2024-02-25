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
import { LoginComponent } from './views/login/login.component';
import { SantJordiComponent } from './views/sant-jordi/sant-jordi.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { ContactoCastComponent } from './views/contacto-cast/contacto-cast.component';
import { BackofficeComponent } from './views/backoffice/backoffice.component';
import { SantJordiCasComponent } from './views/sant-jordi-cas/sant-jordi-cas.component';
import { FotosComponent } from './views/fotos/fotos.component';
import { OrganizacionComponent } from './views/organizacion/organizacion.component';
import { VideosComponent } from './views/videos/videos.component';
import { AudiosComponent } from './views/audios/audios.component';
import { PublicacionsComponent } from './views/publicacions/publicacions.component';
import { CalendarioComponent } from './views/calendario/calendario.component';
import { adminGuard } from './admin.guard';
import { HeaderCastComponent } from './components/header-cast/header-cast.component';
import { NostrahistoriaComponent } from './views/nostrahistoria/nostrahistoria.component';
import { EscultismoComponent } from './views/escultismo/escultismo.component';
import {EscultismoCastComponent} from './views/escultismo-cast/escultismo-cast.component';


export const routes: Routes = [
    { path: 'home', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home-cast', component: HomeCastComponent },
    { path: 'test', component: TestComponent },
    { path: 'castores', component: CastoresComponent },
    { path: 'castores-cast', component: CastoresCastComponent },
    { path: 'manada', component: ManadaComponent },
    { path: 'manada-cast', component: ManadaCastComponent },
    { path: 'tropa', component: TropaComponent },
    { path: 'tropa-cast', component: TropaCastComponent },
    { path: 'esculta', component: EscultaComponent },
    { path: 'esculta-cast', component: EscultaCastComponent },
    { path: 'clan', component: ClanComponent },
    { path: 'clan-cast', component: ClanCastComponent },
    { path: 'scouters', component: ScoutersComponent },
    { path: 'cronologia', component: CronologiaComponent },
    { path: 'scouters-cast', component: ScoutersCastComponent },
    { path: 'badenpowell', component: BadenPowellComponent },
    { path: 'badenpowell-cast', component: BadenpowellCastComponent },
    { path: 'login', component: LoginComponent },
    { path: 'santjordi', component: SantJordiComponent },
    { path: 'santjordi-cast', component: SantJordiCasComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'contacto-cast', component: ContactoCastComponent },
    { path: 'admin', component: BackofficeComponent, canActivate: [adminGuard] },
    { path: 'fotos', component: FotosComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'audios', component: AudiosComponent },
    { path: 'organizacion', component: OrganizacionComponent },
    { path: 'publicacions', component: PublicacionsComponent},
    { path: 'calendario', component: CalendarioComponent },
    { path: 'header-cast', component: HeaderCastComponent},
    {path: 'nostrahistoria', component: NostrahistoriaComponent},
    {path: 'escultismo', component: EscultismoComponent},
    {path: 'escultismo-cast', component: EscultismoCastComponent}

];

