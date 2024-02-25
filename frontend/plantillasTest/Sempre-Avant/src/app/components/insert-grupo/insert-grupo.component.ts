import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormGroup  } from '@angular/forms';
import { GrupoService } from '../../services/grupo.service';
import { tap, catchError } from 'rxjs/operators';
import { Grupo } from '../../interfaces/grupo.interface';


@Component({
  selector: 'app-insert-grupo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './insert-grupo.component.html',
  styleUrl: './insert-grupo.component.css'
})
export class InsertGrupoComponent {

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



  async onSubmit() {
    const userData: Grupo = {
      id: this.reactiveForm.value.id !== undefined ? this.reactiveForm.value.id : null,
      nombre: this.reactiveForm.value.nombre !== undefined ? this.reactiveForm.value.nombre : null,
      seccion: this.reactiveForm.value.seccion !== undefined ? this.reactiveForm.value.seccion : null
    };

    console.log(this.id);
    this.formularioService.enviarDatosInsert(userData)
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

  }

}
