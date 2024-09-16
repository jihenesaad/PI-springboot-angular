import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { AccountService } from './account.service';


const BASIC_URL= "http://localhost:8082/";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

 // LoginService.getToken(): String | null;
  
  constructor( private http :HttpClient ,  private login:AccountService) { }

  addCategory(categoryDto:any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/admin/category', categoryDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllCategories(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/admin',  {
      headers: this.createAuthorizationHeader(),
    })
  }

  addAbonnement(abonnementDto:any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/admin/abonnement', abonnementDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  updateAbonnement(abonnementId:any,abonnementDto:any): Observable<any>{
    return this.http.put(BASIC_URL + `api/admin/abonnement/${abonnementId}`, abonnementDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllAbonnements(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/admin/abonnements',  {
      headers: this.createAuthorizationHeader(),
    })
  }

 

  getAbonnementById(abonnementId:any): Observable<any>{
    return this.http.get(BASIC_URL + `api/admin/abonnement/${abonnementId}`,  {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllAbonnementByName(title:any): Observable<any>{
    return this.http.get(BASIC_URL + `api/admin/dashboard/${title}`,  {
      headers: this.createAuthorizationHeader(),
    })
  }

  deleteAbonnement(abonnementId:any): Observable<any>{
    return this.http.delete(BASIC_URL + `api/admin/abonnement/${abonnementId}`,  {
      headers: this.createAuthorizationFooter(),
    })
  }

  addCoupon(couponDto:any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/admin/coupons', couponDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getCoupons(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/admin/coupons', {
      headers: this.createAuthorizationHeader(),
    })
  }

  getPlacedOrders(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/admin/placedOrders', {
      headers: this.createAuthorizationHeader(),
    })
  }

  changeOrderStatus(orderId:number , status:string): Observable<any>{
    return this.http.get(BASIC_URL + `api/admin/order/${orderId}/${status}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  postFAQ(abonnementId:number , faqDto:string): Observable<any>{
    return this.http.post(BASIC_URL + `api/admin/faq/${abonnementId}`, faqDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization','Bearer' + this.login.getAuthToken
    )
  }

  private createAuthorizationFooter(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization','Bearer' + this.login.accesstoken
    )
  }
}
