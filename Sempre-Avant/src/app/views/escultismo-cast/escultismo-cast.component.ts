import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-escultismo-cast',
  standalone: true,
  imports: [],
  templateUrl: './escultismo-cast.component.html',
  styleUrl: '../escultismo/escultismo.component.css'
})
export class EscultismoCastComponent {
  public val: boolean = false;
  public passVal?: boolean;

  constructor(private languageService: LanguageService) {} // Inject the service

  ngOnInit() {
    console.log('hola');
    console.log(this.val);
    this.emit();
  }

  emit() {
    console.log("Emitting: ", this.val);
    this.languageService.setLang(this.val); // Use the service to set the language
  }
}