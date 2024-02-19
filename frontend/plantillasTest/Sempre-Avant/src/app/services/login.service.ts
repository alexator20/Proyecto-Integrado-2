import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class LoginService {
  constructor(public http: HttpClient) { }

  enviarDatos(formData: any) {
    return this.http.post('http://tu-api-symfony.com/ruta', formData);
  }
}