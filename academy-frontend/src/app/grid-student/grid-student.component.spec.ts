import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStudentComponent } from './grid-student.component';

describe('GridStudentComponent', () => {
  let component: GridStudentComponent;
  let fixture: ComponentFixture<GridStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
