import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-comparison',
  templateUrl: './product-comparison.component.html',
  styleUrls: ['./product-comparison.component.css']
})
export class ProductComparisonComponent implements OnInit {
  compare:any=[];
  token:any;
  baseurl=environment.apiUrl
  product_list:any=[];

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
    this.getProductComparisonByUser(this.token)
    this.token = localStorage.getItem('my_token');
    if (localStorage.getItem('bin')) {
      // @ts-ignore
      this.product_list = JSON.parse(localStorage.getItem('bin'))
    } else {
      this.product_list = []
      localStorage.setItem('bin',JSON.stringify(this.product_list))
    }
  }

  getProductComparisonByUser = (token:string) => {
    this.product.getProductComparisonByUser(token).subscribe(
      data => {
        console.log(data);
        this.compare = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  delete(id:string):void{
    this.delProductComparison(id)
  }
  delProductComparison = (id:string) => {
    this.product.delProductComparison(id).subscribe(
      data => {
        console.log(data);
        this.getProductComparisonByUser(this.token)
      },
      error => {
        console.log(error);
      }
    );
  }
  add_to_basket(info:any):void{
    if (this.product_list.length > 0){
      let flag = false
      for (let i = 0; i < this.product_list.length; i++){
        if (this.product_list[i].id === info.id){
          this.product_list[i].count++
          flag = true;
        }
      }
      if (!flag){
        this.product_list.push({
          id:info.id, count: 1, name:info.name, price:info.price, logo:info.img
        })
      }
    }else{
      this.product_list.push({
        id:info.id, count: 1, name:info.name, price:info.price, logo:info.img
      })
    }
    localStorage.setItem('bin', JSON.stringify(this.product_list))
    window.location.href='/bin'
  }

}
