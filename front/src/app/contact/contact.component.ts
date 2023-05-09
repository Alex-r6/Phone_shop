import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any=[];
  token:any;
  form:FormGroup = new FormGroup({
    name_form:new FormControl(null),
    email:new FormControl(null),
    phone:new FormControl(null),
    message:new FormControl(null)
  })
  valid_message:any;

  constructor( private product:ProductService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
  }
  addContactInfo = (name_form:string, email:string, phone:string, message:string, token:string) => {
    this.product.addContactInfo(name_form, email, phone, message, token).subscribe(
      data => {
        this.contact = data;
        this.valid_message = 'Your message is very important for us. We will let you know our decision'
      },
      error => {
      }
    );
  }
  send():void{
    this.addContactInfo(this.form.value.name_form, this.form.value.email, this.form.value.phone, this.form.value.message, this.token)
  }
}
