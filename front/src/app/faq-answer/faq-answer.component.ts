import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-faq-answer',
  templateUrl: './faq-answer.component.html',
  styleUrls: ['./faq-answer.component.css']
})
export class FaqAnswerComponent implements OnInit {
  faq:any;
  id:any;
  form:FormGroup = new FormGroup ({
    question:new FormControl(null),
    answer:new FormControl(null),
    visible: new FormControl(null)
  })
  constructor(private product:ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id')
    this.getFaqListByAnswer(this.id)
  }
  getFaqListByAnswer = (id:string) => {
    this.product.getFaqListByAnswer(id).subscribe(
      data => {
        this.faq = data;
        this.form.patchValue ({
          question:data.question,
          visible:data.visible
        })
      },
      error => {
      }
    );
  }
  answer():void{
    this.updateFaqQuestion(this.form.value.answer,  this.form.value.visible, this.id)
  }

  updateFaqQuestion = (answer:string, visible:string, id:string) => {
    this.product.updateFaqQuestion(answer, visible, id).subscribe(
      data => {
        this.faq = data;
        window.location.href='faq/list/manager'
      },
      error => {
      }
    );
  }
}
