import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCastComponent } from './home-cast.component';

describe('HomeCastComponent', () => {
  let component: HomeCastComponent;
  let fixture: ComponentFixture<HomeCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
