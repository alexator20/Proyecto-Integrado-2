import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { ApiResponse, User, UserIdIncluded } from '../../interfaces/servi.interface';
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
  public usTest: UserIdIncluded[] = [];
  public currentPage = 1;
  public pageSize = 10;
  public totalPages = 1;

  public visualizando: boolean = false;
  public updating: boolean = true;

  public id: string = '';
  public grupo_perteneciente_id!: string;
  public nombre!: string;
  public edad: number = 0;
  public rol: string = '';
  public password: string = '';

  reactiveForm = new FormGroup({
    id: new FormControl(''),
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

  async fetchUsterst(page: number, limit: number): Promise<void> {
    try {
      const response: ApiResponse | undefined = await this.formularioService.recibirDatosUsers(this.currentPage, this.pageSize).toPromise();
      if (response !== undefined) {
        console.log('Respuesta del servidor:', response);
        this.users = response.users;
        this.totalPages = response.lastPage;
      } else {
        console.log('No hay respuesta');
      }
    } catch (error) {
      console.error('Error al recibir los datos:', error);
    }
  }

  public onClick(index: number): void {
    if (this.updating == true) {



      this.updating = false;
      console.log('Updating', this.users[index].id);
      this.id = this.users[index].id!;
      this.userData(index);
      console.log('gr ID', this.grupo_perteneciente_id);
      console.log('nombre', this.nombre);
      console.log('gr ID', this.grupo_perteneciente_id);
      console.log('gr ID', this.grupo_perteneciente_id);
      console.log('gr ID', this.grupo_perteneciente_id);

    } else {
      this.updating = true;
      console.log('Updating', this.users[index]);
      this.userData(index);
      console.log('gr ID', this.grupo_perteneciente_id);
      console.log('nombre', this.nombre);
      console.log('gr ID', this.grupo_perteneciente_id);
      console.log('gr ID', this.grupo_perteneciente_id);
      console.log('gr ID', this.grupo_perteneciente_id);
    }
  }

  userData(index: number): void {
    const user = this.users[index];
    if (user) {
      this.reactiveForm.patchValue({
        grupo_perteneciente_id: user.grupo_perteneciente_id!,
        nombre: user.nombre!,
        edad: user.edad!,
        rol: user.rol!,
        password: user.password!
      });
      this.id = this.usTest[index].id!;
    }
  }

 async clickDelete(index: number){
    console.log('deleting', this.users[index].id);
    try {
      await this.formularioService.enviarDatosDel(this.users[index].id!).toPromise();
      console.log('Usuario eliminado correctamente.');
      alert('Usuario eliminado correctamente. Los cambios pueden tardar en verse relfejados');
      // Actualizar la tabla después de eliminar el usuario
      await this.fetchUsterst(this.currentPage, this.pageSize);

      // Cambiar el estado de 'updating'
      //this.updating = !this.updating;
  } catch (error) {
      console.error('Error al eliminar el usuario:', error);
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

  async onSubmit() {
    const userData: User = {
      id: this.reactiveForm.value.id !== undefined ? this.reactiveForm.value.id : null,
      grupo_perteneciente_id: this.reactiveForm.value.grupo_perteneciente_id !== undefined ? this.reactiveForm.value.grupo_perteneciente_id : null,
      nombre: this.reactiveForm.value.nombre !== undefined ? this.reactiveForm.value.nombre : null,
      edad: this.reactiveForm.value.edad !== undefined ? this.reactiveForm.value.edad : null,
      rol: this.reactiveForm.value.rol !== undefined ? this.reactiveForm.value.rol : null,
      password: this.reactiveForm.value.password !== undefined ? this.reactiveForm.value.password : null
    };

    console.log(this.id);
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
      .subscribe()
    alert('Inserción realizada correctamente. Los cambios pueden tardar en verse')
    await this.fetchUsterst(this.currentPage, this.pageSize);

    if (this.updating == true) {
      this.updating = false;
    } else {
      this.updating = true;
    }
   

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
