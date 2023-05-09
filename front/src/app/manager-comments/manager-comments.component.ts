import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
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
  baseurl = environment.apiUrl;
  // info: any;
  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
    this.getAllCommentByManager()
  }
  getAllCommentByManager = () => {
    this.product.getAllCommentByManager ().subscribe(
      data => {
        this.comments = data;
      },
      error => {
      }
    );
  }

  delCommentManagerById= (id:string) => {
    this.product.delCommentManagerById(id).subscribe(
      data => {
        alert('Valid delete')
        this.getAllCommentByManager()
      },
      error => {
      }
    );
  }
  delete(id:string):void{
    this.delCommentManagerById(id)
  }
 }
