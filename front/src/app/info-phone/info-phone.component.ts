import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-info-phone',
  templateUrl: './info-phone.component.html',
  styleUrls: ['./info-phone.component.css']
})
export class InfoPhoneComponent implements OnInit {
  id:any;
  info:any;
  product_list:any=[];
  form:FormGroup= new FormGroup({
    text: new FormControl(null),
  });
  token:any;
  comment_list:any=[];
  baseurl = environment.apiUrl;
  img_list: any=[];
  img : any;
  index_img = 0;
  same_product:any=[];
  like:any;
  desire:any;
  compare:any;
  specification_list:any=[];
  videos:any=[];
  list_url:any=[];


  constructor(private product:ProductService, private router: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // this.getProductCommentList()
    this.token = localStorage.getItem('my_token')
    this.id=this.router.snapshot.paramMap.get('id')
    this.getProductImgList(this.id)
    this.getProductCommentList(this.id)
    this.getProduct(this.id)
    this.getSameProductByCategory(this.id)
    this.getProductSpecificationById(this.id)
    if (localStorage.getItem('bin')) {
      // @ts-ignore
      this.product_list = JSON.parse(localStorage.getItem('bin'))
    } else {
      this.product_list = []
      localStorage.setItem('bin',JSON.stringify(this.product_list))
    }
    this.getListVideoToProduct(this.id)
  }
  getProduct = (id:string) => {
    this.product.getProduct(id).subscribe(
      data => {
        this.info = data;
      },
      error => {
      }
    );
  }
  add_to_basket():void{
    if (this.product_list.length > 0){
      let flag = false
      for (let i = 0; i < this.product_list.length; i++){
        if (this.product_list[i].id === this.info.id){
          this.product_list[i].count++
          flag = true;
        }
      }
      if (!flag){
        this.product_list.push({
          id:this.info.id, count: 1, name:this.info.name, price:this.info.price, logo: this.info.img
        })
      }
    }else{
      this.product_list.push({
        id:this.info.id, count: 1, name:this.info.name, price:this.info.price, logo:this.info.img
      })
    }
    localStorage.setItem('bin', JSON.stringify(this.product_list))
    window.location.href='/bin'
  }
  addProductComment = (token:string, text:string, product:string) => {
    this.product.addProductComment(token, text, product).subscribe(
      data => {
        this.getProductCommentList(this.id);
      },
      error => {
      }
    );
  }
  send():void{
    this.addProductComment(this.token, this.form.value.text, this.id)
  }
  getProductCommentList = (id:string) => {
    this.product.getProductCommentList(id).subscribe(
      data => {
        this.comment_list = data;
      },
      error => {
      }
    );
  }
  getProductImgList = (id:string) => {
    this.product.getProductImgList(id).subscribe(
      data => {
        this.img_list = data;
        this.img = data[0];
      },
      error => {
      }
    );
  }
  next_img():void{
    this.index_img += 1
    this.img = this.img_list[this.index_img]
    
    
  }
  prev_img():void{
    this.index_img -= 1
    this.img = this.img_list[this.index_img]   
  }
  getSameProductByCategory = (id:string) => {
    this.product.getSameProductByCategory(id).subscribe(
      data => {
        this.same_product = data;
      },
      error => {
      }
    );
  }

  addLike = (token:string, product:string) => {
    this.product.addLike(token, product).subscribe(
      data => {
        this.getProduct(this.id)
      },
      error => {
      }
    );
  }
  add_like():void{
     this.addLike(this.token, this.info.id)
  }

  addNeedfullProduct = (token:string, product:string) => {
    this.product.addNeedfullProduct(token, product).subscribe(
      data => {
        this.desire = data;
        window.location.href="/desire/goods"
      },
      error => {
      }
    );
  }
  desire_goods():void{
    this.addNeedfullProduct(this.token, this.info.id)
  }

  addProductComparison = (token:string, product:string) => {
    this.product.addProductComparison(token, product).subscribe(
      data => {
        this.compare = data;
        window.location.href="/product/comparison"
      },
      error => {
      }
    );
  }
  compare_goods():void{
    this.addProductComparison(this.token, this.info.id)
  }

  getProductSpecificationById = (id:string) => {
    this.product.getProductSpecificationById(id).subscribe(
      data => {
        this.specification_list = data;
      },
      error => {
      }
    );
  }
  getListVideoToProduct = (id:string) => {
    this.product.getListVideoToProduct(id).subscribe(
      data => {
        this.videos = data;
        for(let i = 0; i < this.videos.length; i++){
          this.list_url.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.videos[i].video))
        }
      },
      error => {
      }
    );
  }
}
