import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-header-cast',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-cast.component.html',
  styleUrl: './header-cast.component.css'
})
export class HeaderCastComponent {

  constructor(private router: Router) { }

  public rol: string | null = localStorage.getItem('rol');


  ngOnInit() {
    console.log(this.rol);

  }

  public logout(): void {
    localStorage.setItem('rol', "");
    window.location.reload();
    console.log(localStorage.getItem('rol'));

  }


}
