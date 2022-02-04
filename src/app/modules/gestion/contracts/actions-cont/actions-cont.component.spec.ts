import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsContComponent } from './actions-cont.component';

describe('ActionsContComponent', () => {
  let component: ActionsContComponent;
  let fixture: ComponentFixture<ActionsContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
