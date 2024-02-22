import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {

  constructor (public sanitizer: DomSanitizer){

  }
  public videos: { src: any; title: string; text: string }[] = [
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5vaPMjUtlmk?si=L_-dDDq1_8pb4a0F'), title: '1', text: 'relleno1' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/192666298?h=08a326b4b0'), title: '2', text: 'relleno2' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/r_FhB_47a5U?si=nldBTkABlgpk2n54'), title: '3', text: 'relleno3' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/W5nB6iyzNos?si=73Oj3Wu6gtURlFFG'), title: '4', text: 'relleno4' },
    { src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/l3ABSeht_Pw?si=wi_estiVPfKlEzk3'), title: '5', text: 'relleno5' },
    /* { src: 'aaaa', title: '6', text: 'relleno' },
    { src: 'aaaa', title: '7', text: 'relleno' },
    { src: 'aaaa', title: '8', text: 'relleno' },
    { src: 'aaaa', title: '9', text: 'relleno' },
    { src: 'aaaa', title: '10', text: 'relleno' },
    { src: 'aaaa', title: '11', text: 'relleno' },
    { src: 'aaaa', title: '12', text: 'relleno' }, */
  ];
}
