import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  getAllProductList(page:string):Observable<any> {
    return this.http.get(this.baseurl + '/product/get/all/product/list/?page=' + page )
  }
  getAllCategoryList():Observable<any>{
    return this.http.get(this.baseurl + '/product/get/all/category/list/')
  }
  getProductFilterByCategory(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/product/filter/by/category/' + id + '/')
  }
  getProduct(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/product/' + id + '/')
  }
  addOrder(token:string, fio:string, phone:string, address:string, email:string):Observable<any>{
    const body = {fio:fio, phone:phone, address:address, email:email}
    return this.http.post(this.baseurl + '/order/add/order/', body, 
    {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
  }
  addProductComment(token:string, text:string, product:string):Observable<any>{
    const body = {text:text, product:product}
    if (token){
      return this.http.post(this.baseurl + '/product/add/product/comment/', body, 
      {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
    }else{
      return this.http.post(this.baseurl + '/product/add/product/comment/', body)
    }
  }
  getProductCommentList(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/product/comment/list/' + id + '/')
  }
  addElemOrder(order:string, count:string, product:string):Observable<any>{
    const body = {order:order, count:count, product:product}
    return this.http.post(this.baseurl + '/order/add/elem/order/', body)
  }
  delOrder(id:string):Observable<any>{
    return this.http.delete(this.baseurl + '/order/del/order/' + id + '/')
  }
  getAllOrderStatusList():Observable<any>{
    return this.http.get(this.baseurl + '/order/get/all/order/status/list/')
  }
  updateOrderStatus(status:string, id:string, token:string):Observable<any>{
    const body={status:status}
    return this.http.patch(this.baseurl + '/order/update/order/' + id + '/', body, 
    {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
  }
  getListOrderManager(token:string, page:string):Observable<any>{
    return this.http.get(this.baseurl + '/user/get/list/order/manager/?page=' + page, 
    {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
  }
  getProductImgList(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/product/img/list/' + id + '/') 
  }
  searchProductByName(search:string, page:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/search/product/by/name/' + search + '/?page='+ page)
  }
  getOrderById(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/order/get/order/by/id/' + id + '/')
  }
  getElemOrderByOrderId(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/order/get/elem/order/by/order/id/' + id +'/')
  }
  getAllCommentByManager():Observable<any>{
    return this.http.get(this.baseurl + '/product/get/all/comment/by/manager/')
  }
  delCommentManagerById(id:string):Observable<any>{
    return this.http.delete(this.baseurl + '/product/del/comment/manager/by/id/' + id + '/')
  }
  getAllProductsLogo():Observable<any>{
    return this.http.get(this.baseurl + '/product/get/all/products/logo/')
  }
  deleteOrderByManager(id:string):Observable<any>{
    return this.http.delete(this.baseurl + '/order/delete/order/by/manager/' + id + '/')
  }
  getPopularProduct():Observable<any>{
    return this.http.get(this.baseurl + '/product/get/popular/product/')
  }
  getAllBannersList():Observable<any>{
    return this.http.get(this.baseurl + '/product/get/all/banners/list/')
  }
  getSameProductByCategory(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/same/product/by/category/' + id + '/')
  }
  addLike(token:string, product: string):Observable<any>{
    const body={product:product}
    return this.http.post(this.baseurl + '/product/add/like/', body, 
    {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
  }
  addNeedfullProduct(token:string, product:string):Observable<any>{
    const body={product:product}
    return this.http.post(this.baseurl + '/product/add/needfullproduct/', body, 
    {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
  }
  getAllNeeedfullProductList():Observable<any>{
    return this.http.get(this.baseurl + '/product/get/all/needfullproduct/list/')
  }
  delNeedfullProduct(id:string):Observable<any>{
    return this.http.delete(this.baseurl + '/product/del/needfullproduct/' + id + '/')
  }
  addProductComparison(token:string, product:string):Observable<any>{
    const body = {product:product}
    return this.http.post(this.baseurl + '/product/add/product/comparison/', body, 
    {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
  }
  getProductComparisonByUser(token:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/product/comparison/by/user/', 
    {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
  }
  delProductComparison(id:string):Observable<any>{
    return this.http.delete(this.baseurl + '/product/del/product/comparison/' + id + '/')
  }
  addContactInfo(name_form:string, email:string, phone:string, message:string, token:string):Observable<any>{
    const body={name_form:name_form, email:email, phone:phone, message:message}
    if(token){
      return this.http.post(this.baseurl + '/product/add/contact/info/', body,
    {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
    }else{
      return this.http.post(this.baseurl + '/product/add/contact/info/', body)
    }
  }
  getFaqList():Observable<any>{
    return this.http.get(this.baseurl + '/product/get/fag/list/')
  }
  getAllContactInfoList(page:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/all/contact/info/list/?page=' + page)
  }
  getAllArticlesList():Observable<any>{
    return this.http.get(this.baseurl + '/product/get/all/articles/list/')
  }
  getAllCategoryArticleList():Observable<any>{
    return this.http.get(this.baseurl + '/product/get/all/category/article/list/')
  }
  getArticleByCategory(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/article/by/category/' + id + '/')
  }
  getArticleById(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/article/by/id/' + id + '/')
  }
  getBlogCommentList(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/blog/comment/list/' + id + '/')
  }
  addBlogComment(name_form:string, email:string, comment:string, article:string, token:string):Observable<any>{
    const body = {name_form:name_form, email:email, comment:comment, article:article}
    if(token){
      return this.http.post(this.baseurl + '/product/add/blog/comment/', body, 
      {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
    }else{
      return this.http.post(this.baseurl + '/product/add/blog/comment/', body)
    }
  }
  addFaqQuestion(name_form:string, question:string, token:string):Observable<any>{
    const body = {name_form:name_form, question:question}
    if(token){
      return this.http.post(this.baseurl + '/product/add/faq/question/', body, 
      {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
    }else{
      return this.http.post(this.baseurl + '/product/add/faq/question/', body)
    }
  }
  getAllFaqList(page:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/all/faq/list/?page=' + page)
  }
  getFaqListByAnswer(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/faq/list/by/answer/' + id + '/')
  }
  updateFaqQuestion(answer:string, visible:string, id:string):Observable<any>{
    const body = {answer:answer, visible:visible}
    return this.http.patch(this.baseurl + '/product/update/faq/question/' + id + '/', body)
  }
  addChatOrder(form_name:string,text:string, token:string, id:string, order:string):Observable<any>{
    const body = {form_name:form_name, text:text, order:order}
    if(token){
      return this.http.post(this.baseurl + '/order/add/chat/order/' + id + '/', body,
      {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})  
    }else{
      return this.http.post(this.baseurl + '/order/add/chat/order/' + id + '/', body)
    }
  }
  getChatOrderById(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/order/get/chat/order/by/id/' + id + '/')
  }
  getProductSpecificationById(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/product/specification/by/id/' + id + '/')
  }
  getListVideoToProduct(id:string):Observable<any>{
    return this.http.get(this.baseurl + '/product/get/list/video/to/product/' + id + '/')
  }
  sendMessageToMail(subject:string, text:string, email:string):Observable<any>{
    const body = {subject:subject, text:text, email:email}
    return this.http.post(this.baseurl + '/order/send/message/to/mail/', body)
  }
 
}
