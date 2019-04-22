import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WodPageComponent } from './wod-page.component';

describe('WodPageComponent', () => {
  let component: WodPageComponent;
  let fixture: ComponentFixture<WodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
