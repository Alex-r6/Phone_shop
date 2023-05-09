import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-faq-list-manager',
  templateUrl: './faq-list-manager.component.html',
  styleUrls: ['./faq-list-manager.component.css']
})
export class FaqListManagerComponent implements OnInit {
  faq_list:any=[];
  faq_answer:any;
  page = 1;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.getAllFaqList('1')
  }
  getAllFaqList = (page:string) => {
    this.product.getAllFaqList(page).subscribe(
      data => {
        this.faq_list = data;
      },
      error => {
      }
    );
  }
  answer():void{}
  next():void{
    this.page += 1
    this.getAllFaqList(this.page.toString())
  }
  prev():void{
    this.page -= 1
    this.getAllFaqList(this.page.toString())
  }
}
