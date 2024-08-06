import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { tap, catchError } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/servi.interface';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  public id: string = '';
  reactiveForm = new FormGroup({
    id: new FormControl(''),
    group_id: new FormControl(''),
    name: new FormControl(''),
    edad: new FormControl(''),
    rol: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private formularioService: UsersService) { }

  onSubmit() {
    const userData: User = {
      id: this.reactiveForm.value.id !== undefined ? this.reactiveForm.value.id : null,
      group_id: this.reactiveForm.value.group_id !== undefined ? this.reactiveForm.value.group_id : null,
      name: this.reactiveForm.value.name !== undefined ? this.reactiveForm.value.name : null,
      edad: this.reactiveForm.value.edad !== undefined ? this.reactiveForm.value.edad : null,
      rol: this.reactiveForm.value.rol !== undefined ? this.reactiveForm.value.rol : null,
      password: this.reactiveForm.value.password !== undefined ? this.reactiveForm.value.password : null
    };

    this.formularioService.enviarDatosUpdate(this.id, userData)
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
    alert('Inserción realizada correctamente')
  }
}
