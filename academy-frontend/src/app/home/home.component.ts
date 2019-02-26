import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public studentData: Array<any>;
  public currentStudent: any;

  //constructor ( public mahedeeAuth: mahedeeAuthService, private studentService: StudentService) {
    constructor ( private studentService: StudentService) {
    studentService.get().subscribe((data: any) => this.studentData = data);

    this.currentStudent = this.setInitialValuesForStudentData();
  }

  private setInitialValuesForStudentData () {
    return {
      id: undefined,
      rollNo: '',
      name: '',
      fatherName: '',
      motherName: '',
      bloodGroup: ''
    }
  }

  public createOrUpdateStudent = function(student: any) {
    // if student is present in studentData, we can assume this is an update
    // otherwise it is adding a new element
    let studentWithId;
    studentWithId = _.find(this.studentData, (el => el.id === student.id));

    if (studentWithId) {
      const updateIndex = _.findIndex(this.studentData, {id: studentWithId.id});
      this.studentService.update(student).subscribe(
        studentRecord =>  this.studentData.splice(updateIndex, 1, student)
      );
    } else {
      this.studentService.add(student).subscribe(
        studentRecord => this.studentData.push(studentRecord)
      );
    }

    this.currentStudent = this.setInitialValuesForStudentData();
  };

  ngOnInit() {
  }

  public editClicked(data) {
    this.currentStudent = data;
    //this.studentInfo = data;
  }

  public deleteClicked(student){
    this.studentService.remove(student).subscribe();

    _.remove(this.studentData, (el => el.id === student.id));
    
  }

 


}

