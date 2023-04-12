import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  token:any;
  order_list:any=[];
  id:any;
  page = 1; 

  constructor(private user:UserService, private product:ProductService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('my_token')
    this.getOrderListByUser(this.token, '1')
  }
  getOrderListByUser = (token:string, page:string) => {
    this.user.getOrderListByUser(token, page).subscribe(
      data => {
        console.log(data);
        this.order_list = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  delOrder = (id:string) => {
    this.product.delOrder(id).subscribe(
      data => {
        console.log(data);
        this.getOrderListByUser(this.token,'1')
        alert('valid delete')
      },
      error => {
        console.log(error);
        alert('error delete')
      }
    );
  }
  delete(id:string):void{
    this.delOrder(id)
  }
  change():void{}
  next():void{
    this.page += 1
    this.getOrderListByUser(this.token, this.page.toString())
  }
  prev():void{
    this.page -= 1
    this.getOrderListByUser(this.token, this.page.toString())
  }
}
