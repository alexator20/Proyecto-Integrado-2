import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/servi.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  enviarDatosInsert(formData: User) {
    return this.http.post('http://localhost:8000/insertUser', formData);
  }
}
