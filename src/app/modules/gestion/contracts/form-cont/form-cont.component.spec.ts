import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContComponent } from './form-cont.component';

describe('FormContComponent', () => {
  let component: FormContComponent;
  let fixture: ComponentFixture<FormContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
