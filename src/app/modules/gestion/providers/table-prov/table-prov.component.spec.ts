import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProvComponent } from './table-prov.component';

describe('TableProvComponent', () => {
  let component: TableProvComponent;
  let fixture: ComponentFixture<TableProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
