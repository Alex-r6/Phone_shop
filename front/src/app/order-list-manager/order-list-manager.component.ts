import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order-list-manager',
  templateUrl: './order-list-manager.component.html',
  styleUrls: ['./order-list-manager.component.css']
})
export class OrderListManagerComponent implements OnInit {
  manager_list:any=[];
  form: FormGroup=new FormGroup({
    status: new FormControl(null)
  })
  token:any;
  statuses:any=[];
  id:any;
  active_order:any;
  page = 1
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('my_token')
    this.getListOrderManager(this.token, '1')
    this.getAllOrderStatusList()
  }
  getListOrderManager = (token:string, page:string) => {
    this.product.getListOrderManager(token, page).subscribe(
      data => {
        console.log(data);
        this.manager_list = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  getAllOrderStatusList = () => {
    this.product.getAllOrderStatusList().subscribe(
      data => {
        console.log(data);
        this.statuses = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateOrderStatus = (status:string, id:string, token:string) => {
    this.product.updateOrderStatus(status, id, token).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  change():void{
    this.updateOrderStatus(this.form.value.status, this.active_order.id, this.token)
    this.getListOrderManager(this.token, this.page.toString())
  }

  getOrderById = (id:string) => {
    this.product.getOrderById(id).subscribe(
      data => {
        console.log(data);
        this.active_order = data;
        this.form.patchValue({
          status: data.status.id,
        })
        
      },
      error => {
        console.log(error);
      }
    );
  }
  next():void{
    this.page ++
    this.getListOrderManager(this.token, this.page.toString())
  }
  prev():void{
    this.page --
    this.getListOrderManager(this.token, this.page.toString( ))
  }
}
