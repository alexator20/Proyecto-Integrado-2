import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NostrahistCastComponent } from './nostrahist-cast.component';

describe('NostrahistCastComponent', () => {
  let component: NostrahistCastComponent;
  let fixture: ComponentFixture<NostrahistCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NostrahistCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NostrahistCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
