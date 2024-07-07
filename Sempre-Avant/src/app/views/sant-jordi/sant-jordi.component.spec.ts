import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantJordiComponent } from './sant-jordi.component';

describe('SantJordiComponent', () => {
  let component: SantJordiComponent;
  let fixture: ComponentFixture<SantJordiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantJordiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SantJordiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
