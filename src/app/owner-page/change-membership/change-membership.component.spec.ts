import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMembershipComponent } from './change-membership.component';

describe('ChangeMembershipComponent', () => {
  let component: ChangeMembershipComponent;
  let fixture: ComponentFixture<ChangeMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
