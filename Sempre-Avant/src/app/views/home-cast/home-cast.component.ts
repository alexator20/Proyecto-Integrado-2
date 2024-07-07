import { Component } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';

@Component({
  selector: 'app-home-cast',
  standalone: true,
  imports: [JumbotronComponent],
  templateUrl: './home-cast.component.html',
  styleUrl: './home-cast.component.css'
})
export class HomeCastComponent {

}
