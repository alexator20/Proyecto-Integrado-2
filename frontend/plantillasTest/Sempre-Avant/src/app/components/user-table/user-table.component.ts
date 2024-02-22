import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/servi.interface';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {

  
  public users: User[] = [];

  constructor(private formularioService: UsersService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  

  fetchUsers() {
    alert('caca');
    /*
    this.formularioService.recibirDatosUsers()
      .pipe(
        tap({
          
          next: response => {
            alert('entra');
            console.log('Respuesta del servidor:', response);
            // Puedes hacer algo con la respuesta si lo necesitas
          },
          error: error => {
            alert('no entra');
            console.error('Error al enviar los datos:', error);
          }
        })
      )
      .subscribe();
      */
     this.formularioService.recibirDatosUsers().subscribe(response => {
      console.log(response);
      this.users = response;
     })
  }
}
