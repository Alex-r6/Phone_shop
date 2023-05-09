import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-desired-goods',
  templateUrl: './desired-goods.component.html',
  styleUrls: ['./desired-goods.component.css']
})
export class DesiredGoodsComponent implements OnInit {
  desire_goods:any=[];
  product_list :any=[];
  token:any;



  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.getAllNeedfullProductList();
    this.token = localStorage.getItem('my_token');
    if (localStorage.getItem('bin')) {
      // @ts-ignore
      this.product_list = JSON.parse(localStorage.getItem('bin'))
    } else {
      this.product_list = []
      localStorage.setItem('bin',JSON.stringify(this.product_list))
    }
  }
    
  getAllNeedfullProductList = () => {
    this.product.getAllNeeedfullProductList().subscribe(
      data => {
        this.desire_goods = data;
      },
      error => {
      }
    );
  }
  delete(id:string):void{
    this.delNeedfullProduct(id)

  }
  delNeedfullProduct = (id:string) => {
    this.product.delNeedfullProduct(id).subscribe(
      data => {
        this.getAllNeedfullProductList()
      },
      error => {
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
