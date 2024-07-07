import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NostrahistoriaComponent } from './nostrahistoria.component';

describe('NostrahistoriaComponent', () => {
  let component: NostrahistoriaComponent;
  let fixture: ComponentFixture<NostrahistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NostrahistoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NostrahistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
