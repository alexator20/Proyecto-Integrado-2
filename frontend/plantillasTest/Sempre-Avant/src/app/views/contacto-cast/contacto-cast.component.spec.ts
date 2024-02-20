import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoCastComponent } from './contacto-cast.component';

describe('ContactoCastComponent', () => {
  let component: ContactoCastComponent;
  let fixture: ComponentFixture<ContactoCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactoCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
