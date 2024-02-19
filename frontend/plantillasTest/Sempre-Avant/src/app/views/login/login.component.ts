import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { LoginService} from '../../services/login.service';
import { tap, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  reactiveForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formularioService: LoginService) { }



  onSubmit() {
    this.formularioService.enviarDatos(this.reactiveForm.value)
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
