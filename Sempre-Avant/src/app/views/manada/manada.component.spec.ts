import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManadaComponent } from './manada.component';

describe('ManadaComponent', () => {
  let component: ManadaComponent;
  let fixture: ComponentFixture<ManadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
