import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanCastComponent } from './clan-cast.component';

describe('ClanCastComponent', () => {
  let component: ClanCastComponent;
  let fixture: ComponentFixture<ClanCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClanCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClanCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
