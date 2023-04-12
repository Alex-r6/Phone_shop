import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinComponent } from './bin/bin.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { ChatOrderComponent } from './chat-order/chat-order.component';
import { ContactInfoListComponent } from './contact-info-list/contact-info-list.component';
import { ContactComponent } from './contact/contact.component';
import { DesiredGoodsComponent } from './desired-goods/desired-goods.component';
import { FaqAnswerComponent } from './faq-answer/faq-answer.component';
import { FaqListManagerComponent } from './faq-list-manager/faq-list-manager.component';
import { FaqComponent } from './faq/faq.component';
import { InfoPhoneComponent } from './info-phone/info-phone.component';
import { LoginComponent } from './login/login.component';
import { MainManagerComponent } from './main-manager/main-manager.component';
import { MainComponent } from './main/main.component';
import { ManagerCommentsComponent } from './manager-comments/manager-comments.component';
import { OrderListManagerComponent } from './order-list-manager/order-list-manager.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductComparisonComponent } from './product-comparison/product-comparison.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'login', component: LoginComponent},
  {path:'bin', component:BinComponent},
  {path:'info/phone/:id', component:InfoPhoneComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'order/list', component:OrderListComponent},
  {path:'profile', component:ProfileComponent},
  {path:'change/status/:id', component:ChangeStatusComponent},
  {path:'order/list/manager', component:OrderListManagerComponent},
  {path:'order/success/:id', component:OrderSuccessComponent},
  {path:'manager/comments', component:ManagerCommentsComponent},
  {path:'main/manager/:id', component:MainManagerComponent},
  {path:'desire/goods', component:DesiredGoodsComponent},
  {path:'product/comparison', component:ProductComparisonComponent},
  {path:'contact', component:ContactComponent},
  {path:'faq', component:FaqComponent},
  {path:'contact/info/list', component:ContactInfoListComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/details/:id', component:BlogDetailsComponent},
  {path:'faq/list/manager', component:FaqListManagerComponent},
  {path:'faq/answer/:id', component:FaqAnswerComponent},
  {path:'chat/order/:id', component:ChatOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
