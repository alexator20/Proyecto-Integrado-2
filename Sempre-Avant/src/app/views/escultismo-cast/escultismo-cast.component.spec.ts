import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscultismoCastComponent } from './escultismo-cast.component';

describe('EscultismoCastComponent', () => {
  let component: EscultismoCastComponent;
  let fixture: ComponentFixture<EscultismoCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscultismoCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscultismoCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
