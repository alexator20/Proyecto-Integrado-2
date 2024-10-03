import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
  @Input() val: boolean = true;

  ngOnInit() {
    console.log(this.rol);
    console.log("val en header: ", this.val);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['val']) {
      console.log('Header lang changed:', this.val);
      // Implement your logic to switch headers based on val here
    }
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
