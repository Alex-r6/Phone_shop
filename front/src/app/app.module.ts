import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BinComponent } from './bin/bin.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoPhoneComponent } from './info-phone/info-phone.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { OrderListManagerComponent } from './order-list-manager/order-list-manager.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ManagerCommentsComponent } from './manager-comments/manager-comments.component';
import { MainManagerComponent } from './main-manager/main-manager.component';
import { DesiredGoodsComponent } from './desired-goods/desired-goods.component';
import { ProductComparisonComponent } from './product-comparison/product-comparison.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ContactInfoListComponent } from './contact-info-list/contact-info-list.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { FaqListManagerComponent } from './faq-list-manager/faq-list-manager.component';
import { FaqAnswerComponent } from './faq-answer/faq-answer.component';
import { ChatOrderComponent } from './chat-order/chat-order.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    BinComponent,
    HeaderComponent,
    InfoPhoneComponent,
    RegistrationComponent,
    OrderListComponent,
    ProfileComponent,
    ChangeStatusComponent,
    OrderListManagerComponent,
    OrderSuccessComponent,
    ManagerCommentsComponent,
    MainManagerComponent,
    DesiredGoodsComponent,
    ProductComparisonComponent,
    ContactComponent,
    FaqComponent,
    ContactInfoListComponent,
    BlogComponent,
    BlogDetailsComponent,
    FaqListManagerComponent,
    FaqAnswerComponent,
    ChatOrderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
