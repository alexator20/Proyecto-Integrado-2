import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastoresComponent } from './castores.component';

describe('CastoresComponent', () => {
  let component: CastoresComponent;
  let fixture: ComponentFixture<CastoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
