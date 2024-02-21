import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUserComponent } from './insert-user.component';

describe('InsertUserComponent', () => {
  let component: InsertUserComponent;
  let fixture: ComponentFixture<InsertUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
