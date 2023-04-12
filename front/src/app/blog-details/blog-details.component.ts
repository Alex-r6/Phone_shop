import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  article:any;
  id:any;
  baseurl = environment.apiUrl;
  blog_list:any=[];
  form:FormGroup = new FormGroup ({
    name_form: new FormControl(null),
    email: new FormControl(null),
    comment:new FormControl(null)
  })
  token:any;
  constructor(private product:ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('my_token')
    this.id=this.router.snapshot.paramMap.get('id')
    this.getArticleById(this.id)
    this.getBlogCommentList(this.id)
  }
  getArticleById = (id:string) => {
    this.product.getArticleById(id).subscribe(
      data => {
        console.log(data);
        this.article = data
      },
      error => {
        console.log(error);
      }
    );
  }
  getBlogCommentList = (id:string) => {
    this.product.getBlogCommentList(id).subscribe(
      data => {
        console.log(data);
        this.blog_list = data
      },
      error => {
        console.log(error);
      }
    );
  }
  addBlogComment = (name_form:string, email:string, comment:string, article:string, token:string) => {
    this.product.addBlogComment(name_form, email, comment, article, token).subscribe(
      data => {
        console.log(data);
        this.getBlogCommentList(this.id)
      },
      error => {
        console.log(error);
      }
    );
  }
  send():void{
    this.addBlogComment(this.form.value.name_form, this.form.value.email, this.form.value.comment, this.id, this.token)
  }

}
