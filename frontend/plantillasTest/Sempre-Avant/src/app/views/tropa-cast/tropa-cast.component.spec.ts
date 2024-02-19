import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TropaCastComponent } from './tropa-cast.component';

describe('TropaCastComponent', () => {
  let component: TropaCastComponent;
  let fixture: ComponentFixture<TropaCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TropaCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TropaCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
