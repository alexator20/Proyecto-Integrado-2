import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronologiaCastComponent } from './cronologia-cast.component';

describe('CronologiaCastComponent', () => {
  let component: CronologiaCastComponent;
  let fixture: ComponentFixture<CronologiaCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronologiaCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CronologiaCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
