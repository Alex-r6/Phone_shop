import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-contact-info-list',
  templateUrl: './contact-info-list.component.html',
  styleUrls: ['./contact-info-list.component.css']
})
export class ContactInfoListComponent implements OnInit {
  contact_list:any=[]
  page=1;
  token:any;

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
    this.getAllContactInfoList('1')
  }
  getAllContactInfoList = (page:string) => {
    this.product.getAllContactInfoList(page).subscribe(
      data => {
        this.contact_list = data;
      },
      error => {
      }
    );
  }
  next_page():void{
    this.page += 1
    this.getAllContactInfoList(this.page.toString())
  }
  prev_page():void{
    this.page -= 1
    this.getAllContactInfoList(this.page.toString())
  }

}
