import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManadaCastComponent } from './manada-cast.component';

describe('ManadaCastComponent', () => {
  let component: ManadaCastComponent;
  let fixture: ComponentFixture<ManadaCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManadaCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManadaCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
