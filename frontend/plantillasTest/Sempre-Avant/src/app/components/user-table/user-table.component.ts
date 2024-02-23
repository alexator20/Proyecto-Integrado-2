import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { ApiResponse, User } from '../../interfaces/servi.interface';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {


  public users: User[] = [];
  public currentPage = 1;
  public pageSize = 10;
  public totalPages = 1;
  public updating = false;

  reactiveForm = new FormGroup({
    grupo_perteneciente_id: new FormControl(''),
    nombre: new FormControl(''),
    edad: new FormControl(''),
    rol: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private formularioService: UsersService) { }
 
  ngOnInit(): void {
    this.fetchUsterst(this.currentPage, this.pageSize);
  }

  fetchUsterst(page: number, limit: number): void {

    this.formularioService.recibirDatosUsers(this.currentPage, this.pageSize).subscribe(
      (response: ApiResponse) => {
        if (response) {
          console.log('Respuesta del servidor:', response);
          this.users = response.users;
          this.totalPages = response.lastPage;
        } else {
          console.log('No hay respuesta');
        }
      },
      error => {
        console.error('Error al recibir los datos:', error);
      }
    );
  }

  public onClick(index: number): void {
    if (this.updating==true) {
      this.updating = false;
    } else {
      this.updating = true;
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    alert(this.currentPage);
    this.fetchUsterst(this.currentPage, this.pageSize);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.onPageChange(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.onPageChange(this.currentPage);
    }
  }

  onSubmit(): void {
  }
/*
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
   /* this.formularioService.recibirDatosUsers().subscribe(response => {
      console.log(response);
      this.users = response;
    })
  }

  */
}
