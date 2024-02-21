import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  @Input() rol: string="";

  ngOnInit() {
    console.log(this.rol);
  }
}
