import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadenPowellComponent } from './baden-powell.component';

describe('BadenPowellComponent', () => {
  let component: BadenPowellComponent;
  let fixture: ComponentFixture<BadenPowellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadenPowellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadenPowellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
