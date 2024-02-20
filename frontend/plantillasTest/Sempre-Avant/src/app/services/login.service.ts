import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class LoginService {
  constructor(public http: HttpClient) { }

  enviarDatos(formData: any) {
    return this.http.post('http://localhost:8000/testForm', formData);
  }
}