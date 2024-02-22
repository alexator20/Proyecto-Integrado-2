import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-audios',
  standalone: true,
  imports: [],
  templateUrl: './audios.component.html',
  styleUrl: './audios.component.css'
})
export class AudiosComponent {

  constructor(public sanitizer: DomSanitizer) {
  }

  public videos: { src: any; title: string; text: string }[] = [
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5vaPMjUtlmk?si=L_-dDDq1_8pb4a0F'), title: 'Concurso de canciones ASIM - Madrid 2019', text: 'El Sempre Avant participa en el Festival de la Canción de la Asoc. de Scouts Independientes de Madrid. Interpreta la canción "La felicidad", con música y letra original.' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/192666298?h=08a326b4b0'), title: 'MannequinChallenge', text: 'Hecho por la tropa, la esculta y el clan en la excursión a Santo Espiritu, en noviembre de 2016.' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/r_FhB_47a5U?si=nldBTkABlgpk2n54'), title: 'Canción de marcha', text: 'En el 2011, la Esculta dedicó este video al Grupo Scout por su 40º aniversario. Fotografías de nuestra Esculta andando por las montañas de toda España durante nuestros 40 años, solo podían acompañarse de una melodía como esta canción de marcha.' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/W5nB6iyzNos?si=73Oj3Wu6gtURlFFG'), title: 'Olimpiadas Tropas - Alarcón 2013', text: 'La Tropa del Sempre Avant junto con la del Impeesa XV de Mislata celebran sus Olimpiadas Scouts en el Campamento de Verano 2013.' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/l3ABSeht_Pw?si=wi_estiVPfKlEzk3'), title: 'Fallas - 2014', text: 'Pasacalles y Cremà de la falla del Sempre Avant en el año 2014, con charanga y fallera mayor incluida.' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/53t257yIFGQ?si=sIDQkqXQJLeI89MM'), title: 'El clan en Londres 2012', text: 'El Clan de nuestro grupo se fue a Londres, la cuna del movimiento scout.' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/QnuFSc0bBAY?si=kT_1Qt7wFnwwzRcP'), title: 'What makes you beautiful - 2012', text: 'En el Festival de Navidad de 2012 se estrenó este videoclip de nuestros scouters. Canelita en rama...' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/rT5cq3FFMyM?si=pA8dpUkBzrTD3EpI'), title: 'Felicitaciones navideñas 2012', text: 'Recopilación de las felicitaciones recibidas en 2012, por parte de grupos de Chipre, Bulgaria, Irlanda, Dinamarca y la WAGGGS' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/p6OuumU0svY?si=lOukhwf06mGpaP3z'), title: 'Inicios del escultismo', text: 'Cortometraje de los scouters de tropa, para la actividad de especialidad de actor en Mayo de 2014.' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/U2CRIgl0xnM?si=32H3f5nmzY4HrnbY'), title: 'Felicitación Navidad WAGGGS 2012', text: 'La Asociación Mundial de Guias nos felicita las fiestas desde su centro scout en la India. Muchas gracias por la felicitación.' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WR1eqWCspRc?si=IWdXQ7aM0X_BNhwr'), title: '40 aniversario', text: 'Video conmemorativo del 40º aniversario de nuestro Grupo Scout' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/scw_ZdJWrqs?si=xz3ch87nKiIvB3EZ'), title: 'Cancion Arcas 2014', text: 'Las chicas de tropa ganan el concurso de canciones de 2014 con este temazo' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/71xyPXm4qTU?si=1z9ou5VphOyfur5F'), title: 'Singuinaya de la Patrulla Lobos', text: 'Un conjunto de antiguos miembros de la Patrulla Lobos se une a ellos para interpretar todos juntos el singuinaya de la patrulla.' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/F3pg3XsEFRU?si=FP2hR10RCclDQNzT'), title: 'Canción Montalbán 2011', text: 'Canción con la que la Esculta de 2011 se alzó como ganadora del Concurso de Canciones, teniendo así el honor de inaugurar el trofeo elaborado por Julian Moreno.' },
  ];
}
