import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBoardPageComponent } from './class-board-page.component';

describe('ClassBoardPageComponent', () => {
  let component: ClassBoardPageComponent;
  let fixture: ComponentFixture<ClassBoardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBoardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
