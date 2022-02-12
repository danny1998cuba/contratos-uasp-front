import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProvComponent } from './form-prov.component';

describe('FormProvComponent', () => {
  let component: FormProvComponent;
  let fixture: ComponentFixture<FormProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
