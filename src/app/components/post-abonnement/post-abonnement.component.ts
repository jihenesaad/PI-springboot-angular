import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-post-abonnement',
  templateUrl: './post-abonnement.component.html',
  styleUrls: ['./post-abonnement.component.css']
})
export class PostAbonnementComponent {

  abonnementForm!:FormGroup ;
  listOfCategories:any = [];
  selectedFile!:File | null ;
  imagePreview: string | ArrayBuffer | null | undefined;

  constructor(private fb:FormBuilder,
    private router:Router,
    private snackBar:MatSnackBar,
    private adminService:AdminService
  ){}

  onFileSelected(event:any){
    this.selectedFile=event.target.files[0];
    this.previewImage();
  }
  previewImage() {
    if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result as string;
        }
        reader.readAsDataURL(this.selectedFile);
    }
}


  ngOnInit():void{
    this.abonnementForm = this.fb.group({
      categoryId:[null,[Validators.required]],
      name:[null,[Validators.required]],
      price:[null,[Validators.required]],
      decription:[null,[Validators.required]],
    });

    this.getAllCategories();
  }

  getAllCategories(){
    this.adminService.getAllCategories().subscribe(res => {
      this.listOfCategories=res;
    })
  }

  addAbonnement(): void {
    if (this.abonnementForm.valid && this.selectedFile

    ) {
       // const formData: FormData = new FormData();
       
       /* formData.append('categoryId', this.abonnementForm.get('categoryId')?.value);
        formData.append('name', this.abonnementForm.get('name')?.value);
        formData.append('description', this.abonnementForm.get('description')?.value);
        formData.append('price', this.abonnementForm.get('price')?.value);
*/
        this.adminService.addAbonnement(this.abonnementForm.value).subscribe((res) => {
            if (res.id != null) {
                this.snackBar.open('Abonnement Posted Successfully!', 'Close', {
                    duration: 5000
                });
                this.router.navigateByUrl('/admin/profile');
            } else {
                this.snackBar.open(res.message, 'ERROR', {
                    duration: 5000
                });
            }
        })

    } else {
        for (const i in this.abonnementForm.controls) {
            this.abonnementForm.controls[i].markAsDirty();
            this.abonnementForm.controls[i].updateValueAndValidity();
        }
    }
}
// formData.append('img', this.selectedFile);

}
