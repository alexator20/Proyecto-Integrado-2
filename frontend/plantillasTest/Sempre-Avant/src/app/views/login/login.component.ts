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
    username: new FormControl(''),
    password: new FormControl('')
  });
  public rol:string="";
  constructor(public formularioService: LoginService) { }

  onSubmit() {
    const userData: Login = {
      nombre: this.reactiveForm.value.username !== undefined ? this.reactiveForm.value.username : null,
      password: this.reactiveForm.value.password !== undefined ? this.reactiveForm.value.password : null
    };
  
    
    this.formularioService.enviarDatos(userData)
      .pipe(
        tap({
          next: response => {
            console.log('Respuesta del servidor:', response);
            // Puedes hacer algo con la respuesta si lo necesitas
           if(Array.isArray(response) && response.length>0){
            this.rol=response[0].rol;
            console.log(this.rol);
            localStorage.setItem('rol',this.rol);
            window.location.reload();
           }
          },
          error: error => {
            console.error('Error al enviar los datos:', error);
          }
        })
      )
      .subscribe();
      
     /*
      this.formularioService.enviarDatos(userData).subscribe(response => {
        console.log(response);
      });
*/
  }


}
