import { Injectable, } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../interfaces/servi.interface';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  enviarDatosInsert(formData: User) {
    return this.http.post('http://localhost:8000/insertUser', formData);
  }

  enviarDatosUpdate(id: string, formData: User) {
    if (id) {
      console.log(id);
    } else {
      console.log('??????');
    }
    
    return this.http.post(`http://localhost:8000/updateUser/${id}`, formData);
  }

  enviarDatosDel(id: string) {
    if (id) {
      console.log('pidiendo a la api', id);
      return this.http.post(`http://localhost:8000/deleteUser/${id}`, {});
    } else {
      console.log('El ID no es válido');
      console.log(id);
      // Aquí podrías lanzar un error, devolver un observable de error, o manejar la situación de otra manera según tu lógica de negocio.
      return EMPTY; // Por ejemplo, si no quieres hacer nada si el ID no es válido, puedes devolver EMPTY.
    }
  }

  // Método para recibir los datos de los usuarios con paginación
  recibirDatosUsers(): Observable<User[]> {
    

    return this.http.get<User[]>('http://localhost:8000/api/users');
  }

}
