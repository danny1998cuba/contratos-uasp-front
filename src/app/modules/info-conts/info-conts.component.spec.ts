import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContsComponent } from './info-conts.component';

describe('InfoContsComponent', () => {
  let component: InfoContsComponent;
  let fixture: ComponentFixture<InfoContsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoContsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoContsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
