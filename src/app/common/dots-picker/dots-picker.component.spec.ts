import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsPickerComponent } from './dots-picker.component';

describe('DotsPickerComponent', () => {
  let component: DotsPickerComponent;
  let fixture: ComponentFixture<DotsPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotsPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
