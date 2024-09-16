import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  
  
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

    deleteAbonnement(abonnementId:any){
      this.adminService.deleteAbonnement(abonnementId).subscribe(res =>{
       console.log(res);
        if(res == null){
          this.snackbar.open('Abonnement Deleted Successfully' , 'Close' , {
            duration :5000
          });
          this.getAllAbonnements();
        }
          else{
            this.snackbar.open(res.message , 'Close' , {
              duration : 5000,
              panelClass: 'error-snackbar'
            });
          }
        })
      }
    }

  


