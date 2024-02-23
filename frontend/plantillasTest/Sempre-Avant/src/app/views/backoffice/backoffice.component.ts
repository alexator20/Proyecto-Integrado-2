import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { TestearFormuComponent } from '../../components/testear-formu/testear-formu.component';
import { InsertUserComponent } from '../../components/insert-user/insert-user.component';
import { UserTableComponent } from '../../components/user-table/user-table.component';
import { UpdateUserComponent } from '../../components/update-user/update-user.component';


@Component({
  selector: 'app-backoffice',
  standalone: true,
  imports: [LoginComponent,TestearFormuComponent, InsertUserComponent, UserTableComponent, UpdateUserComponent],
  templateUrl: './backoffice.component.html',
  styleUrl: './backoffice.component.css'
})
export class BackofficeComponent {

  public condition = 1;

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

  public selectForm(param:number): void {
    this.condition = param;
  }
}
