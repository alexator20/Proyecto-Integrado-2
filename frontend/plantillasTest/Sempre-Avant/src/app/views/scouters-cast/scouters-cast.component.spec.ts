import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutersCastComponent } from './scouters-cast.component';

describe('ScoutersCastComponent', () => {
  let component: ScoutersCastComponent;
  let fixture: ComponentFixture<ScoutersCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoutersCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoutersCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
