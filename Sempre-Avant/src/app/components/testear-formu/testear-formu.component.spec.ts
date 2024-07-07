import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestearFormuComponent } from './testear-formu.component';

describe('TestearFormuComponent', () => {
  let component: TestearFormuComponent;
  let fixture: ComponentFixture<TestearFormuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestearFormuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestearFormuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
