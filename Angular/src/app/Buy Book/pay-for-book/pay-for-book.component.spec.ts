import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayForBookComponent } from './pay-for-book.component';

describe('PayForBookComponent', () => {
  let component: PayForBookComponent;
  let fixture: ComponentFixture<PayForBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayForBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayForBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
