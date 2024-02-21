import { Component,Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../../interfaces/servi.interface';
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
    password: new FormControl(''),
  });

  constructor(public formularioService: LoginService) { }
  public name: string = "";
  public pass: string = "";
  public user: User = { name: '', pass: '' };
  public rol: string = "";
  public usuario:[]=[];

  public onSubmit(): void {
    this.name = this.reactiveForm.value.username ?? '';
    this.pass = this.reactiveForm.value.password ?? '';
    this.user = { name:this.name, pass: this.pass };

    this.formularioService.enviarDatos(this.user).subscribe(response =>{
      console.log("respues de api", response);
     
      if(Array.isArray(response)&& response.length>0){
        ;
        this.rol=response[0].rol;
        /* console.log(this.rol); */
       

      }
      //Array.isArray(response);
      
    }
      
    )
  }
  /* onSubmit() {
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
   }*/

}
