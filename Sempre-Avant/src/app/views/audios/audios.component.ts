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

  public audios: { src: any; title: string}[] = [
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/audio/LlamadaScout.mp3'), title: 'Llamada Scout'},
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/audio/LaFLorRoja.mp3'), title: 'La flor roja' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/audio/Musica.mp3'), title: 'Música' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/audio/LaUnion.mp3'), title: 'La Unión' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/audio/PorSerScout.mp3'), title: 'Por ser scout' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/audio/RunRunDeriDera.mp3'), title: 'Run Run Deri Dera' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/audio/LaFelicidad.mp3'), title: 'La Felicidad' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/audio/CartaAUnScout.mp3'), title: 'Carta a un scout' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/audio/MiClan.mp3'), title: 'Mi Clan' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/audio/Anikuni.mp3'), title: 'Anikuni' },
  ];
}
