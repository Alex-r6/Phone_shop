import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup=new FormGroup({
    username:new FormControl(null),
    password:new FormControl(null),
  })
  errors_username: any=[];
  errors_password: any=[];
  

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
  getTokenUser = (username:string, password:string) => {
    this.user.getTokenUser(username, password).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('my_token', data.auth_token);
        window.location.href = '';    
      },
      error => {
        console.log(error);
        this.errors_username = error.error.username;
        this.errors_password = error.error.password;
      }
      );
    }
    login():void{
    this.getTokenUser(this.form.value.username, this.form.value.password);
  }

}
