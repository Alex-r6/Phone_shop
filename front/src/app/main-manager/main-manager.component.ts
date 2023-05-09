import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-main-manager',
  templateUrl: './main-manager.component.html',
  styleUrls: ['./main-manager.component.css']
})
export class MainManagerComponent implements OnInit {
  order:any;
  elem_order:any;
  id:any;

  constructor(private product:ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id')
    this.getOrderbyId(this.id);
    this.getElemOrderByOrderId(this.id);
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
