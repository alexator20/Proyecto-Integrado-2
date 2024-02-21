import { Component,Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { tap, catchError } from 'rxjs/operators';
import { Login } from '../../interfaces/servi.interface';
import { HeaderComponent } from '../../components/header/header.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  reactiveForm = new FormGroup({
    nombre: new FormControl(''),
    password: new FormControl('')
  });

  constructor(public formularioService: LoginService) { }

  onSubmit() {
    const userData: Login = {
      nombre: this.reactiveForm.value.nombre !== undefined ? this.reactiveForm.value.nombre : null,
      password: this.reactiveForm.value.password !== undefined ? this.reactiveForm.value.password : null
    };
  
    this.formularioService.enviarDatos(userData)
      .pipe(
        tap({
          next: response => {
            console.log('Respuesta del servidor:', response);
            // Puedes hacer algo con la respuesta si lo necesitas
          },
          error: error => {
            console.error('Error al enviar los datos:', error);
          }
        })
      )
      .subscribe();
  }


}
