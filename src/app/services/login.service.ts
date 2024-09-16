import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';
import { AdminService } from './admin.service';
import { AccountService } from './account.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  /*static getToken() {
    throw new Error('Method not implemented.');
  }*/
  public loginStatusSubject=new Subject<boolean>();


  constructor(private http:HttpClient,private account:AccountService) { }


  public getCurrentUser(){

    return this.http.get(`${baseUrl}/current-user`);
    
  }

  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }


  public loginUser(token: string){
    localStorage.setItem('token',token);
    this.loginStatusSubject.next(true);
   
    return true;
  }



  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr =='' || tokenStr ==null){
      return false;
    } else {
      return true;
    }
  }

  static getUserr():any{
    let userStr = localStorage.getItem('user');
    if(userStr !=null){
      return JSON.parse(userStr);
    }else {
    //  this.logout();
      return null;
    }}

  static getUserId():string {
    const user = this.getUserr();
    if (user == null){
      return '';
    }
    return user.userId;
  }


  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
   // this.account.logout();
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user: any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser():any{
    let userStr = localStorage.getItem('user');
    if(userStr !=null){
      return JSON.parse(userStr);
    }else {
      this.logout();
      return null;
    }
    
  }
  public getUserRole(){
    let user =this.getUser()
    return user.authorities[0].authority;
  }

}
