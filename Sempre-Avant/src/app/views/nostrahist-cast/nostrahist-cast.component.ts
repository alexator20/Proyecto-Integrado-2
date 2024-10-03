import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-nostrahist-cast',
  standalone: true,
  imports: [],
  templateUrl: './nostrahist-cast.component.html',
  styleUrls: ['./nostrahist-cast.component.css']
})
export class NostrahistCastComponent implements OnInit {
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