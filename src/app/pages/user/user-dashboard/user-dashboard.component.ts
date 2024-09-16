import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
  
  /*constructor(public login:LoginService){

  }

  NgOnInit():void{}

  isLoggedIn =false;
  user = null;


  ngOnInit():void{
    this.isLoggedIn=this.login.isLoggedIn();
    this.user = this.login.getUser();
  this.login.loginStatusSubject.asObservable().subscribe((data) => {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user = this.login.getUser();

  })
  }
  public logout(){
    this.login.logout();
    window.location.reload();
   //this.login.loginStatusSubject.next(false);
  }*/
  
  abonnements:any[] = [];
searchAbonnementForm!:FormGroup;

  
  constructor(private adminService:AdminService ,
    private fb:FormBuilder,
    private snackbar:MatSnackBar
  ){}


  ngOnInit(){
    this.getAllAbonnements();
    this.searchAbonnementForm = this.fb.group({
      title:[null,[Validators.required]]
    })
  }

  getAllAbonnements(){
    this.abonnements = [];
    this.adminService.getAllAbonnements().subscribe(res =>{
      res.forEach((element: { processedImg: string; byteImg: string; }) =>{
          element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
          this.abonnements.push(element);
        });
        console.log(this.abonnements)
      
    })
  }

  submitForm(){
    this.abonnements = [];
    const title = this.searchAbonnementForm.get('title')!.value;
    this.adminService.getAllAbonnementByName(title).subscribe(res =>{
      res.forEach((element: { processedImg: string; byteImg: string; }) =>{
          element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
          this.abonnements.push(element);
        });
        console.log(this.abonnements)

    })
  }

}
