import { Injectable, } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse, User } from '../interfaces/servi.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  enviarDatosInsert(formData: User) {
    return this.http.post('http://localhost:8000/insertUser', formData);
  }

  // Método para recibir los datos de los usuarios con paginación
  recibirDatosUsers(page: number, pageSize: number): Observable<ApiResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<ApiResponse>('http://localhost:8000/viewUsers', { params });
  }

}
