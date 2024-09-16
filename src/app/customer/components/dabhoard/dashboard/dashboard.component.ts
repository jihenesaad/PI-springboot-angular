import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/services/customer.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  
  abonnements:any[] = [];
searchAbonnementForm!:FormGroup;

  
  constructor( private router:Router ,private   CustomerService:CustomerService ,
    private adminService:AdminService,
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
/* */
addToCart(abonnementId: any) {
  this.CustomerService.addToCart(abonnementId).subscribe(
    res => {
      this.snackbar.open("Abonnement added to cart Successfully", "Close", { duration: 5000 });
    },
    error => {
      console.error(error); // Affiche l'erreur renvoyée par le service dans la console
      this.snackbar.open("Abonnement added to cart Successfully", "Close", { duration: 5000 });
      // Affiche un message à l'utilisateur indiquant qu'il doit se connecter pour ajouter des abonnements au panier
     this.router.navigate(['/customer/cart']);
    }
  );
  console.log("done");
}


}
