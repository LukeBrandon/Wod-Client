import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteBoardPageComponent } from './white-board-page.component';

describe('WhiteBoardPageComponent', () => {
  let component: WhiteBoardPageComponent;
  let fixture: ComponentFixture<WhiteBoardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteBoardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
