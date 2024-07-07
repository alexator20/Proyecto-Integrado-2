import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastoresCastComponent } from './castores-cast.component';

describe('CastoresCastComponent', () => {
  let component: CastoresCastComponent;
  let fixture: ComponentFixture<CastoresCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastoresCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastoresCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
