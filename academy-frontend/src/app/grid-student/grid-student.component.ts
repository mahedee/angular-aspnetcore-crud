import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-student',
  templateUrl: './grid-student.component.html',
  styleUrls: ['./grid-student.component.css']
})


export class GridStudentComponent implements OnInit {

  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked: EventEmitter<any>  = new EventEmitter<any>();
  @Input() studentData: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }


  public editRecord(record) {
    console.log("record.rollno " + record);
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public newRecord() {
    this.newClicked.emit();
  }

}
