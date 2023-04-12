import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.css']
})
export class BinComponent implements OnInit {
  product_list:any=[];
  form: FormGroup = new FormGroup({
    fio: new FormControl(null),
    phone: new FormControl(null),
    address: new FormControl(null),
  })
  token:any;
  baseurl=environment.apiUrl
  message_error:string = ''

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    if (localStorage.getItem('bin')) {
      // @ts-ignore
      this.product_list = JSON.parse(localStorage.getItem('bin'))
    } else {
      this.product_list = []
      localStorage.setItem('bin',JSON.stringify(this.product_list))
    }
    this.token = localStorage.getItem('my_token')
  }
  clear_product_list():void{
    this.product_list =[];
    localStorage.setItem('bin',JSON.stringify(this.product_list))
  }
  addOrder = (token:string, fio:string, phone:string, address:string,) => {
    this.product.addOrder(token, fio, phone, address).subscribe(
      data => {
        for ( let i=0; i< this.product_list.length; i++){
            this.addElemOrder(data.id, this.product_list[i].count, this.product_list[i].id)
        } 
        window.location.href='/order/success/' + data.id
      },
      error => {
        console.log(error);
      }
    );
  }
  submit():void{
    console.log(this.form.value);
    if(this.form.value.fio != null && this.form.value.phone != null && this.form.value.address != null){
      this.addOrder(this.token, this.form.value.fio, this.form.value.phone, this.form.value.address)
    }else{
      console.log("error");
      this.message_error = "Fields must be printed"
    }
    
  }
  addElemOrder = (order:string, count:string, product:string) => {
    this.product.addElemOrder(order, count, product).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
delete(id:string):void{
  for( let i=0; i< this.product_list.length; i++){
    if (id == this.product_list[i].id){
      this.product_list.splice(i,1)
    }
  }
  localStorage.setItem('bin',JSON.stringify(this.product_list))
}
minus(id:string):void{
  for( let i=0; i < this.product_list.length; i++){
    if(id == this.product_list[i].id){
      this.product_list[i].count--
      if (this.product_list[i].count <= 0){
        this.product_list[i].count = 1
      }
    }
  }
  localStorage.setItem('bin',JSON.stringify(this.product_list))
}
plus(id:string):void{
  for( let i=0; i< this.product_list.length; i++){
    if (id == this.product_list[i].id){
      this.product_list[i].count++
    }
  }
  localStorage.setItem('bin',JSON.stringify(this.product_list))
}
}
  

  