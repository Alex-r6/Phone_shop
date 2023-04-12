import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faq_list:any=[]
  form:FormGroup =new FormGroup ({
    name: new FormControl(null),
    question: new FormControl(null) 
  })
  token:any;


  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
    this.getFaqList()
  }
  getFaqList = () => {
    this.product.getFaqList().subscribe(
      data => {
        console.log(data);
        this.faq_list = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  addFaqQuestion = (name_form:string, question:string, token:string) => {
    this.product.addFaqQuestion(name_form, question, token).subscribe(
      data => {
        console.log(data);
        this.faq_list = data;
      },
      error => {
        console.log(error);
      }
      );
    }
    send():void{
      this.addFaqQuestion(this.form.value.name, this.form.value.question, this.token)
    }

}
