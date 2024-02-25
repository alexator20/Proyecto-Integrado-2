import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscultismoComponent } from './escultismo.component';

describe('EscultismoComponent', () => {
  let component: EscultismoComponent;
  let fixture: ComponentFixture<EscultismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscultismoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscultismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
