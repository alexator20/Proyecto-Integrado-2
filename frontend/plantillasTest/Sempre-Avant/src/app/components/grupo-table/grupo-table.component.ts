import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Grupo, ApiResponseTest } from '../../interfaces/grupo.interface';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { GrupoService } from '../../services/grupo.service';
@Component({
  selector: 'app-grupo-table',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './grupo-table.component.html',
  styleUrl: './grupo-table.component.css'
})
export class GrupoTableComponent {
  public grupos: Grupo[] = [];
  public currentPage = 1;
  public pageSize = 10;
  public totalPages = 1;

  public visualizando: boolean = false;
  public updating: boolean = true;

  public id: string = '';
  public nombre!: string;
  public seccion: string = '';

  reactiveForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    seccion: new FormControl('')
  });

  constructor(private formularioService: GrupoService) { }

  ngOnInit(): void {
    this.fetchUsterst(this.currentPage, this.pageSize);
  }

  async fetchUsterst(page: number, limit: number): Promise<void> {
    try {
      const response: ApiResponseTest | undefined = await this.formularioService.recibirDatosGrupos(this.currentPage, this.pageSize).toPromise();
      if (response !== undefined) {
        console.log('Respuesta del servidor:', response);
        this.grupos = response.grupos;
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
      console.log('Updating', this.grupos[index].id);
      this.id = this.grupos[index].id!;
      this.grupoData(index);
      console.log('nombre', this.nombre);
      console.log('seccion', this.seccion);
    } else {
      this.updating = true;
      console.log('Updating', this.grupos[index]);
      this.grupoData(index);
      console.log('nombre', this.nombre);
      console.log('seccion', this.seccion);
    }
  }

  grupoData(index: number): void {
    const grupo = this.grupos[index];
    if (grupo) {
      this.reactiveForm.patchValue({
        nombre: grupo.nombre!,
        seccion: grupo.seccion!,
      });
      this.id = grupo.id!;
    }
  }

  async clickDelete(index: number){
    console.log('deleting', this.grupos[index].id);
    try {
      await this.formularioService.enviarDatosDel(this.grupos[index].id!).toPromise();
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

  onPageChange(page: number): void {
    this.currentPage = page;
    alert(this.currentPage);
    this.fetchUsterst(this.currentPage, this.pageSize);
  }

  async onSubmit() {
    const userData: Grupo = {
      id: this.reactiveForm.value.id !== undefined ? this.reactiveForm.value.id : null,
      nombre: this.reactiveForm.value.nombre !== undefined ? this.reactiveForm.value.nombre : null,
      seccion: this.reactiveForm.value.seccion !== undefined ? this.reactiveForm.value.seccion : null
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

  //fin
}
