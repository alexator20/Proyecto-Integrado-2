import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nostrahist-cast',
  standalone: true,
  imports: [],
  templateUrl: './nostrahist-cast.component.html',
  styleUrl: './nostrahist-cast.component.css'
})
export class NostrahistCastComponent {
  public val: boolean = false;
  @Output()lang = new EventEmitter<boolean>();

  ngOnInit() {
    console.log('hola');
    console.log(this.val);
    this.emmit();
    
  }

  emmit(){
    console.log("Emitting: ", this.val);
    this.lang.emit(this.val);
  }
}
