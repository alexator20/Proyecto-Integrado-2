import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscoltaComponent } from './escolta.component';

describe('EscoltaComponent', () => {
  let component: EscoltaComponent;
  let fixture: ComponentFixture<EscoltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscoltaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscoltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
