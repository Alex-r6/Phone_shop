import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl

  constructor(private http: HttpClient) { }
  getTokenUser(username:string, password:string):Observable<any>{
    const body = {username:username, password:password}
    return this.http.post(this.baseUrl + '/auth-token/token/login/', body)
  }
  getUserRegistration(username:string, password:string, email:string):Observable<any>{
    const body = {username:username, password:password, email:email}
    return this.http.post(this.baseUrl + '/auth/users/', body)
  }
  getOrderListByUser(token:string, page:string):Observable<any>{
    return this.http.get(this.baseUrl + '/order/get/order/list/by/user/?page=' + page, 
    {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
  }
  getProfileToToken(token:string):Observable<any>{
    return this.http.get(this.baseUrl + '/user/get/profile/to/token/', 
    {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + token}})
  }
  updateProfileToToken(token:string, nickname:string, phone:string, viber:string, telegram:string, img:File):Observable<any>{
    let body = new FormData();
    if (nickname != null) {
      body.append('nickname', nickname);
    }
    if (phone != null){
      body.append('phone',phone)
    }
    if (viber != null){
      body.append('viber',viber)
    }
    if (telegram != null){
      body.append('telegram',telegram)
    }
    if (img != null){
      body.append('img',img)
    }
    return this.http.patch(this.baseUrl + '/user/update/profile/to/token/', body,
    {headers: { Authorization: 'Token ' + token}})
  }
}
