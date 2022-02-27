import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicePoolPickerComponent } from './dice-pool-picker.component';

describe('DicePoolPickerComponent', () => {
  let component: DicePoolPickerComponent;
  let fixture: ComponentFixture<DicePoolPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicePoolPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicePoolPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
