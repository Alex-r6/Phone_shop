import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-chat-order',
  templateUrl: './chat-order.component.html',
  styleUrls: ['./chat-order.component.css']
})
export class ChatOrderComponent implements OnInit {
  chat_order:any;
  chat_list:any=[];
  id:any;
  token:any;
  form : FormGroup = new FormGroup ({
    form_name : new FormControl(null),
    text : new FormControl(null)
  })

  constructor(private product:ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id')
    this.token = localStorage.getItem('my_token')
    this.getChatOrderById(this.id)

  }
  addChatOrder = (form_name:string, text:string, token:string, id:string, order:string) => {
    this.product.addChatOrder(form_name, text, token, id, order).subscribe(
      data => {
        this.chat_order = data;
        this.getChatOrderById(this.id)
      },
      error => {
      }
    );
  }
  submit():void{
    this.addChatOrder(this.form.value.form_name, this.form.value.text, this.token, this.id, this.id)
  }
  getChatOrderById = (id:string) => {
    this.product.getChatOrderById(id).subscribe(
      data => {
        this.chat_list = data;
      },
      error => {
      }
    );
  }
}
