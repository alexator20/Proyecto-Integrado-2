import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionsComponent } from './publicacions.component';

describe('PublicacionsComponent', () => {
  let component: PublicacionsComponent;
  let fixture: ComponentFixture<PublicacionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicacionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
