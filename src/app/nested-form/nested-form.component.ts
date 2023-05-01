import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent {

  submitted=false;
  studentData:any={
    username:'',
    surname:'',
    email:'',
    mobile:'',
    age:'',
    gender:'',
    course:''
  }

  studentForm=new FormGroup({
    fullName:new FormGroup({
      username:new FormControl('',[Validators.required]),
      surname:new FormControl('',[Validators.required])
    }),
    email:new FormControl('hello@gmail.com',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
    // mobile:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]+$')]),
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(25)]),
    gender:new FormControl('Male',[Validators.required]),
    course:new FormControl('MCA',[Validators.required])
  });

  register(){
    console.log(this.studentForm.value);
    this.studentData.username = this.studentForm.value.fullName?.username;
    this.studentData.surname = this.studentForm.value.fullName?.surname;
    this.studentData.email = this.studentForm.value.email;
    this.studentData.mobile = this.studentForm.value.mobile;
    this.studentData.age = this.studentForm.value.age;
    this.studentData.gender = this.studentForm.value.gender;
    this.studentData.course = this.studentForm.value.course;
    this.submitted=true;
  }

  get username(){
    return this.studentForm.get('fullName.username');
  }
  get surname(){
    return this.studentForm.get('fullName.surname');
  }
  get email(){
    return this.studentForm.get('email');
  }
  get mobile(){
    return this.studentForm.get('mobile');
  }
  get age(){
    return this.studentForm.get('age');
  }
  get gender(){
    return this.studentForm.get('gender');
  }
  get course(){
    return this.studentForm.get('course');
  }

}
