import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TropaComponent } from './tropa.component';

describe('TropaComponent', () => {
  let component: TropaComponent;
  let fixture: ComponentFixture<TropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TropaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
