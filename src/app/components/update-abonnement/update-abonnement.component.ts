import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-abonnement',
  templateUrl: './update-abonnement.component.html',
  styleUrls: ['./update-abonnement.component.css']
})
export class UpdateAbonnementComponent {

  abonnementId =this.activatedroute.snapshot.params['abonnementId'];
  
  abonnementForm!:FormGroup ;
  listOfCategories:any = [];
  selectedFile!:File | null ;
  imagePreview: string | ArrayBuffer | null | undefined;

  existingImage : string |null =null;
  imgChanged = false;

  constructor(private fb:FormBuilder,
    private router:Router,
    private snackBar:MatSnackBar,
    private adminService:AdminService ,
    private activatedroute:ActivatedRoute
  ){}

  onFileSelected(event:any){
    this.selectedFile=event.target.files[0];
    this.previewImage();
    this.imgChanged = true;

    this.existingImage
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
      description:[null,[Validators.required]],
    });

    this.getAllCategories();
    this.getAbonnementById();
  }

  getAllCategories(){
    this.adminService.getAllCategories().subscribe(res => {
      this.listOfCategories=res;
    })
  }
  getAbonnementById(){
    this.adminService.getAbonnementById(this.abonnementId).subscribe(res => {
      this.abonnementForm.patchValue(res);
      this.existingImage = 'data:image/jpeg;base64,' + res.byteImg;
    })
  }

  updateAbonnement(): void {
    if (this.abonnementForm.valid&& this.selectedFile

    ) {
       /* const formData: FormData = new FormData();

        if(this.imgChanged && this.selectedFile){

          formData.append('img', this.selectedFile);
        }*/

    /*    formData.append('categoryId', this.abonnementForm.get('categoryId')?.value);
        formData.append('name', this.abonnementForm.get('name')?.value);
        formData.append('description', this.abonnementForm.get('description')?.value);
        formData.append('price', this.abonnementForm.get('price')?.value);
*/
        this.adminService.updateAbonnement(this.abonnementId,this.abonnementForm.value).subscribe((res) => {
            if (res.id != null) {
                this.snackBar.open('Abonnement updated Successfully!', 'Close', {
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




}
