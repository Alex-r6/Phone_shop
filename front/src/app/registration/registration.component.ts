import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
    email: new FormControl(null),
  })
  errors_username: any=[];
  errors_password: any=[];
  errors_email: any=[];

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
  getUserRegistration = (username:string, password:string, email:string) => {
    this.user.getUserRegistration(username, password, email).subscribe(
      data => {
        console.log(data);
        window.location.href = '/login'
      },
      error => {
        console.log(error);
        this.errors_username = error.error.username;
        this.errors_password = error.error.password;
        this.errors_email = error.error.email;        
      }
      );
    }
    submit():void{
      this.getUserRegistration(this.form.value.username, this.form.value.password, this.form.value.email);
      
    }

}
