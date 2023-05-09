import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token: any;
  profile:any;

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
    this.getProfileToToken(this.token)
  }
  log_out():void{
    localStorage.removeItem('my_token')
    window.location.href = 'registration'
  }
  getProfileToToken = (token:string) => {
    this.user.getProfileToToken(token).subscribe(
      data => {
        this.profile = data;
      },
      error => {
      }
    );
  }
}
