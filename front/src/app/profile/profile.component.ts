import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  token:any;
  form: FormGroup = new FormGroup({
    nickname: new FormControl(null),
    phone: new FormControl(null),
    viber: new FormControl(null),
    telegram: new FormControl(null),
  })
  baseurl=environment.apiUrl
  // @ts-ignore
  fileToUpload: File = null;
  imageUrl = '';

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
    this.getProfileToToken(this.token)
  }
  getProfileToToken = (token:string) => {
    this.user.getProfileToToken(token).subscribe(
      data => {
        this.profile = data;
        this.form.patchValue({
          nickname:data.nickname,
          phone:data.phone,
          viber:data.viber,
          telegram:data.telegram,
        })
      },
      error => {
      }
    );
  }
  updateProfileToToken = (token:string, nickname:string, phone:string, viber:string, telegram:string, img:File) => {
    this.user.updateProfileToToken(token, nickname, phone, viber, telegram, img).subscribe(
      data => {
        this.getProfileToToken(this.token)
      },
      error => {
      }
    );
  }
  update():void{
    this.updateProfileToToken(this.token, this.form.value.nickname, this.form.value.phone, this.form.value.viber, this.form.value.telegram, this.fileToUpload)
  }
  handleFileInput(files: any): void {
    this.fileToUpload = files.files.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}
