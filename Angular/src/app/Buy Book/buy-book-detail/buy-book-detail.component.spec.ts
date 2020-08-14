import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBookDetailComponent } from './buy-book-detail.component';

describe('BuyBookDetailComponent', () => {
  let component: BuyBookDetailComponent;
  let fixture: ComponentFixture<BuyBookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
