import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscultaCastComponent } from './esculta-cast.component';

describe('EscultaCastComponent', () => {
  let component: EscultaCastComponent;
  let fixture: ComponentFixture<EscultaCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscultaCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscultaCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
