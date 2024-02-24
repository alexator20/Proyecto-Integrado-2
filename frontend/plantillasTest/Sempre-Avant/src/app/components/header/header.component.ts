import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(private router: Router) { }

  public rol: string | null = localStorage.getItem('rol');
  public val: boolean = true;

  ngOnInit() {
    console.log(this.rol);

  }

  public logout(): void {
    localStorage.setItem('rol', "");
    window.location.reload();
    console.log(localStorage.getItem('rol'));

  }

  public idioma(): void{
    this.val = !this.val;
  }


}
