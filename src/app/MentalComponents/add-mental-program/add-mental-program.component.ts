import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FileServiceService } from 'src/app/MentalService/file-service.service';
import { MentalProgramService } from 'src/app/MentalService/mental-program.service';
import { MentalProgram } from 'src/app/mentalModels/MentalProgram';

@Component({
  selector: 'app-add-mental-program',
  templateUrl: './add-mental-program.component.html',
  styleUrls: ['./add-mental-program.component.css']
})
export class AddMentalProgramComponent {
  mentalProgramForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private mentalProgramService: MentalProgramService,
    private toastr: ToastrService,
    private http: HttpClient,
    private fileService :FileServiceService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.mentalProgramForm = this.formBuilder.group({
      category: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
      duration: ['', [Validators.required, Validators.min(0)]],
      pourcentage: ['',[Validators.required, Validators.min(0)]]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.mentalProgramForm.valid) {
      if (this.selectedFile) {
        this.fileService.uploadFile(this.selectedFile).subscribe(response => {
          const imageUrl = response.split(': ')[1];
          console.log(imageUrl); // Assurez-vous que l'URL est correcte

          this.addMentalProgram(imageUrl);
        });
      } else {
        this.toastr.error('Please select an image', 'Error');
      }
    }
  }

  addMentalProgram(imageUrl: string): void {
    const categoryControl = this.mentalProgramForm.get('category');
    const descriptionControl = this.mentalProgramForm.get('description');
    const durationControl = this.mentalProgramForm.get('duration');
    const pourcentageControl = this.mentalProgramForm.get('pourcentage');

    if (categoryControl && descriptionControl && durationControl &&
      categoryControl.value && descriptionControl.value && durationControl.value && pourcentageControl?.value ) {
      const newMentalProgram: MentalProgram = {
        idProgram: -1, // ou une valeur par défaut appropriée
        category: categoryControl.value,
        description: descriptionControl.value,
        duration: durationControl.value,
        urlImage: imageUrl,
        customer: [],
        pourcentage :pourcentageControl.value
      };

      this.mentalProgramService.addMentalProgram(newMentalProgram).subscribe(
        () => {
          console.log('Mental program added successfully');
          this.toastr.success('Mental program added successfully', 'Success');
          // Réinitialisez le formulaire après une soumission réussie
          this.mentalProgramForm.reset();
        },
        (error) => {
          console.error('Error adding mental program:', error);
          this.toastr.error('Error adding mental program', 'Error');
        }
      );
    }
  }


}
