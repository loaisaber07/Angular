import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeAgencyComponent } from './scope-agency.component';

describe('ScopeAgencyComponent', () => {
  let component: ScopeAgencyComponent;
  let fixture: ComponentFixture<ScopeAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScopeAgencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopeAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
