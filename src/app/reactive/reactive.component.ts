import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  submitted=false;
  studentData:any={
    username:'',
    email:'',
    age:'',
    gender:'',
    course:''
  };

  studentForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    email:new FormControl('hello@gmail.com',[Validators.required,Validators.email]),
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(25),Validators.pattern('[0-9]+$')]),
    gender:new FormControl('Male',[Validators.required]),
    course:new FormControl('MCA',[Validators.required])
  })

  register(){
    console.log(this.studentForm.value);
    this.submitted=true;
    this.studentData.username = this.studentForm.value.username;
    this.studentData.email = this.studentForm.value.email;
    this.studentData.age = this.studentForm.value.age;
    this.studentData.gender = this.studentForm.value.gender;
    this.studentData.course = this.studentForm.value.course;
  }

  /* This is used to define as a method for the access the formcontrol and get set value  */
  get username(){
    return this.studentForm.get('username');
  }

  get email(){
    return this.studentForm.get('email');
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
