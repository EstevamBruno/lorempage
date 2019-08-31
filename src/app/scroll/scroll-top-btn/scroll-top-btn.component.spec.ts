import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTopBtnComponent } from './scroll-top-btn.component';

describe('ScrollTopBtnComponent', () => {
  let component: ScrollTopBtnComponent;
  let fixture: ComponentFixture<ScrollTopBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollTopBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTopBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
