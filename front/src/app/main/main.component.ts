import { AbstractType, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { environment } from 'src/environments/environment';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  list:any=[];
  category: any=[];
  page = 1;
  baseurl = environment.apiUrl;
  form: FormGroup = new FormGroup({
    search: new FormControl(null)
  })
  type:any;
  logo_img:any=[];
  popular:any =[];
  banner:any=[];
  product_list:any=[];
  desire:any;
  token:any;
  compare:any;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
    this.getAllProductList('1');
    this.getAllCategoryList();
    this.getAllProductsLogo();
    this.getPopularProduct();
    this.getAllBannersList();
    if (localStorage.getItem('bin')) {
      // @ts-ignore
      this.product_list = JSON.parse(localStorage.getItem('bin'))
    } else {
      this.product_list = []
      localStorage.setItem('bin',JSON.stringify(this.product_list))
    }
  }
  getAllProductList = (page:string) => {
    this.product.getAllProductList(page).subscribe(
      data => {
        this.list = data;
      },
      error => {
      }
    );
  }
  getAllCategoryList = () => {
    this.product.getAllCategoryList().subscribe(
      data => {
        this.category = data;
      },
      error => {
      }
    );
  }
  getProductFilterByCategory = (id:string) => {
    this.product.getProductFilterByCategory(id).subscribe(
      data => {
        this.list = data;
      },
      error => {
      }
    );
  }
  clear():void{
    this.getAllProductList("1");
  }
  next():void{
    this.page += 1
    if (this.type == 'search'){
      this.searchProductByName(this.form.value.search, this.page.toString())
    }else{
      this.getAllProductList(this.page.toString());
    }
  }
  prev():void{
    this.page -= 1
    if (this.type == 'search'){
      this.searchProductByName(this.form.value.search, this.page.toString())
    }else{
      this.getAllProductList(this.page.toString());
    }
  }

  searchProductByName = (search:string, page:string) => {
    this.product.searchProductByName(search, page).subscribe(
      data => {
        this.list = data;
      },
      error => {
      }
    );
  }
  search():void{
    this.type = 'search'    
    this.searchProductByName(this.form.value.search, '1')
  }

  getAllProductsLogo = () => {
    this.product.getAllProductsLogo().subscribe(
      data => {
        this.logo_img = data;
      },
      error => {
      }
    );
  }

  getPopularProduct = () => {
    this.product.getPopularProduct().subscribe(
      data => {
        this.popular = data;
      },
      error => {
      }
    );
  }
  getAllBannersList = () => {
    this.product.getAllBannersList().subscribe(
      data => {
        this.banner = data;
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
  desire_goods(info:any):void{
    this.addNeedfullProduct(this.token, info.id)
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
  compare_goods(info:any):void{
    this.addProductComparison(this.token, info.id)
  }
}
