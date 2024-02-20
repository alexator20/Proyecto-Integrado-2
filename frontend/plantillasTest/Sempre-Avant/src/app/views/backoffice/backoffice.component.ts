import { Component } from '@angular/core';


@Component({
  selector: 'app-backoffice',
  standalone: true,
  imports: [],
  templateUrl: './backoffice.component.html',
  styleUrl: './backoffice.component.css'
})
export class BackofficeComponent {

  public insertUser(): void {
    // Logic to insert a user goes here
    alert('insert')
    // You should write the logic to insert a user in your application.
    // This could involve making HTTP requests, interacting with a database, etc.
  }
  public updateUser(): void {
    // Logic to insert a user goes here
    alert('update')
    // You should write the logic to insert a user in your application.
    // This could involve making HTTP requests, interacting with a database, etc.
  }
  public deleteUser(): void {
    // Logic to insert a user goes here
    alert('eliminar')
    // You should write the logic to insert a user in your application.
    // This could involve making HTTP requests, interacting with a database, etc.
  }
}
