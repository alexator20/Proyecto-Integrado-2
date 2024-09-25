import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizaCastComponent } from './organiza-cast.component';

describe('OrganizaCastComponent', () => {
  let component: OrganizaCastComponent;
  let fixture: ComponentFixture<OrganizaCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizaCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizaCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
