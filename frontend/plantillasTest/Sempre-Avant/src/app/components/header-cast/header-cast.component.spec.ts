import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCastComponent } from './header-cast.component';

describe('HeaderCastComponent', () => {
  let component: HeaderCastComponent;
  let fixture: ComponentFixture<HeaderCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
