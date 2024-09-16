import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { LoginService } from 'src/app/services/login.service';


const BASIC_URL= "http://localhost:8082/";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient,
    private login:AccountService,
    private account:LoginService
  ) { }


  
  getAllAbonnements(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/customer/abonnements',  {
      headers: this.createAuthorizationHeader(),
    })
  }



  getAllAbonnementByName(name:any): Observable<any>{
    return this.http.get(BASIC_URL + `api/customer/search${name}`,  {
      headers: this.createAuthorizationHeader(),
    })
  }

  addToCart(abonnementId: any): Observable<any> {
    const userId = this.login.userid;
    console.log(userId);
    if (!userId) {
      console.log("User ID is null. Please handle this case."); // Affiche un message d'erreur dans la console
      return throwError("User ID is null"); // Renvoie une erreur observable pour être gérée dans le composant
    }
  
    const cartDto = {
      abonnementId: abonnementId,
      userId: userId
    };
  
    return this.http.post(BASIC_URL + `api/customer/cart`, cartDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  
  increaseAbonnementQuantity(abonnementId: any): Observable<any> {
    const userId = this.login.userid;
    console.log(userId);
    if (!userId) {
      console.log("User ID is null. Please handle this case."); // Affiche un message d'erreur dans la console
      return throwError("User ID is null"); // Renvoie une erreur observable pour être gérée dans le composant
    }
  
    const cartDto = {
      abonnementId: abonnementId,
      userId: userId
    };
  
    return this.http.post(BASIC_URL + `api/customer/addition`, cartDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  decreaseAbonnementQuantity(abonnementId: any): Observable<any> {
    const userId = this.login.userid;
    console.log(userId);
    if (!userId) {
      console.log("User ID is null. Please handle this case."); // Affiche un message d'erreur dans la console
      return throwError("User ID is null"); // Renvoie une erreur observable pour être gérée dans le composant
    }
  
    const cartDto = {
      abonnementId: abonnementId,
      userId: userId
    };
  
    return this.http.post(BASIC_URL + `api/customer/deduction`, cartDto, {
      headers: this.createAuthorizationHeader(),
    });
  }


  getCartByUserId(): Observable<any>{
  const userId =this.login.userid;
    
    return this.http.get(BASIC_URL + `api/customer/cart/${userId}`,  {
      headers: this.createAuthorizationHeader(),
    })
  }

  applyCoupon(code:any): Observable<any>{
    const userId =this.login.userid;
      
      return this.http.get(BASIC_URL + `api/customer/coupon/${userId}/${code}`,  {
        headers: this.createAuthorizationHeader(),
      })
    }

    placeOrder(orderDto:any): Observable<any>{
      orderDto.userId =this.login.userid;
        
        return this.http.post(BASIC_URL + `api/customer/placeOrder`,  orderDto, {
          headers: this.createAuthorizationHeader(),
        })
      }

    getOrdersByUserId(): Observable<any>{
         const userId =this.login.userid;
          
          return this.http.get(BASIC_URL + `api/customer/myOrders/${userId}`, {
            headers: this.createAuthorizationHeader(),
          })
        }
        /*
        
  getPlacedOrders(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/admin/placedOrders', {
      headers: this.createAuthorizationHeader(),
    })
  } */
    
         
        getOrderedAbonnement(orderId:number): Observable<any>{
         
          return this.http.get(BASIC_URL + `api/customer/ordered_abonnements/${orderId}`, {
            headers: this.createAuthorizationHeader(),
          })
        }
       

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization','Bearer' + this.login.getAuthToken
    )
  }
}
