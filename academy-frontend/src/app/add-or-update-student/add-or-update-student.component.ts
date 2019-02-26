import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-or-update-student',
  templateUrl: './add-or-update-student.component.html',
  styleUrls: ['./add-or-update-student.component.css']
})
export class AddOrUpdateStudentComponent implements OnInit {

  @Output() studentCreated = new EventEmitter<any>();
  @Input() studentInfo: any;

  public buttonText = 'Save';
  
  constructor() { 
    this.clearStudentInfo();
    console.log(this.studentInfo.rollno);
  }



  ngOnInit() {
  }


  private clearStudentInfo = function() {

    // Create an empty jogging object
    this.studentInfo = {
      id: undefined,
      rollNo: '',
      name: '',
      fatherName: '',
      motherName: '',
      bloodGroup: ''
    };
  };

  public addOrUpdateStudentRecord = function(event) {
    this.studentCreated.emit(this.studentInfo);
    this.clearStudentInfo();
  };

  public displayCounter(data){
    console.log(data);
  }

  public editClicked(data) {
    this.studentInfo = data;
  }

  
}
