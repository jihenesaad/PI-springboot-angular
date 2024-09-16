import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-back',
  templateUrl: './sidebar-back.component.html',
  styleUrls: ['./sidebar-back.component.css']
})
export class SidebarBackComponent implements OnInit {

  isLoggedIn =false;
  user = null;

  constructor(public login:LoginService,
    public account:AccountService
  ){}

  ngOnInit():void{
    this.isLoggedIn=this.login.isLoggedIn();
    this.user = this.login.getUser();
  this.login.loginStatusSubject.asObservable().subscribe((data) => {
    //.isLoggedIn=this.login.isLoggedIn();
    //this.user = this.login.getUser();

  })
  }

   public logoutt(){
    this.account.logout();
    window.location.reload();
    //this.account.loginStatusSubject.next(false);
  }
  /*
  public logout(){
    this.login.logout();
    window.location.reload();
   //this.login.loginStatusSubject.next(false);
  }
  /*
  isLoggedInn(): boolean {
    return this.login.isLoggedIn();
  }*/
  /*
  logoutt(): void {
    this.login.logout();
  }*/

}
