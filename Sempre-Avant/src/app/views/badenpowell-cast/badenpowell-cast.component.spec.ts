import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadenpowellCastComponent } from './badenpowell-cast.component';

describe('BadenpowellCastComponent', () => {
  let component: BadenpowellCastComponent;
  let fixture: ComponentFixture<BadenpowellCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadenpowellCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadenpowellCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
