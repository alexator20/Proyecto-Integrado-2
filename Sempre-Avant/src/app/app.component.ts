import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sempre-Avant';
  public test: boolean = false;
  @Input() public lang?: boolean;
  // se necesita la logica para cambiar el boolean a verdadero

  ngOnInit(): void {
    console.log("Testeando el main, valor de test: ",this.test); 
    console.log("Testeando el main, valor de lang: ",this.lang);
    console.log("Testeando el lang...");
    setInterval(() => {
      console.log("lang:",this.lang); 
  }, 300);
  
  }

  receiveLang($event:any) {
    console.log("Recibiendo en main el lang...");
    this.lang = $event;
    console.log("Lang recibido en main: ",this.lang);
  }
  }

   