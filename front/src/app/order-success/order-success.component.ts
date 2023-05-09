import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  order:any;
  id:any;
  elem_order:any = [];

  constructor(private product:ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id')
    this.getOrderbyId(this.id)
    this.getElemOrderByOrderId(this.id)
  }
  getOrderbyId = (id:string) => {
    this.product.getOrderById(id).subscribe(
      data => {
        this.order = data;
      },
      error => {
      }
    );
  }

  getElemOrderByOrderId = (id:string) => {
    this.product.getElemOrderByOrderId(id).subscribe(
      data => {
        this.elem_order = data;
      },
      error => {
      }
    );
  }

  deleteOrderByManager = (id:string) => {
    this.product.deleteOrderByManager(id).subscribe(
      data => {
        window.location.href=''
      },
      error => {
      }
    );
  }
  delete(id:string):void{
    this.deleteOrderByManager(id)
    window.location.href=''
  }
}
