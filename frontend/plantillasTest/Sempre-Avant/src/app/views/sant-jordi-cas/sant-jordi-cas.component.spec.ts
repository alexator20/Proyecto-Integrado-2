import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantJordiCasComponent } from './sant-jordi-cas.component';

describe('SantJordiCasComponent', () => {
  let component: SantJordiCasComponent;
  let fixture: ComponentFixture<SantJordiCasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantJordiCasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SantJordiCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
