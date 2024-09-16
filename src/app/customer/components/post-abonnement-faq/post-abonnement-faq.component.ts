import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-post-abonnement-faq',
  templateUrl: './post-abonnement-faq.component.html',
  styleUrls: ['./post-abonnement-faq.component.css']
})
export class PostAbonnementFaqComponent {


  abonnementId:number = this.activatedRoute.snapshot.params["abonnementId"];
  FAQForm!: FormGroup;


  constructor(private fb:FormBuilder,
    private router:Router,
    private snackBar: MatSnackBar,
    private adminService:AdminService,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(){
    this.FAQForm = this.fb.group ({
      question : [null,[Validators.required]],
      answer : [null,[Validators.required]],

    })
  }

  postFAQ(){
    this.adminService.postFAQ(this.abonnementId, this.FAQForm.value).subscribe(res =>{
      if(res.id !=null){
        this.snackBar.open('FAQ Posted Successfully' , 'Close' ,{
          duration:5000
        });
        this.router.navigateByUrl('/admin/dashboard');
      }else{
        this.snackBar.open("Something Went Wrong" , 'Close' , {
          duration:5000,
          panelClass:'error-snackbar'
        });
      }
      })
    }
  }

