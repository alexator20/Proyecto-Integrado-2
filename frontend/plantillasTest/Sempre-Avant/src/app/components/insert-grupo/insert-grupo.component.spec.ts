import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertGrupoComponent } from './insert-grupo.component';

describe('InsertGrupoComponent', () => {
  let component: InsertGrupoComponent;
  let fixture: ComponentFixture<InsertGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertGrupoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
