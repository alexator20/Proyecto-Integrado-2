import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, LoginResponse } from '../interfaces/servi.interface';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class LoginService {
  constructor(public http: HttpClient) { }

  enviarDatos(formData: Login) {
    console.log('Enviando datos al servidor...');
    
    return this.http.post<LoginResponse>('http://localhost:8000/apiUser', formData);
  }
}