import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent {

  reactiveForm = new FormGroup({
    routes: new FormControl(''),
  });

  public rutas: { src: any; title: string }[] = [
    { src: '../../../assets/grupo1/2014_fallas', title: 'grupo1' },
    { src: 'ruta', title: 'grupo2' },
    { src: 'ruta', title: 'grupo3' },
    { src: 'ruta', title: 'grupo4' },
  ]

  public onFolder(index: number) {
    //console.log(this.reactiveForm.value.routes[index])
  }

  public onSubmit(): void {
    console.log('form: ', this.reactiveForm.value.routes);
  }
}
