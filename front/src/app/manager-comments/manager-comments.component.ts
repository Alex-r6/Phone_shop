import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-manager-comments',
  templateUrl: './manager-comments.component.html',
  styleUrls: ['./manager-comments.component.css']
})
export class ManagerCommentsComponent implements OnInit {

  constructor(private product:ProductService) { }
  token: any;
  comments: any=[];
  // info: any;
  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
    this.getAllCommentByManager()
  }
  getAllCommentByManager = () => {
    this.product.getAllCommentByManager ().subscribe(
      data => {
        console.log(data);
        this.comments = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  delCommentManagerById= (id:string) => {
    this.product.delCommentManagerById(id).subscribe(
      data => {
        console.log(data);
        alert('Valid delete')
        this.getAllCommentByManager()
      },
      error => {
        console.log(error);
      }
    );
  }
  delete(id:string):void{
    this.delCommentManagerById(id)
  }

  // getProduct = (id:string) => {
  //   this.product.getProduct(id).subscribe(
  //     data => {
  //       console.log(data);
  //       this.info = data;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
  // show_product(id:string):void{
  //   this.getProduct(id)
  // }

}
