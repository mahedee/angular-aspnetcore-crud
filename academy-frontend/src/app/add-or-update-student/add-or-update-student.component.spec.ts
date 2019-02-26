import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateStudentComponent } from './add-or-update-student.component';

describe('AddOrUpdateStudentComponent', () => {
  let component: AddOrUpdateStudentComponent;
  let fixture: ComponentFixture<AddOrUpdateStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
