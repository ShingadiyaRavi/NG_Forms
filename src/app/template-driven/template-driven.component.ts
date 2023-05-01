import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  studentData={
    username:'',
    email:'',
    age:'',
    gender:'',
    course:''
  };

  defaultCourse='MCA';
  defaultGender='Male';
  submitted = false;


  register(data:NgForm){
    console.log(data);
    this.submitted = true;
    this.studentData.username = data.value.username;
    this.studentData.email = data.value.email;
    this.studentData.age = data.value.age;
    this.studentData.gender = data.value.gender;
    this.studentData.course = data.value.course;
  }


}
