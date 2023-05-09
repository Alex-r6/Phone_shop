import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent implements OnInit {
  form:FormGroup = new FormGroup({
    status:new FormControl(null),
  })
  statuses:any=[];
  token:any;
  id:any;

  constructor(private product: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllOrderStatusList()
    this.token = localStorage.getItem('my_token')
    this.id=this.router.snapshot.paramMap.get('id')
    this.getOrderById(this.id)
  }
  change():void{
    this.updateOrderStatus(this.form.value.status, this.id, this.token)
    window.location.href='order/list'
  }
  getAllOrderStatusList = () => {
    this.product.getAllOrderStatusList().subscribe(
      data => {
        this.statuses = data;
      },
      error => {
      }
    );
  }
  updateOrderStatus = (status:string, id:string, token:string) => {
    this.product.updateOrderStatus(status, id, token).subscribe(
      data => {
      },
      error => {
      }
    );
  }

  getOrderById = (id:string) => {
    this.product.getOrderById(id).subscribe(
      data => {
        this.form.patchValue({
          status: data.status.id,
        })
      },
      error => {
      }
    );
  }

}
