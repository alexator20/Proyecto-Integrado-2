import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronologiaComponent } from './cronologia.component';

describe('CronologiaComponent', () => {
  let component: CronologiaComponent;
  let fixture: ComponentFixture<CronologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CronologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
