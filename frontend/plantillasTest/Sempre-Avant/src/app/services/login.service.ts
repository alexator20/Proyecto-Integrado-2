import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/servi.interface';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class LoginService {
  constructor(public http: HttpClient) { }

  enviarDatos(formData: Login) {
    return this.http.post('http://localhost:8000/apiUser', formData);
  }
}