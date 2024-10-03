import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LanguageService } from './services/language.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Sempre-Avant';
  public test: boolean = false;
  public lang: boolean = true;

  constructor(private languageService: LanguageService) {} // Inject the service
  // se necesita la logica para cambiar el boolean a verdadero
  ngOnInit(): void {
    console.log("Testeando el main, valor de test: ", this.test);
    console.log("Testeando el main, valor de lang: ", this.lang);
    
    // Subscribe to language changes
    this.languageService.lang$.subscribe(lang => {
      this.lang = lang; // Update lang whenever it changes
      console.log("Lang recibido en main: ", this.lang);
    });
  }

  }

   