import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-sant-jordi-cas',
  standalone: true,
  imports: [],
  templateUrl: './sant-jordi-cas.component.html',
  styleUrl: './sant-jordi-cas.component.css'
})
export class SantJordiCasComponent {
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