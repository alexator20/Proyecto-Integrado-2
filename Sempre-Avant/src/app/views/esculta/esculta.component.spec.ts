import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscultaComponent } from './esculta.component';

describe('EscultaComponent', () => {
  let component: EscultaComponent;
  let fixture: ComponentFixture<EscultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
