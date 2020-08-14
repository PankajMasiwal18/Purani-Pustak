import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSilderComponent } from './image-silder.component';

describe('ImageSilderComponent', () => {
  let component: ImageSilderComponent;
  let fixture: ComponentFixture<ImageSilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
