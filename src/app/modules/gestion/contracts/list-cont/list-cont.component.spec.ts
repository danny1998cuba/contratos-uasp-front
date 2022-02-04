import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContComponent } from './list-cont.component';

describe('ListContComponent', () => {
  let component: ListContComponent;
  let fixture: ComponentFixture<ListContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
