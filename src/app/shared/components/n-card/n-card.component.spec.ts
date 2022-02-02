import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NCardComponent } from './n-card.component';

describe('NCardComponent', () => {
  let component: NCardComponent;
  let fixture: ComponentFixture<NCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
