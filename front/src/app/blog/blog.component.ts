import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles_list:any=[]
  baseurl = environment.apiUrl;
  category_list:any=[];
  category:any=[];

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.getAllArticlesList()
    this.getAllCategoryArticleList()
  }
  getAllArticlesList = () => {
    this.product.getAllArticlesList().subscribe(
      data => {
        console.log(data);
        this.articles_list = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  getAllCategoryArticleList = () => {
    this.product.getAllCategoryArticleList().subscribe(
      data => {
        console.log(data);
        this.category_list = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getArticleByCategory = (id:string) => {
    this.product.getArticleByCategory(id).subscribe(
      data => {
        console.log(data);
        this.articles_list = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  clear():void{
    this.getAllArticlesList()
  }
}
